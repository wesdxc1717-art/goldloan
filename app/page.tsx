import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BottomForm from "@/components/BottomForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <Header />
      <Hero />
      <div id="bottom-form">
        <BottomForm />
      </div>
    </main>
  );
}