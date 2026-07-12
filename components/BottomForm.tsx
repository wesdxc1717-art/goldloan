"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BottomForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!phone.trim()) {
      alert("연락처를 입력해주세요.");
      return;
    }

    if (!amount) {
      alert("희망금액을 선택해주세요.");
      return;
    }

    if (!agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("applications").insert([
      {
        name,
        phone,
        amount,
      },
    ]);

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    try {
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
    } catch (e) {
      console.log(e);
    }

    alert("무료 안심조회 신청이 완료되었습니다.");

    setName("");
    setPhone("");
    setAmount("");
    setAgree(false);
    setLoading(false);
  };

  return (
    <div
      id="bottom-form"
      className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-[#C9A227] shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">

          <div className="lg:min-w-[170px] text-center lg:text-left">

            <h3 className="text-2xl font-black text-[#C9A227]">
              GOLDLOAN
            </h3>

            <p className="text-sm font-semibold text-gray-700">
              무료 안심조회
            </p>

          </div>
                    <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              lg:flex-1
              rounded-xl
              border-2
              border-[#C9A227]
              bg-white
              px-4
              py-3
              text-[16px]
              font-bold
              text-black
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A227]
            "
            style={{
              color: "#111827",
              WebkitTextFillColor: "#111827",
            }}
          />

          <input
            type="tel"
            placeholder="연락처"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              w-full
              lg:flex-1
              rounded-xl
              border-2
              border-gray-300
              bg-white
              px-4
              py-3
              text-[16px]
              font-bold
              text-black
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A227]
            "
            style={{
              color: "#111827",
              WebkitTextFillColor: "#111827",
            }}
          />

          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              w-full
              lg:flex-1
              rounded-xl
              border-2
              border-gray-300
              bg-white
              px-4
              py-3
              text-[16px]
              font-bold
              text-black
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A227]
            "
          >
            <option value="">희망금액 선택</option>
            <option value="100만원 이하">100만원 이하</option>
            <option value="300만원">300만원</option>
            <option value="500만원">500만원</option>
            <option value="1000만원 이상">1,000만원 이상</option>
            <option value="상담 후 결정">상담 후 결정</option>
          </select>
           <div
       <label
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "10px 0",
  }}
>
  <input
    type="checkbox"
    checked={agree}
    onChange={(e) => setAgree(e.target.checked)}
    style={{
      width: "30px",
      height: "30px",
      accentColor: "#C9A227",
      flexShrink: 0,
    }}
  />

  <span
    style={{
      color: "#111827",
      fontWeight: 700,
      fontSize: "18px",
    }}
  >
    개인정보 수집 및 이용에 동의합니다.
  </span>
</label>
                    <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full
              lg:w-auto
              rounded-xl
              bg-[#C9A227]
              px-8
              py-3
              text-white
              text-lg
              font-bold
              shadow-lg
              transition
              hover:bg-yellow-600
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "신청중..." : "무료 안심조회"}
          </button>

        </div>
      </div>
    </div>
  );
}