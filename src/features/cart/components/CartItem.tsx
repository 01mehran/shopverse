// Components;
import { supabse } from "@/lib/supabse-client";
import { AddToCart, ErrorMessage, Loading } from "@/shared/components";
import type { CartItem } from "@/stores/cartStore";
import { useQuery } from "@tanstack/react-query";

// icons;
import { Trash2 } from "lucide-react";

type CartItemProps = {
  cartItem: CartItem;
};

export default function CartItem({ cartItem }: CartItemProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cart-item", cartItem.id],

    queryFn: async () => {
      const { data, error } = await supabse
        .from("products")
        .select("*")
        .eq("id", cartItem.id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });

  const selectedColor = data?.colors?.[cartItem.colorIndex];
  const selectedSize = data?.sizes?.[cartItem.sizeIndex];

  return (
    <section>
      {isLoading && <Loading />}
      {error && <ErrorMessage error={error} />}

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
              Size: <span className="text-black/60"> {selectedSize}</span>
            </p>
            <p className="text-sm font-normal">
              Color: <span className="text-black/60"> {selectedColor}</span>
            </p>
          </div>

          {/* AddToCart */}
          <div className="flex w-full justify-between">
            <p className="text-[24px] font-bold">{data?.price}</p>
            <AddToCart variant="cart-item" />
          </div>
        </div>

        {/* Trash Icon */}
        <button className="text-red hover:bg-red/15 ease absolute -top-1 -right-1 cursor-pointer rounded-full bg-white p-1.5 transition-colors duration-200">
          <Trash2 size={20} strokeWidth={3} />
        </button>
      </article>
    </section>
  );
}
