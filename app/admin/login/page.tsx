import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BottomForm from "@/components/BottomForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <Header />
      <Hero />
      
      {/* 폼이 위치한 곳에 id="bottom-form" 부여 */}
      <div id="bottom-form">
        <BottomForm />
      </div>
    </main>
  );
}