import Header from "../components/Header";
import Hero from "../components/Hero";
import LoanCards from "../components/LoanCards";
import InfoSection from "../components/InfoSection";
import BottomForm from "../components/BottomForm";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LoanCards />
      <InfoSection />
      <BottomForm />
    </>
  );
}