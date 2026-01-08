import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

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
    const imagePath = `/assets/qna/${filename}`;
    const fullImagePath = path.join(process.cwd(), "public", imagePath);

    // Ensure directory exists
    const imageDir = path.dirname(fullImagePath);
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }

    // Save image
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(fullImagePath, imageBuffer);

    return NextResponse.json({ imagePath }, { status: 201 });
  } catch (error) {
    console.error("Error uploading Q&A image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
