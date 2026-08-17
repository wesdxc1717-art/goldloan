import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import InfoSection from "@/components/InfoSection";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32"> {/* 고정 바 높이에 맞춰 하단 여백(pb-32) 설정 */}
      <Header />
      <Hero />
      <LoanTypesSection />
      <InfoSection />

      {/* 화면 하단 고정 입력 바 */}
      <StickyBottomBar />
    </main>
  );
}