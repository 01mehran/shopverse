// Components;
import TopBar from "@components/TopBar";
import Header from "@components/Header";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";

export default function Home() {
  return (
    <section>
      <div>
        <TopBar />
        <Header />
        <Hero />
        <BrandLogos />
      </div>
    </section>
  );
}
