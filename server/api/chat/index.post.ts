import OpenAI from "openai";
import { DataAPIClient } from "@datastax/astra-db-ts";

// Check for required environment variables
if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set in environment variables");
}

if (
  !process.env.ASTRA_DB_APPLICATION_TOKEN ||
  !process.env.ASTRA_DB_API_ENDPOINT ||
  !process.env.ASTRA_DB_NAMESPACE ||
  !process.env.ASTRA_DB_COLLECTION
) {
  throw new Error(
    "One or more required Astra DB environment variables are not set"
  );
}

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Astra DB client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);

// Get database and collection
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  keyspace: process.env.ASTRA_DB_NAMESPACE,
});

// Specify runtime for better performance
export const runtime = "edge";

export default defineEventHandler(async (event) => {
  try {
    const { messages } = await readBody(event);

    // Get the last user message
    const lastMessage = messages[messages?.length - 1]?.content;

    let docContext = "";

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: lastMessage,
      encoding_format: "float",
    });

    try {
      const collection = db.collection(
        process.env.ASTRA_DB_COLLECTION as string
      );
      const cursor = collection.find(
        {},
        {
          sort: {
            $vector: embedding.data[0].embedding,
          },
          limit: 10,
        }
      );

      const documents = await cursor.toArray();

      if (Array.isArray(documents)) {
        const docsMap = documents.map((doc) => doc.text || "");
        docContext = JSON.stringify(docsMap);
      }
    } catch (error) {
      console.log("Error querying db:", error);
    }

    const template = {
      role: "system",
      content: `
				You are a helpful AI assistant for YoungPreneur Academy, a mentorship and training platform where students cultivate entrepreneurial thinking and develop skills to compete in national and international business case competitions.
				Use the below context to answer what you know about the YoungPreneur Academy program.
				The context will provide you with the most recent page data from the YoungPreneur Academy website. 
				If the context doesn't include the information, you need to answer based on you existing knowledge
				and don't mention the source of you information or what the context does or doesn't include.
				Format responses using markdown where applicable and don't return images.

				-----------
				START CONTEXT
				${docContext}
				END CONTEXT
				-----------
				QUESTION: ${lastMessage}
				-----------
			`,
    };

    console.log("check");

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      stream: false,
      messages: [template, ...messages],
    });

    return {
      role: "assistant",
      content: response.choices[0].message.content,
    };
  } catch (error: any) {
    console.error("API Error:", error);
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
});
