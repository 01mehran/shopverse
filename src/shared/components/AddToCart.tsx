// Types;
import type { addToCartProps } from "../types/types";

// Icons;
import { Minus, Plus } from "lucide-react";

export default function AddToCart({ variant }: addToCartProps) {
  const productInfo = variant === "product-info";

  return (
    <div
      className={`${productInfo ? "col-span-3 px-2 py-2 sm:px-6" : "xs:w-40 w-30 p-1.5 py-2 sm:px-3 lg:w-60"} bg-bg-muted flex items-center justify-between rounded-[62px]`}
    >
      <button className="cursor-pointer text-black/80">
        <Minus />
      </button>
      <span>1</span>
      <button className="cursor-pointer text-black/80">
        <Plus />
      </button>
    </div>
  );
}
