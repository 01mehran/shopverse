// Components;
import {
  Hero,
  BrandLogos,
  NewArrivalsList,
  TopSellingList,
  BrowseByDressStyle,
  HappyCustomers,
} from "@/features/home/components";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrandLogos />
      <NewArrivalsList />
      <TopSellingList />
      <BrowseByDressStyle />
      <HappyCustomers />
    </section>
  );
}
