export default function InfoSection() {
  return (
    <section className="bg-gray-50 py-8 pb-96">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-[#C9A227] mb-5">
          대출 안내 및 유의사항
        </h2>

        <div className="bg-white rounded-xl shadow p-5 text-sm text-gray-700 leading-6">

          <p>
            <strong>대출금리</strong> : 연 19.9% 이내
            (담보대출에 한해 심사기준에 따라 차등 적용)
          </p>

          <p className="mt-2">
            <strong>연체이율</strong> : 연 19.9% 이내
          </p>

          <p className="mt-2">
            <strong>대출중개수수료</strong> 없음.
            중개수수료를 요구하거나 받는 것은 불법이며,
            대출과 관련된 일체의 수수료를 받지 않습니다.
          </p>

          <p className="mt-2">
            <strong>취급수수료 등 기타 부대비용</strong> 없음.
          </p>

          <p className="mt-2">
            <strong>상환방법</strong> :
            원리금균등상환방식 / 만기일시상환방식
          </p>

          <p className="mt-2">
            이자 외 추가 비용은 없습니다.
            단, 일부 담보대출상품에 한해 저당설정·해지 비용 및
            조기상환수수료가 발생할 수 있습니다.
          </p>

          <p className="mt-2">
            <strong>조기상환조건</strong> :
            대출 실행일로부터 1년 이내 상환 시 최초 대출금의 2% 적용.
            단, 이자와 조기상환수수료의 합산액은 연 19.9%를 초과하지 않습니다.
          </p>

          <p className="mt-2">
            이 사이트에서 광고되는 상품의 상환기간은 모두 61일 이상이며
            최장 상환기간은 120개월 미만입니다.
          </p>

          <p className="mt-2">
            <strong>대출 총비용 예시</strong><br />
            1,000,000원을 12개월 동안 연 19.9%의 금리로 대출할 경우
            총 상환금액은 <strong>1,111,404원</strong>입니다.
            (상품에 따라 달라질 수 있습니다.)
          </p>

          <div className="mt-5 border-t pt-4 text-red-600 font-semibold text-sm space-y-2">

            <p>
              과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.
            </p>

            <p>
              중개수수료를 요구하거나 받는 것은 불법입니다.
            </p>

            <p>
              대출 시 귀하의 신용평점이 하락할 수 있습니다.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}