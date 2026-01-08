import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "consulting-links.json");

interface ConsultingLink {
  id: string;
  titleKor: string;
  titleEng: string;
  url: string;
}

interface ConsultingLinksData {
  links: {
    [key: string]: ConsultingLink;
  };
}

function readData(): ConsultingLinksData {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      links: {
        serviceInfo: {
          id: "serviceInfo",
          titleKor: "서비스 안내",
          titleEng: "Service Information",
          url: "/assets/service-info.html",
        },
        onlineConsulting: {
          id: "onlineConsulting",
          titleKor: "온라인 무료컨설팅",
          titleEng: "Free Online Consulting",
          url: "/assets/online-consulting.html",
        },
        electricalSafetyReport: {
          id: "electricalSafetyReport",
          titleKor: "낭비전력 진단 요약 리포트",
          titleEng: "Waste Power Diagnosis Summary Report",
          url: "/assets/electrical-safety-report.html",
        },
        peakPowerReport: {
          id: "peakPowerReport",
          titleKor: "피크원인 진단 요약 리포트",
          titleEng: "Peak Cause Diagnosis Summary Report",
          url: "/assets/peak-power-report.html",
        },
      },
    };
  }
}

function writeData(data: ConsultingLinksData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch all consulting links
export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data.links, { status: 200 });
  } catch (error) {
    console.error("Error reading consulting links:", error);
    return NextResponse.json(
      { message: "Failed to fetch consulting links" },
      { status: 500 }
    );
  }
}

// PUT - Update a consulting link
export async function PUT(request: NextRequest) {
  try {
    // Verify admin password
    const authHeader = request.headers.get("Authorization");
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, url } = body;

    if (!id || !url) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = readData();

    if (!data.links[id]) {
      return NextResponse.json({ message: "Link not found" }, { status: 404 });
    }

    data.links[id].url = url;
    writeData(data);

    return NextResponse.json(data.links[id], { status: 200 });
  } catch (error) {
    console.error("Error updating consulting link:", error);
    return NextResponse.json(
      { message: "Failed to update consulting link" },
      { status: 500 }
    );
  }
}
