import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "qna.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

interface TextSegment {
  text: string;
  bold?: boolean;
}

interface FormattedContent {
  lines: { label?: string; text: string }[];
  subSection?: {
    title: string;
    bullets: string[];
  };
}

interface ImageContent {
  title: string;
  imageSrc: string;
}

interface RichTextContent {
  lines: TextSegment[][];
}

interface QnAItem {
  id: number;
  questionKor: string;
  questionEng: string;
  answerType: "text" | "formatted" | "image" | "richText";
  answerKor: {
    content?: string;
    formattedContent?: FormattedContent;
    imageContent?: ImageContent;
    richTextContent?: RichTextContent;
  };
  answerEng: {
    content?: string;
    formattedContent?: FormattedContent;
    imageContent?: ImageContent;
    richTextContent?: RichTextContent;
  };
}

interface QnAData {
  questions: QnAItem[];
  nextId: number;
}

function readData(): QnAData {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { questions: [], nextId: 1 };
  }
}

function writeData(data: QnAData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) return false;
  const password = authHeader.replace("Bearer ", "");
  return password === ADMIN_PASSWORD;
}

// GET - Fetch all Q&A items
export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data.questions);
  } catch (error) {
    console.error("Error reading Q&A data:", error);
    return NextResponse.json(
      { error: "Failed to read Q&A data" },
      { status: 500 }
    );
  }
}

// POST - Add new Q&A item
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = readData();

    const newItem: QnAItem = {
      id: data.nextId,
      questionKor: body.questionKor,
      questionEng: body.questionEng,
      answerType: body.answerType,
      answerKor: body.answerKor,
      answerEng: body.answerEng,
    };

    data.questions.push(newItem);
    data.nextId += 1;
    writeData(data);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Error adding Q&A item:", error);
    return NextResponse.json(
      { error: "Failed to add Q&A item" },
      { status: 500 }
    );
  }
}

// PUT - Update Q&A item
export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, questionKor, questionEng, answerType, answerKor, answerEng } = body;

    const data = readData();
    const itemIndex = data.questions.findIndex((q) => q.id === id);

    if (itemIndex === -1) {
      return NextResponse.json(
        { error: "Q&A item not found" },
        { status: 404 }
      );
    }

    data.questions[itemIndex] = {
      id,
      questionKor,
      questionEng,
      answerType,
      answerKor,
      answerEng,
    };

    writeData(data);
    return NextResponse.json(data.questions[itemIndex]);
  } catch (error) {
    console.error("Error updating Q&A item:", error);
    return NextResponse.json(
      { error: "Failed to update Q&A item" },
      { status: 500 }
    );
  }
}

// DELETE - Delete Q&A item
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    const data = readData();
    const itemIndex = data.questions.findIndex((q) => q.id === id);

    if (itemIndex === -1) {
      return NextResponse.json(
        { error: "Q&A item not found" },
        { status: 404 }
      );
    }

    data.questions.splice(itemIndex, 1);
    writeData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting Q&A item:", error);
    return NextResponse.json(
      { error: "Failed to delete Q&A item" },
      { status: 500 }
    );
  }
}
