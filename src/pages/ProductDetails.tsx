// Components;
import { BreadCrumb, Footer, Header, TopBar } from "@/shared/components";
import ProductInfo from "@/features/products/components/ProductInfo";
import Comments from "@/features/products/components/Comments";
import MightLikeProducts from "@/features/products/components/MightLikeProducts";

export default function ProductDetails() {
  return (
    <section>
      <TopBar />
      <Header />
      <BreadCrumb />
      <ProductInfo />
      <Comments />
      <MightLikeProducts />
      <Footer />
    </section>
  );
}
