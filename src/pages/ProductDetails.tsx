// Components;
import ProductInfo from "@/features/products/components/ProductInfo";
import Comments from "@/features/products/components/Comments";

// Components;
import { BreadCrumb, Header, TopBar } from "@/shared/components";

export default function ProductDetails() {
  return (
    <section>
      <TopBar />
      <Header />
      <BreadCrumb />
      <ProductInfo />
      <Comments />
    </section>
  );
}
