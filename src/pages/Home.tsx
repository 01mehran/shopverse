// Components;
import TopBar from "@components/TopBar";
import Header from "@components/Header";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import NewArrivalsList from "@/components/NewArrivalsList";

export default function Home() {
  return (
    <section className="py-12">
      <TopBar />
      <Header />
      <Hero />
      <BrandLogos />
      <NewArrivalsList />
    </section>
  );
}
