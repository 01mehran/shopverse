// Components;
import { Container } from "@/shared/components";

// icons;
import { Minus, Plus, Trash2 } from "lucide-react";

// Static Images;
import pic1 from "@/features/cart/assets/pic13.png";
import OrderSummary from "./OrderSummary";

export default function CartItem() {
  return (
    <section>
      <Container>
        {/* Title */}
        <h1 className="font-IntegralCF text-[28px] font-extrabold tracking-tighter uppercase sm:text-[40px]">
          your cart
        </h1>

        <div className="mt-4 grid grid-cols-1 items-start gap-4 pb-4 md:grid-cols-12">
          <article className="border-bg-muted col-span-7 flex flex-col justify-between gap-8 divide-y divide-black/10 rounded-2xl border p-2.5 md:p-5">
            {/* Product Cart */}
            <div className="relative flex w-full gap-2 md:gap-4">
              {/* Product Image */}
              <img
                src={pic1}
                alt="clothes"
                className="w-24 rounded-lg object-cover md:w-31"
              />
              {/* Product Info */}
              <div className="flex w-full flex-col justify-between">
                <div className="flex flex-col gap-px">
                  <p className="font-Satoshi text-base font-bold sm:text-xl">
                    Gradient Graphic T-shirt
                  </p>
                  <p className="font-Satoshi text-sm font-normal">
                    Size: <span className="text-black/60">Large</span>
                  </p>
                  <p className="font-Satoshi text-sm font-normal">
                    Color: <span className="text-black/60">White</span>
                  </p>
                </div>

                {/* Product Cart Actions */}
                <div className="flex w-full justify-between">
                  <p className="font-Satoshi text-[24px] font-bold">$145</p>
                  <div className="bg-bg-muted flex w-25 items-center justify-between rounded-[62px] p-1.5 py-2 sm:px-3 md:w-31.5">
                    <button className="cursor-pointer text-black/80">
                      <Minus size={20} />
                    </button>
                    <span>1</span>
                    <button className="cursor-pointer text-black/80">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Trash Icon */}
              <button className="text-red absolute top-0 right-0 cursor-pointer rounded-full bg-white">
                <Trash2 size={20} strokeWidth={3} />
              </button>
            </div>
          </article>

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </Container>
    </section>
  );
}
