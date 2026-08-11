// Components;
import { BreadCrumb, Header, TopBar } from "@/shared/components";
import ProductInfo from "@/features/products/components/ProductInfo";
import Tabs from "@/features/products/components/Tabs";

export default function ProductDetails() {
  return (
    <section>
      <TopBar />
      <Header />
      <BreadCrumb />
      <ProductInfo />
      <Tabs />
    </section>
  );
}
