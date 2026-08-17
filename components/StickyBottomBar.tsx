'use client';

import { useState } from 'react';

export default function StickyBottomBar() {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    phone: '',
    amount: '',
  });

  const [loading, setLoading] = useState(false);

  // 전화번호 자동 하이픈 포맷팅 함수
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // 희망금액 숫자만 입력 및 천 단위 쉼표 포맷팅 함수
  const formatAmount = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (!numbers) return '';
    return Number(numbers).toLocaleString('ko-KR');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData({
        ...formData,
        phone: formatPhoneNumber(value),
      });
    } else if (name === 'amount') {
      setFormData({
        ...formData,
        amount: formatAmount(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // 🚀 텔레그램 전송 로직 추가
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          job: formData.job,
          phone: formData.phone,
          amount: formData.amount,
        }),
      });

      if (response.ok) {
        alert('무료 안심조회 신청이 완료되었습니다. 빠른 시일내에 연락드리겠습니다.');
        setFormData({ name: '', job: '', phone: '', amount: '' }); // 폼 초기화
      } else {
        alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
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
            placeholder="연락처 (010-0000-0000)"
            value={formData.phone}
            onChange={handleChange}
            maxLength={13}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          />

          {/* 희망금액 */}
          <input
            type="text"
            name="amount"
            placeholder="희망금액 (원)"
            value={formData.amount}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#C9A227]"
          />

          {/* 무료안심조회 신청 버튼 */}
          <button
            type="submit"
            disabled={loading}
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-[#DFB838] to-[#C9A227] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all text-sm whitespace-nowrap disabled:opacity-50"
          >
            {loading ? '전송중...' : '무료안심조회'}
          </button>
        </form>
      </div>
    </div>
  );
}