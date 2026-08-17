import Header from "@/components/Header";
import Hero from "@/components/Hero"; // 무료 안심조회 영역
import LoanTypesSection from "@/components/LoanTypesSection"; // 👈 추가된 맞춤 대출 솔루션 영역
import InfoSection from "@/components/InfoSection"; // 대출 안내 및 유의사항 영역
import BottomForm from "@/components/BottomForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* 무료 안심조회 바로 아래, 유의사항 바로 위에 삽입 */}
      <LoanTypesSection />

      <InfoSection />

      <div id="bottom-form">
        <BottomForm />
      </div>
    </main>
  );
}