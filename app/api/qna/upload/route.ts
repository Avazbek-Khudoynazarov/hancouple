import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const UPLOADS_DIR = path.join(process.cwd(), "uploads", "qna");

export async function POST(request: NextRequest) {
  try {
    // Verify admin password
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const image = formData.get("image") as File;
    const language = formData.get("language") as string; // "kor" or "eng"

    if (!image) {
      return NextResponse.json(
        { error: "Image file is required" },
        { status: 400 }
      );
    }

    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const extension = image.name.split(".").pop() || "png";
    const filename = `qna_${language}_${timestamp}.${extension}`;
    const fullImagePath = path.join(UPLOADS_DIR, filename);

    // Ensure directory exists
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    // Save image
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(fullImagePath, imageBuffer);

    // Use API route to serve the image
    const imagePath = `/api/uploads/qna/${filename}`;

    return NextResponse.json({ imagePath }, { status: 201 });
  } catch (error) {
    console.error("Error uploading Q&A image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
