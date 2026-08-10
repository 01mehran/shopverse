// Components;
import { BreadCrumb, Header, TopBar } from "@/shared/components";
import ProductInfo from "@/features/products/components/ProductInfo";

export default function ProductDetails() {
  return (
    <section>
      <TopBar />
      <Header />
      <BreadCrumb />
      <ProductInfo />
    </section>
  );
}
