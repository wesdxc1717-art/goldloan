export default function LoanTypesSection() {
  const loanTypes = [
    {
      title: "무직자",
      desc: "소득이 없어도 가능한 상품 여부를 상담해드립니다. 신용 상태에 맞는 상품을 안내해드립니다.",
      badge: null,
    },
    {
      title: "저신용자",
      desc: "신용점수가 낮아도 가능한 상품을 확인해드립니다. 현재 조건에 맞는 상담을 도와드립니다.",
      badge: null,
    },
    {
      title: "직장인",
      desc: "재직기간, 소득에 맞춘 맞춤 상담. 신속한 한도 및 가능 여부 안내",
      badge: null,
    },
    {
      title: "사업자",
      desc: "개인사업자·법인사업자 상담\n운영자금·시설자금 상담 가능",
      badge: ["초기사업자", "자영업자"],
    },
    {
      title: "주부",
      desc: "배우자 소득 및 개인 조건에 맞는 상품 상담\n가능 여부 무료 확인",
      badge: null,
    },
    {
      title: "프리랜서",
      desc: "소득 증빙이 가능한 프리랜서 상담\n맞춤 한도 안내",
      badge: null,
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* 상단 브랜딩 및 타이틀 */}
        <p className="text-[#C9A227] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2">
          GOLDLOAN FINANCIAL SOLUTION
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          맞춤 대출 솔루션
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-12">
          고객님의 상황에 맞는 최적의 상품을 찾아드리겠습니다.
        </p>

        {/* 6개 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loanTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#C9A227] hover:shadow-[0_4px_20px_rgba(201,162,39,0.15)] transition-all group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A227] transition-colors">
                {item.title}
              </h3>

              {item.badge && (
                <div className="flex gap-2 mb-3">
                  {item.badge.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs border border-[#C9A227] text-[#C9A227] bg-[#FDFBF7] px-2.5 py-1 rounded-md font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}