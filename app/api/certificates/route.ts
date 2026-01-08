import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "certificates.json");

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

    // Save image to public folder
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const imagePath = `/assets/introduction/certificates/${newId}.png`;
    const fullImagePath = path.join(process.cwd(), "public", imagePath);

    // Ensure directory exists
    const imageDir = path.dirname(fullImagePath);
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }

    fs.writeFileSync(fullImagePath, imageBuffer);

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
    const imagePath = path.join(process.cwd(), "public", certificate.imagePath);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
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
