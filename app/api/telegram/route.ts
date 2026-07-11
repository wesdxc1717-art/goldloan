import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, amount } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken) {
      return NextResponse.json(
        { error: "TELEGRAM_BOT_TOKEN이 없습니다." },
        { status: 500 }
      );
    }

    if (!chatId) {
      return NextResponse.json(
        { error: "TELEGRAM_CHAT_ID가 없습니다." },
        { status: 500 }
      );
    }

    const text = `
🔔 GOLDLOAN 신규 신청

👤 이름 : ${name}
📞 연락처 : ${phone}
💰 희망금액 : ${amount}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const result = await response.json();

    console.log("Telegram Result:", result);

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Telegram Error" },
      { status: 500 }
    );
  }
}