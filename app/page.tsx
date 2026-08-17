import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanTypesSection from "@/components/LoanTypesSection";
import InfoSection from "@/components/InfoSection";
import BottomForm from "@/components/BottomForm";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <Header />
      <Hero />
      <LoanTypesSection />
      <InfoSection />

      <div id="bottom-form">
        <BottomForm />
      </div>

      <StickyBottomBar />
    </main>
  );
}