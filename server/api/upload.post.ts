import { v2 as cloudinary } from "cloudinary";
import { defineEventHandler, readMultipartFormData } from "h3";

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event);
    const file = formData?.find((item) => item.name === "file");

    if (!file) {
      return {
        error: "No file uploaded",
        details: "Please provide a file to upload",
      };
    }

    // Upload to Cloudinary
    const result = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw",
            folder: "resumes",
            format: "pdf",
            use_filename: true,
            unique_filename: true,
            timestamp: Math.round(Date.now() / 1000),
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as CloudinaryUploadResult);
          }
        );

        uploadStream.end(file.data);
      }
    );

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error: any) {
    console.error("Upload error:", error);
    return {
      error: "Failed to upload file",
      details: error.message,
    };
  }
});
