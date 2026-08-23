// Components;
import { Container } from "@/shared/components";
import Stats from "./Stats";
import HeroImages from "./HeroImages";

// Motion Component;
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="bg-bg-muted">
      <Container>
        <main className="relative grid h-full grid-cols-1 py-8 md:grid-cols-2">
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
            <Stats />
          </div>

          {/* Hero Images */}
          <HeroImages />
        </main>
      </Container>
    </section>
  );
}
