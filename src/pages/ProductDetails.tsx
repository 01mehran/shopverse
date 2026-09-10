// React Router Dom;
import { useParams } from "react-router-dom";

// Libraries;
import { useQuery } from "@tanstack/react-query";

// Supabse;
import { supabse } from "@/lib/supabse-client";

// Components;
import { BreadCrumb, ErrorMessage, Loading } from "@/shared/components";
import {
  Comments,
  MightLikeProducts,
  ProductInfo,
} from "@/features/products/components";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabse
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        throw new Error(error.message);
      }

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
