// Components;
import Container from "../Container";
import FooterColumn from "./FooterColumn";
import FooterLogo from "./FooterLogo";
import FooterLogosBox from "./FooterlogosBox";
import NewsletterSignup from "./NewsletterSignup";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import { productCardContainerVariants } from "@/shared/animations";

// Data;
import { footerLinks } from "./data/footerLinks";
import { footerImages } from "./data/footerPaymentLogos";

export default function Footer() {
  return (
    <footer className="bg-bg-muted relative mt-40 pt-78 pb-6 md:pt-42">
      <NewsletterSignup />

      <main>
        <Container>
          <FooterLogo className="lg:hidden" />

          <section className="flex items-center justify-between gap-18">
            <FooterLogo className="hidden lg:flex" />

            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid w-full grid-cols-2 justify-between space-y-5 pb-8 sm:grid-cols-4 lg:flex"
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
        </Container>
      </main>
    </footer>
  );
}
