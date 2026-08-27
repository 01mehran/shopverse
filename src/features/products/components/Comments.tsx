// Cmponents;
import { Container } from "@/shared/components";
import Tabs from "./Tabs";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  fadeLeftVariant,
  productCardContainerVariants,
  productCardVariants,
} from "@/shared/animations";

// Data;
import { commentList } from "./data/comments";

// Icons;
import { Ellipsis, SlidersVertical } from "lucide-react";

export default function Comments() {
  return (
    <section>
      <Container>
        <Tabs />

        <motion.header
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-base font-bold md:text-2xl">
            All Reviews{" "}
            <span className="text-sm font-normal text-black/60 md:text-base">
              (451)
            </span>
          </h1>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <button className="bg-bg-muted cursor-pointer rounded-[62px] p-2">
              <SlidersVertical size={18} />
            </button>
            <select className="bg-bg-muted hidden cursor-pointer rounded-[62px] p-2 sm:block">
              <option value="latest">Latest</option>
            </select>
            <button className="w-30 cursor-pointer rounded-[62px] bg-black p-2 text-sm text-white md:w-40 md:text-base">
              Write a Review
            </button>
          </div>
        </motion.header>

        <main className="mt-4 md:mt-8">
          {/* User Comments */}
          <section>
            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {commentList.slice(0, 4)?.map((comment, i) => (
                <motion.article
                  variants={productCardVariants}
                  key={i}
                  className="relative flex flex-col gap-2 rounded-2xl border border-black/10 p-4 shadow md:justify-between md:p-7"
                >
                  <img
                    src={comment.starImage}
                    alt="rating start image"
                    className="w-32"
                  />
                  <h1 className="text-xl font-bold">{comment.name}</h1>
                  <p className="text-base leading-6 font-normal text-black/60">
                    {comment.comment}
                  </p>
                  <span className="mt-6 text-sm font-medium text-black/60">
                    {comment.date}
                  </span>
                  <button className="absolute top-6 right-6 hidden cursor-pointer text-black/40 md:block">
                    <Ellipsis />
                  </button>
                </motion.article>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.button
              variants={fadeLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto mt-5 block w-50 cursor-pointer rounded-[62px] border border-black/10 py-2 text-sm font-medium sm:mt-10 sm:text-base"
            >
              Load More Reviews
            </motion.button>
          </section>
        </main>
      </Container>
    </section>
  );
}
