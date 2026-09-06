// Zustand;
import { useShallow } from "zustand/shallow";

// Types;
import { useCartStore } from "@/stores/cartStore";
import type { addToCartProps } from "../types/types";

// Icons;
import { Minus, Plus } from "lucide-react";

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
        disabled={quantity === 0}
        onClick={() => decreaseItem(id)}
        className="ease cursor-pointer text-black/80 transition-colors duration-200 disabled:cursor-not-allowed disabled:text-black/50"
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
