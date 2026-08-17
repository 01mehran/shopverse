// Components;
import { Container } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  dressStyleContainerVariant,
  dressStyleItemVariant,
} from "@/shared/animations";

// Static Images;
import pic1 from "@/features/products/assets/pic9.png";
import pic2 from "@/features/products/assets/pic10.png";
import pic3 from "@/features/products/assets/pic11.png";
import ratingStar from "@/assets/images/home/rating-start.png";

// Icons;
import { Check, Minus, Plus } from "lucide-react";

export default function ProductInfo() {
  return (
    <section>
      <Container>
        <main className="grid-cols-1 gap-8 space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
          {/* Product Images */}
          <section className="mx-auto grid max-w-125 grid-cols-1 gap-3 lg:mx-0 lg:h-100 lg:max-w-none lg:grid-cols-[90px_1fr]">
            {/* Main Image */}
            <motion.div
              variants={dressStyleContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 h-100 overflow-hidden rounded-2xl lg:order-2 lg:h-full"
            >
              <motion.img
                variants={dressStyleItemVariant}
                src={pic1}
                alt="clothes"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <motion.div
              variants={dressStyleContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 grid grid-cols-3 gap-3 lg:order-1 lg:grid-cols-1 lg:grid-rows-3"
            >
              <motion.img
                variants={dressStyleItemVariant}
                src={pic1}
                alt="clothes"
                className="h-30 w-full cursor-pointer rounded-xl object-cover ring-1 ring-black lg:h-full"
              />

              <motion.img
                variants={dressStyleItemVariant}
                src={pic2}
                alt="clothes"
                className="h-30 w-full cursor-pointer rounded-xl object-cover lg:h-full"
              />

              <motion.img
                variants={dressStyleItemVariant}
                src={pic3}
                alt="clothes"
                className="h-30 w-full cursor-pointer rounded-xl object-cover lg:h-full"
              />
            </motion.div>
          </section>

          {/* Product Info */}
          <section className="flex flex-col justify-between gap-2">
            {/* Name */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                initial={{ y: 40, opacity: 0, rotate: 10 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-IntegralCF gap-2 pb-2 text-[24px] leading-7 font-bold uppercase lg:pb-4 lg:text-[35px]"
              >
                One Life Graphic T-shirt
              </motion.h1>
              <img
                src={ratingStar}
                alt="rating star image"
                className="w-40 object-cover"
              />
              <div className="flex items-center gap-4 text-[32px] font-bold">
                <span>$260</span>
                <span className="text-black/30 line-through">$360</span>
                <span className="text-red bg-red/10 rounded-2xl px-2 py-1 text-sm">
                  -40%
                </span>
              </div>
              <span className="text-base font-normal text-black/60">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </span>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Colors */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="itms-center flex flex-col gap-2 py-1"
            >
              <p className="text-sm font-normal text-black/60">Select Colors</p>
              <div className="flex items-center gap-3">
                <span className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-[#4F4631] text-white">
                  <Check size={16} />
                </span>
                <span className="size-7 cursor-pointer rounded-full bg-[#314F4A]"></span>
                <span className="size-7 cursor-pointer rounded-full bg-[#31344F]"></span>
              </div>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Sizes */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              viewport={{ once: true }}
              className="itms-center flex flex-col gap-2 py-1 text-sm font-normal text-black/60 md:text-base"
            >
              <p className="text-sm">Choose Size</p>
              <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base">
                <button className="bg-bg-muted w-full max-w-25 cursor-pointer rounded-[62px] px-4 py-2 text-sm">
                  Small
                </button>
                <button className="bg-bg-muted w-full max-w-25 cursor-pointer rounded-[62px] px-4 py-2 text-sm">
                  Medium
                </button>
                <button className="w-full max-w-25 cursor-pointer rounded-[62px] bg-black px-4 py-2 text-sm text-white">
                  Large
                </button>
                <button className="bg-bg-muted w-full max-w-25 cursor-pointer rounded-[62px] px-4 py-2 text-sm text-nowrap">
                  X-Large
                </button>
              </div>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Add To Cart */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-9 items-center gap-2 pt-2"
            >
              {/* Amount Product */}
              <div className="bg-bg-muted col-span-3 flex items-center justify-between rounded-[62px] px-2 py-2 sm:px-6">
                <button className="cursor-pointer text-black/80">
                  <Plus />
                </button>
                <span>1</span>
                <button className="cursor-pointer text-black/80">
                  <Minus />
                </button>
              </div>

              <button className="col-span-6 cursor-pointer rounded-[62px] bg-black px-6 py-2 text-white">
                Add to Cart
              </button>
            </motion.div>
          </section>
        </main>
      </Container>
    </section>
  );
}
