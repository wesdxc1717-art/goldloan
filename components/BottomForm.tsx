"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-react"; // 프로젝트의 Supabase 클라이언트 경로로 맞추어 사용

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    job: "", // 1. 직업 선택 상태
    phone: "",
    amount: "",
    agreed: false,
  });

  // 직업 목록
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

  // 2, 3. 전화번호 입력 시 숫자만 추출 후 010-0000-0000 자동 하이픈 포맷팅
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
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

  return (
    <form className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-xl shadow">
      {/* 4. 이름 -> 성함으로 변경 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          성함
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="성함을 입력해주세요"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          required
        />
      </div>

      {/* 1. 직업 선택 드롭다운 (Select) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          직업
        </label>
        <select
          name="job"
          value={formData.job}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
          required
        >
          <option value="">직업을 선택해주세요</option>
          {jobOptions.map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
      </div>

      {/* 2, 3. 휴대폰 번호 입력란 (숫자 전용 & 자동 하이픈) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          휴대폰 번호
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="010-0000-0000"
          maxLength={13}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          required
        />
      </div>

      {/* 대출 희망 금액 입력란 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          대출 희망 금액
        </label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="예: 300만원"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          required
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="agreed"
          name="agreed"
          checked={formData.agreed}
          onChange={handleChange}
          className="w-4 h-4 text-[#C9A227] rounded focus:ring-[#C9A227]"
          required
        />
        <label htmlFor="agreed" className="text-sm text-gray-600">
          개인정보 수집 및 이용에 동의합니다.
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#C9A227] text-white font-bold rounded-lg hover:bg-[#b08e20] transition-colors text-lg"
      >
        신청하기
      </button>
    </form>
  );
}