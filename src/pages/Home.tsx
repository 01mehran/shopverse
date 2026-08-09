// Components;
import TopBar from "@components/TopBar";
import Header from "@components/Header";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import NewArrivalsList from "@/components/NewArrivalsList";
import TopSellingList from "@/components/TopSellingList";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";

export default function Home() {
  return (
    <section className="pb-10">
      <TopBar />
      <Header />
      <Hero />
      <BrandLogos />
      <NewArrivalsList />
      <TopSellingList />
      <BrowseByDressStyle />
    </section>
  );
}
