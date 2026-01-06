import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface InquiryFormData {
  name: string;
  phone: string;
  company: string;
  department: string;
  email: string;
  year: string;
  month: string;
  day: string;
  noSchedule: boolean;
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: InquiryFormData = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the schedule
    const schedule = formData.noSchedule
      ? "정해진 기간 없음"
      : `${formData.year}년 ${formData.month}월 ${formData.day}일`;

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nk@networkkorea.co.kr",
      subject: `[네트워크코리아 문의] ${formData.company} - ${formData.name}`,
      html: `
        <div style="font-family: 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0088ff; border-bottom: 2px solid #0088ff; padding-bottom: 10px;">
            새로운 상담 문의가 접수되었습니다
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold; width: 150px;">
                이름 (담당자)
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                ${formData.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">
                연락처
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                ${formData.phone}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">
                기업명
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                ${formData.company}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">
                부서(직위)
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                ${formData.department}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">
                이메일
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                <a href="mailto:${formData.email}">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">
                희망 시공 일정
              </td>
              <td style="padding: 12px; border: 1px solid #ddd;">
                ${schedule}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold; vertical-align: top;">
                문의 상세 내용
              </td>
              <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">
                ${formData.content}
              </td>
            </tr>
          </table>

          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            이 메일은 네트워크코리아 웹사이트에서 자동으로 발송되었습니다.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "문의가 성공적으로 접수되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "문의 접수 중 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
