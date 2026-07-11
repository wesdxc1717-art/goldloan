"use client"
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-yellow-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full bg-[#C9A227]/10 text-[#C9A227] px-5 py-2 font-bold">
              GOLDLOAN PREMIUM
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-gray-900">
              빠르고 안전한
              <br />
              금융 상담 서비스
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              고객님의 상황에 맞는
              <br />
              맞춤 금융상품을 안내해드립니다.
            </p>

            <div className="flex gap-4 mt-12">

              <button
                onClick={() =>
                  document
                    .getElementById("bottom-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#C9A227] text-white px-8 py-4 rounded-2xl font-bold hover:bg-yellow-600 transition shadow-lg"
              >
                무료 안심조회
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-[40px] bg-white shadow-2xl p-10">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-3xl bg-yellow-50 p-8">
                  <div className="text-5xl">💰</div>
                  <h3 className="mt-5 font-bold text-xl">
                    맞춤 금융
                  </h3>
                  <p className="text-gray-500 mt-2">
                    상담 후 결정
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-8">
                  <div className="text-5xl">⚡</div>
                  <h3 className="mt-5 font-bold text-xl">
                    빠른 상담
                  </h3>
                  <p className="text-gray-500 mt-2">
                    평균 10분
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-8">
                  <div className="text-5xl">🛡️</div>
                  <h3 className="mt-5 font-bold text-xl">
                    안전 상담
                  </h3>
                  <p className="text-gray-500 mt-2">
                    개인정보 보호
                  </p>
                </div>

                <div className="rounded-3xl bg-[#C9A227] text-white p-8">
                  <div className="text-5xl">⭐</div>
                  <h3 className="mt-5 font-bold text-xl">
                    신속 진행
                  </h3>
                  <p className="mt-2">
                    친절한 상담
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}