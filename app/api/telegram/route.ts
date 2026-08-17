import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 받은 요청 데이터:", body);

    const { message, telegramMessage, name, job, phone, amount } = body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("❌ 환경변수 누락");
      return NextResponse.json(
        { error: "TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID 환경변수가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    // 기존의 이모티콘 형식을 살린 메시지 양식 적용
    let textToSend = telegramMessage || message;

    if (!textToSend && name) {
      textToSend = `
🔔 GOLDLOAN 신규 신청

👤 이름: ${name}
💼 직업: ${job || '선택 안 함'}
📞 연락처: ${phone}
💰 희망금액: ${amount}원
      `.trim();
    }

    if (!textToSend) {
      console.error("❌ 전송할 텍스트가 없음. 받은 데이터:", body);
      return NextResponse.json(
        { error: "전송할 메시지 내용이 없습니다." },
        { status: 400 }
      );
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: textToSend,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ 텔레그램 API 거부:", data);
      return NextResponse.json({ error: data.description }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("❌ 서버 에러:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}