const loans = [
  { title: "직장인대출", icon: "👨‍💼" },
  { title: "사업자대출", icon: "🏢" },
  { title: "무직자대출", icon: "🧑" },
  { title: "비상금대출", icon: "💳" },
  { title: "저신용대출", icon: "⭐" },
  { title: "개인회생대출", icon: "📄" },
];

export default function LoanCards() {
  return (
    <section className="bg-[#fafafa] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center text-gray-900">
          GOLDLOAN 상품안내
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-16 text-lg">
          고객님의 상황에 맞는 금융상품을 안내해드립니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {loans.map((loan) => {
            const isBusiness = loan.title === "사업자대출";

            return (
              <div
                key={loan.title}
                className="bg-white rounded-3xl p-10 shadow hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-6xl mb-6">
                  {loan.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {loan.title}
                </h3>

                <div className="mt-6 space-y-2 text-gray-600">

  {loan.title === "사업자대출" ? (
    <>
      <p>✔ 초기사업자도 OK</p>
      <p>✔ 단기 운영자금도 OK</p>
      <p>✔ 상담 후 결정</p>
      <p>✔ 간편 상담 가능</p>
    </>
  ) : (
    <>
      <p>✔ 최소 10만원부터</p>
      <p>✔ 상담 후 결정</p>
      <p>✔ 간편 상담 가능</p>
    </>
  )}

</div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}