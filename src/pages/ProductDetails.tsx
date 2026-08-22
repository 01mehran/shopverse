// Components;
import { BreadCrumb } from "@/shared/components";
import ProductInfo from "@/features/products/components/ProductInfo";
import Comments from "@/features/products/components/Comments";
import MightLikeProducts from "@/features/products/components/MightLikeProducts";

export default function ProductDetails() {
  return (
    <section>
      <BreadCrumb />
      <ProductInfo />
      <Comments />
      <MightLikeProducts />
    </section>
  );
}
