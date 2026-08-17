// Components;
import Container from "../Container";
import FooterColumn from "./FooterColumn";
import FooterLogo from "./FooterLogo";
import NewsletterSignup from "./NewsletterSignup";
import FooterBottom from "./FooterBottom";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import { productCardContainerVariants } from "@/shared/animations";

// Data;
import { footerLinks } from "./data/footerLinks";

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

          {/* Footer Bottom */}
          <FooterBottom />
        </Container>
      </main>
    </footer>
  );
}
