// Types;
import { useCartStore } from "@/stores/cartStore";
import type { addToCartProps } from "../types/types";

// Icons;
import { Minus, Plus } from "lucide-react";
import { useShallow } from "zustand/shallow";

export default function AddToCart({ variant, id }: addToCartProps) {
  const productInfo = variant === "product-info";

  const { increaseItem, decreaseItem } = useCartStore(
    useShallow((state) => ({
      increaseItem: state.increaseItem,
      decreaseItem: state.decreaseItem,
    })),
  );

  const quantity = useCartStore(
    ({ cartItems }) => cartItems.find((item) => item.id === id)?.quantity ?? 0,
  );

  return (
    <div
      className={`${productInfo ? "col-span-3 px-2 py-2 sm:px-6" : "xs:w-40 w-30 p-1.5 py-2 sm:px-3 lg:w-60"} bg-bg-muted flex items-center justify-between rounded-[62px]`}
    >
      {/* Decrease Button */}
      <button
        onClick={() => decreaseItem(id)}
        className="cursor-pointer text-black/80"
      >
        <Minus />
      </button>

      {/* Item Quantity */}
      <span className="font-medium">{quantity}</span>

      {/* Increase Button */}
      <button
        onClick={() => increaseItem(id)}
        className="cursor-pointer text-black/80"
      >
        <Plus />
      </button>
    </div>
  );
}
