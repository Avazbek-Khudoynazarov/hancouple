import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "certificates.json");
const UPLOADS_DIR = path.join(process.cwd(), "uploads", "certificates");

interface Certificate {
  id: number;
  titleKor: string;
  titleEng: string;
  imagePath: string;
}

interface CertificatesData {
  certificates: Certificate[];
  nextId: number;
}

function readData(): CertificatesData {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { certificates: [], nextId: 1 };
  }
}

function writeData(data: CertificatesData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch all certificates
export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data.certificates, { status: 200 });
  } catch (error) {
    console.error("Error reading certificates:", error);
    return NextResponse.json(
      { message: "Failed to fetch certificates" },
      { status: 500 }
    );
  }
}

// POST - Add new certificate
export async function POST(request: NextRequest) {
  try {
    // Verify admin password
    const authHeader = request.headers.get("Authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const titleKor = formData.get("titleKor") as string;
    const titleEng = formData.get("titleEng") as string;
    const image = formData.get("image") as File;

    if (!titleKor || !titleEng || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = readData();
    const newId = data.nextId;

    // Save image to uploads folder (persistent storage)
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const fileName = `${newId}.png`;
    const fullImagePath = path.join(UPLOADS_DIR, fileName);

    // Ensure directory exists
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    fs.writeFileSync(fullImagePath, imageBuffer);

    // Use API route to serve the image
    const imagePath = `/api/uploads/certificates/${fileName}`;

    // Add new certificate
    const newCertificate: Certificate = {
      id: newId,
      titleKor,
      titleEng,
      imagePath,
    };

    data.certificates.push(newCertificate);
    data.nextId = newId + 1;
    writeData(data);

    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    console.error("Error adding certificate:", error);
    return NextResponse.json(
      { message: "Failed to add certificate" },
      { status: 500 }
    );
  }
}

// DELETE - Remove certificate
export async function DELETE(request: NextRequest) {
  try {
    // Verify admin password
    const authHeader = request.headers.get("Authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");

    if (!id) {
      return NextResponse.json(
        { message: "Certificate ID is required" },
        { status: 400 }
      );
    }

    const data = readData();
    const certificateIndex = data.certificates.findIndex((c) => c.id === id);

    if (certificateIndex === -1) {
      return NextResponse.json(
        { message: "Certificate not found" },
        { status: 404 }
      );
    }

    // Remove certificate image
    const certificate = data.certificates[certificateIndex];
    // Support both old public folder paths and new uploads paths
    let imageFilePath: string;
    if (certificate.imagePath.startsWith("/api/uploads/")) {
      const fileName = path.basename(certificate.imagePath);
      imageFilePath = path.join(UPLOADS_DIR, fileName);
    } else {
      imageFilePath = path.join(process.cwd(), "public", certificate.imagePath);
    }
    if (fs.existsSync(imageFilePath)) {
      fs.unlinkSync(imageFilePath);
    }

    // Remove from data
    data.certificates.splice(certificateIndex, 1);
    writeData(data);

    return NextResponse.json(
      { message: "Certificate deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting certificate:", error);
    return NextResponse.json(
      { message: "Failed to delete certificate" },
      { status: 500 }
    );
  }
}
