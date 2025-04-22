import { defineEventHandler, readMultipartFormData } from "h3";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event);
    if (!formData) {
      return {
        error: "No file uploaded",
      };
    }

    const file = formData.find((item) => item.name === "file");
    if (!file) {
      return {
        error: "No file found in form data",
      };
    }

    // Validate file type
    if (!file.type?.includes("pdf")) {
      return {
        error: "Only PDF files are allowed",
      };
    }

    // Validate file size (5MB limit)
    if (file.data.length > 5 * 1024 * 1024) {
      return {
        error: "File size should be less than 5MB",
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.filename}`;
    const uploadPath = join(process.cwd(), "uploads", filename);

    // Save file
    await writeFile(uploadPath, file.data);

    return {
      url: `/uploads/${filename}`,
      filename: filename,
      size: file.data.length,
      mimetype: file.type,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      error: "Failed to upload file",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
});
