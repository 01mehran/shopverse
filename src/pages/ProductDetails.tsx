// React Router Dom;
import { useParams } from "react-router-dom";

// Libraries;
import { useQuery } from "@tanstack/react-query";

// Services;
import { api } from "@/services/api";

// Components;
import { BreadCrumb, ErrorMessage, Loading } from "@/shared/components";
import ProductInfo from "@/features/products/components/ProductInfo";
import Comments from "@/features/products/components/Comments";
import MightLikeProducts from "@/features/products/components/MightLikeProducts";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get(`products/${id}`);
      return data;
    },
  });

  return (
    <section>
      <BreadCrumb items={[{ label: "Men" }, { label: data?.name }]} />

      {error && <ErrorMessage error={error} />}
      {isLoading && <Loading />}

      {!isLoading && !error && <ProductInfo product={data} />}

      <Comments />
      <MightLikeProducts />
    </section>
  );
}
