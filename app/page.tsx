import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import InfoSection from "@/components/InfoSection";
import BottomForm from "@/components/BottomForm";
import StickyBottomBar from "@/components/StickyBottomBar"; // 👈 1. 컴포넌트 임포트

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24"> {/* 👈 2. 하단 고정바에 가리지 않도록 하단 여백(pb-24) 추가 */}
      <Header />
      <Hero />
      <LoanTypesSection />
      <InfoSection />

      <div id="bottom-form">
        <BottomForm />
      </div>

      {/* 3. 화면 하단 고정 바 삽입 */}
      <StickyBottomBar />
    </main>
  );
}