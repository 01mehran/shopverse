// Components;
import {
  Hero,
  BrandLogos,
  NewArrivalsList,
  TopSellingList,
  BrowseByDressStyle,
  HappyCustomers,
} from "@/features/home/components";

import { Footer, Header, TopBar } from "@/shared/components";

export default function Home() {
  return (
    <section>
      <TopBar />
      <Header />
      <Hero />
      <BrandLogos />
      <NewArrivalsList />
      <TopSellingList />
      <BrowseByDressStyle />
      <HappyCustomers />
      <Footer />
    </section>
  );
}
