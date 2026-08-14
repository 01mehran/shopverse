// Components;
import { Container } from "@/shared/components";

// Images;
import laptapHeroImage from "@images/home/laptap-hero-imagee.png";
import mobileHeroImage from "@images/home/mobile-hero-image.png";
import smallStar from "@images/home/small-star.png";
import bigStar from "@images/home/big-star.png";

// Motion;
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="bg-bg-muted">
      <Container>
        <div className="relative grid h-full grid-cols-1 py-8 md:grid-cols-2">
          {/* Content */}
          <div>
            <div>
              <motion.h1
                initial={{ y: 60, opacity: 0, rotate: 3 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:font-Inter font-IntegralCF text-[36px] leading-8 md:font-normal lg:text-[60px] lg:leading-14 lg:tracking-wide"
              >
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-5 text-base leading-5 font-normal tracking-wide text-black/60 lg:mt-8"
              >
                Browse through our diverse range of meticulously crafted
                garments, designed <br /> to bring out your individuality and
                cater to your sense of style.
              </motion.p>
              <motion.button
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 w-full cursor-pointer rounded-full bg-black py-3.5 text-base font-medium text-white hover:bg-black/90 focus:ring-2 focus:ring-white lg:w-52"
              >
                Shop now
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              viewport={{ once: true }}
              className="xs:justify-around mx-auto mt-8 flex w-full max-w-100 flex-wrap items-baseline justify-center space-y-2 divide-black/10 md:mt-12 md:flex lg:max-w-full lg:divide-x"
            >
              <article className="xs:pr-12 border-r border-r-black/10 pr-4 lg:pr-6">
                <p className="stats-numbers">200+</p>
                <span className="stats-text">International Brands</span>
              </article>

              <article className="pl-4 lg:pr-5">
                <p className="stats-numbers">2,000+</p>
                <span className="stats-text">High-Quality Products</span>
              </article>

              <article className="lg:pl-5">
                <p className="stats-numbers">30,000+</p>
                <span className="stats-text">Happy Customers</span>
              </article>
            </motion.div>
          </div>

          {/* Hero Images */}
          <motion.div
            initial={{ y: 60, opacity: 0, rotate: 5 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-112 md:h-120"
          >
            {/* Laptap Hero Image */}
            <img
              src={laptapHeroImage}
              alt="Fashion models wearing modern clothes"
              className="hidden h-full w-full object-bottom-right md:block"
              loading="lazy"
            />

            {/* Mobile Hero Image*/}
            <img
              src={mobileHeroImage}
              alt="Fashion models wearing modern clothes"
              className="h-full w-full object-contain md:hidden"
              loading="lazy"
            />

            {/* Small Star */}
            <img
              src={smallStar}
              alt="small vector around hero image"
              className="absolute top-38 left-4"
              loading="lazy"
            />

            {/* Big Star */}
            <img
              src={bigStar}
              alt="big vector around hero image"
              className="absolute top-8 right-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
