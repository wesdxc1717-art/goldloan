'use client';

export default function StickyBottomBar() {
  const scrollToForm = () => {
    const formElement = document.getElementById('bottom-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-3 px-4">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col text-left">
          <span className="text-xs text-[#C9A227] font-bold tracking-wider uppercase">
            GOLDLOAN 1초 맞춤 한도 조회
          </span>
          <span className="text-sm md:text-base font-bold text-gray-900">
            신용점수 영향 없는 무료 안심조회
          </span>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-gradient-to-r from-[#DFB838] to-[#C9A227] text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:opacity-90 transition-all text-sm md:text-base whitespace-nowrap"
        >
          간편 신청하기
        </button>
      </div>
    </div>
  );
}