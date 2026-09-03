// Libraries;
import { useQuery } from "@tanstack/react-query";

// Services;
import { api } from "@/services/api";

// Components;
import { AddToCart, ErrorMessage, Loading } from "@/shared/components";

// icons;
import { Trash2 } from "lucide-react";

// Stores;
import type { cartItem } from "@/stores/cartStore";

export default function CartItem({ id }: cartItem) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      return response.data;
    },
  });

  return (
    <section className="">
      {isLoading && <Loading />}
      {error && <ErrorMessage error={error} />}

      {!isLoading && !error && (
        <article className="relative flex w-full gap-2 md:gap-4">
          {/* Product Image */}
          <img
            src={data?.image}
            alt="clothes"
            className="w-24 rounded-lg object-cover md:w-31"
          />

          {/* Product Info */}
          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col gap-px">
              <p className="text-base font-bold sm:text-xl">{data?.name}</p>
              <p className="text-sm font-normal">
                Size: <span className="text-black/60">Large</span>
              </p>
              <p className="text-sm font-normal">
                Color: <span className="text-black/60">White</span>
              </p>
            </div>

            {/* AddToCart */}
            <div className="flex w-full justify-between">
              <p className="text-[24px] font-bold">${data?.price}</p>
              <AddToCart id={id} variant="cart-item" />
            </div>
          </div>

          {/* Trash Icon */}
          <button className="text-red absolute top-0 right-0 cursor-pointer rounded-full bg-white">
            <Trash2 size={20} strokeWidth={3} />
          </button>
        </article>
      )}
    </section>
  );
}
