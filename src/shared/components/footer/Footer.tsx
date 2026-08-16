// Components;
import Container from "../Container";
import FooterColumn from "./FooterColumn";
import FooterLogo from "./FooterLogo";
import FooterLogosBox from "./FooterlogosBox";

// Motion;
import { motion } from "motion/react";

// Animations;
import { productCardContainerVariants } from "@/shared/animations";

// Data;
import { footerLinks } from "./data/footerLinks";
import { footerImages } from "./data/footerPaymentLogos";

// Icons;
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-muted relative mt-40 pt-10 pb-6">
      <Container>
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex w-full -translate-y-32 flex-col items-center justify-between space-y-10 rounded-3xl bg-black p-8 text-white md:flex-row md:space-y-0 lg:p-12"
        >
          <div>
            <p className="font-IntegralCF max-w-150 pr-8 text-[32px] leading-9 font-bold md:text-[40px] md:leading-11">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>
          <form className="relative flex w-full max-w-77 flex-col items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className="rounded-0 w-full rounded-full bg-white px-12 py-2 text-black outline-0 placeholder:text-black/60"
            />
            <span className="absolute top-2.5 left-3 text-gray-500">
              <Mail size={20} />
            </span>
            <button className="w-full rounded-full bg-white py-2 font-medium text-black">
              Subscribe to Newsletter
            </button>
          </form>
        </motion.section>
      </Container>

      <Container>
        <main>
          <FooterLogo className="lg:hidden" />

          <section className="">
            <FooterLogo className="hidden lg:flex" />

            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 justify-between space-y-5 pb-8 sm:grid-cols-4 lg:flex"
            >
              {footerLinks.map((column) => (
                <FooterColumn
                  title={column.title}
                  key={column.title}
                  links={column.links}
                />
              ))}
            </motion.div>
          </section>

          <hr className="border border-black/5" />

          {/* Under Footer */}
          <motion.section
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row"
          >
            <p className="text-base text-black/60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              {footerImages.map((images) => (
                <FooterLogosBox
                  imageUrl={images.imageUrl}
                  key={images.alt}
                  alt={images.alt}
                  className="shadow-sm"
                />
              ))}
            </div>
          </motion.section>
        </main>
      </Container>
    </footer>
  );
}
