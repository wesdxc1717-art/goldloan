"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BottomForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [agree, setAgree] =useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !amount) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (!agree) {
      alert("개인정보 동의가 필요합니다.");
      return;
    }

    const { error } = await supabase.from("applications").insert([
      {
        name,
        phone,
        amount,
      },
    ]);

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        amount,
      }),
    });

    alert("무료 안심조회 신청이 완료되었습니다.");

    setName("");
    setPhone("");
    setAmount("");
    setAgree(false);
  };

  return (
    <div
      id="bottom-form"
      className="fixed bottom-0 left-0 w-full bg-white border-t border-[#C9A227] shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="flex flex-col lg:flex-row items-center gap-3">

          <div className="min-w-[170px] text-center lg:text-left">
            <h3 className="text-2xl font-black text-[#C9A227]">
              GOLDLOAN
            </h3>

            <p className="text-sm text-gray-600">
              무료 안심조회
            </p>
          </div>

          {/* 이름 */}
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              flex-1
              w-full
              border
              border-[#C9A227]
              rounded-xl
              bg-white
              px-4
              py-3
              text-[16px]
              font-semibold
              text-black
              placeholder:text-gray-500
              placeholder:opacity-100
              outline-none
              focus:border-[#C9A227]
              focus:ring-2
              focus:ring-[#C9A227]/30
            "
            style={{
              color: "#111827",
              WebkitTextFillColor: "#111827",
              backgroundColor: "#ffffff",
            }}
          />

          {/* 연락처 */}
          <input
            type="tel"
            placeholder="연락처"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              flex-1
              w-full
              border
              border-gray-300
              rounded-xl
              bg-white
              px-4
              py-3
              text-[16px]
              font-semibold
              text-black
              placeholder:text-gray-500
              placeholder:opacity-100
              outline-none
              focus:border-[#C9A227]
              focus:ring-2
              focus:ring-[#C9A227]/30
            "
            style={{
              color: "#111827",
              WebkitTextFillColor: "#111827",
              backgroundColor: "#ffffff",
            }}
          />

          {/* 희망금액 */}
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              flex-1
              w-full
              border
              border-gray-300
              rounded-xl
              bg-white
              px-4
              py-3
              text-[16px]
              font-semibold
              text-black
              outline-none
              focus:border-[#C9A227]
              focus:ring-2
              focus:ring-[#C9A227]/30
            "
            style={{
              color: "#111827",
              WebkitTextFillColor: "#111827",
              backgroundColor: "#ffffff",
            }}
          >
            <option value="">희망금액 선택</option>
            <option>100만원 이하</option>
            <option>300만원</option>
            <option>500만원</option>
            <option>1,000만원 이상</option>
            <option>상담 후 결정</option>
          </select>

          <label className="flex items-center gap-2 whitespace-nowrap text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            개인정보 동의
          </label>

          <button
            onClick={handleSubmit}
            className="bg-[#C9A227] hover:bg-yellow-600 transition text-white font-bold px-8 py-3 rounded-xl whitespace-nowrap"
          >
            무료 안심조회
          </button>

        </div>
      </div>
    </div>
  );
}