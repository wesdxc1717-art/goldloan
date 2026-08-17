'use client';

import { useState } from 'react';

export default function StickyBottomBar() {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    phone: '',
    amount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 기존 신청 로직(또는 텔레그램 연동 등)을 연결하시면 됩니다.
    alert('무료 안심조회가 신청되었습니다.');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-6px_25px_rgba(0,0,0,0.12)] py-3 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#C9A227] font-bold tracking-wider uppercase">
            GOLDLOAN 1초 맞춤 한도 조회
          </span>
          <span className="text-xs text-gray-500">
            신용점수 영향 없는 <span className="text-[#C9A227] font-bold">무료 안심조회</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {/* 성함 */}
          <input
            type="text"
            name="name"
            placeholder="성함"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          />

          {/* 직업 선택 */}
          <select
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          >
            <option value="">직업선택</option>
            <option value="직장인">직장인</option>
            <option value="사업자">사업자</option>
            <option value="프리랜서">프리랜서</option>
            <option value="주부">주부</option>
            <option value="무직자">무직자/기타</option>
          </select>

          {/* 연락처 */}
          <input
            type="tel"
            name="phone"
            placeholder="연락처 (- 제외)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          />

          {/* 희망금액 */}
          <input
            type="text"
            name="amount"
            placeholder="희망금액"
            value={formData.amount}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          />

          {/* 무료안심조회 신청 버튼 */}
          <button
            type="submit"
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-[#DFB838] to-[#C9A227] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all text-sm whitespace-nowrap"
          >
            무료안심조회
          </button>
        </form>
      </div>
    </div>
  );
}