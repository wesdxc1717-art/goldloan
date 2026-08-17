import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection"; // 1. 유의사항 컴포넌트 불러오기
import BottomForm from "@/components/BottomForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <Header />
      <Hero />
      
      {/* 2. 대출 안내 및 유의사항 섹션 추가 */}
      <InfoSection />

      <div id="bottom-form">
        <BottomForm />
      </div>
    </main>
  );
}