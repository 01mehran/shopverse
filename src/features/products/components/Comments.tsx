// Cmponents;
import { Container } from "@/shared/components";
import Tabs from "./Tabs";

// Static Images;
import ratingStar from "@/assets/images/home/rating-start.png";

// Icons;
import { Ellipsis, SlidersVertical } from "lucide-react";

export default function Comments() {
  return (
    <section>
      <Container>
        <Tabs />

        <header className="flex items-center justify-between">
          <h1 className="font-Satoshi text-base font-bold md:text-2xl">
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
        </header>

        <main className="mt-4 md:mt-8">
          {/* User Comments */}
          <section>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }, (_, i) => (
                <article
                  key={i}
                  className="relative flex flex-col gap-2 rounded-2xl border border-black/10 p-4 shadow md:justify-between md:p-7"
                >
                  <img
                    src={ratingStar}
                    alt="rating start image"
                    className="w-32"
                  />
                  <h1 className="font-Satoshi text-xl font-bold">Sarah M.</h1>
                  <p className="font-Satoshi text-base leading-6 font-normal text-black/60">
                    "I'm blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I've bought has exceeded my expectations.”
                  </p>
                  <span className="font-Satoshi mt-6 text-sm font-medium text-black/60">
                    Posted on August 19, 2023
                  </span>
                  <button className="absolute top-6 right-6 hidden cursor-pointer text-black/40 md:block">
                    <Ellipsis />
                  </button>
                </article>
              ))}
            </div>

            {/* Load More Comments Button */}
            <button className="font-Satoshi mx-auto mt-5 block w-50 cursor-pointer rounded-[62px] border border-black/10 py-2 text-sm font-medium sm:mt-10 sm:text-base">
              Load More Reviews
            </button>
          </section>
        </main>
      </Container>
    </section>
  );
}
