"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BottomForm() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    phone: "",
    amount: "",
    agreed: false,
  });

  const [loading, setLoading] = useState(false);

  const jobOptions = [
    "무직",
    "프리랜서",
    "아르바이트",
    "직장인",
    "공무원",
    "개인사업자",
    "법인사업자",
    "기타",
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    let formattedPhone = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 7) {
      formattedPhone = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 7) {
      formattedPhone = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
    }

    setFormData((prev) => ({ ...prev, phone: formattedPhone }));
  };

  // 희망금액 숫자만 입력 및 천원 단위 콤마 자동 변환
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    let formattedAmount = "";

    if (rawValue) {
      formattedAmount = Number(rawValue).toLocaleString();
    }

    setFormData((prev) => ({ ...prev, amount: formattedAmount }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setLoading(true);

    try {
      // 1. Supabase 저장
      const { error: dbError } = await supabase.from("applications").insert([
        {
          name: formData.name,
          job: formData.job,
          phone: formData.phone,
          amount: formData.amount,
        },
      ]);

      if (dbError) {
        console.error("Supabase Error:", dbError);
      }

      // 2. 텔레그램 알림 메시지 생성
      const text = `🔔 GOLDLOAN 신규 신청

👤 이름 : ${formData.name}
💼 직업 : ${formData.job}
📞 연락처 : ${formData.phone}
💰 희망금액 : ${formData.amount}원`.trim();

      // 3. 텔레그램 알림 발송 요청
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telegramMessage: text }),
      });

      const resData = await res.json();
      if (!res.ok) {
        console.error("Telegram API Error:", resData);
      }

      alert("신청이 완료되었습니다.");

      // 폼 초기화
      setFormData({
        name: "",
        job: "",
        phone: "",
        amount: "",
        agreed: false,
      });
    } catch (err) {
      console.error("Submit Error:", err);
      alert("신청이 완료되었습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 mt-8 pb-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-2">
          <h2 className="text-lg font-extrabold text-[#C9A227] tracking-wider leading-none">
            GOLDLOAN
          </h2>
          <p className="text-xs text-gray-600 font-semibold mt-0.5">
            무료 안심조회
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="성함"
            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-2xl text-sm font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
            required
          />

          {/* 직업 선택 드롭다운 복구 완료 */}
          <select
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-2xl text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-[#C9A227] transition-colors"
            required
          >
            <option value="" disabled hidden>
              직업 선택
            </option>
            {jobOptions.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="연락처"
            maxLength={13}
            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-2xl text-sm font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
            required
          />

          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleAmountChange}
            placeholder="희망금액 (숫자만 입력)"
            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-2xl text-sm font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
            required
          />

          <div className="flex items-center gap-2 pt-0.5">
            <input
              type="checkbox"
              id="agreed"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="w-4 h-4 border-2 border-gray-400 rounded accent-[#C9A227] cursor-pointer"
              required
            />
            <label
              htmlFor="agreed"
              className="text-xs font-semibold text-gray-800 cursor-pointer"
            >
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C9A227] hover:bg-[#b08e20] text-white font-bold text-base rounded-2xl shadow-md transition-colors disabled:bg-gray-400"
          >
            {loading ? "처리 중..." : "무료 안심조회"}
          </button>
        </form>
      </div>
    </div>
  );
}