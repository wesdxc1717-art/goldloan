"use client";

import { useState } from "react";

export default function BottomForm() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    phone: "",
    amount: "",
    agreed: false,
  });

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

  // 2, 3. 숫자 전용 & 자동 하이픈 포맷팅 (010-0000-0000)
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
    // 기존 Supabase 또는 제출 로직을 여기에 유지하세요
    alert("신청이 완료되었습니다.");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* 상단 타이틀 영역 */}
      <div className="mb-3">
        <h2 className="text-xl font-extrabold text-[#C9A227] tracking-wider leading-none">
          GOLDLOAN
        </h2>
        <p className="text-xs text-gray-600 font-semibold mt-1">
          무료 안심조회
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* 4. 이름 -> 성함 */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="성함"
          className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-2xl text-base font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
          required
        />

        {/* 1. 직업 선택 드롭다운 */}
        <select
          name="job"
          value={formData.job}
          onChange={handleChange}
          className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-2xl text-base font-medium text-gray-800 bg-white focus:outline-none focus:border-[#C9A227] transition-colors"
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

        {/* 2, 3. 연락처 (숫자 전용 & 자동 하이픈) */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="연락처"
          maxLength={13}
          className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-2xl text-base font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
          required
        />

        {/* 희망금액 */}
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="희망금액 선택"
          className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-2xl text-base font-medium placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
          required
        />

        {/* 개인정보 동의 */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="w-5 h-5 border-2 border-gray-400 rounded accent-[#C9A227] cursor-pointer"
            required
          />
          <label
            htmlFor="agreed"
            className="text-sm font-semibold text-gray-800 cursor-pointer"
          >
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full py-4 bg-[#C9A227] hover:bg-[#b08e20] text-white font-bold text-lg rounded-2xl shadow-md transition-colors mt-2"
        >
          무료 안심조회
        </button>
      </form>
    </div>
  );
}