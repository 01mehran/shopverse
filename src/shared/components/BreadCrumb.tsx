// Components;
import Container from "./Container";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  breadCrumbContainerVariant,
  breadCrumbRouteVarinat,
} from "../animations";

// Icons;
import { ChevronRight } from "lucide-react";

export default function BreadCrumb() {
  return (
    <section>
      <Container>
        <hr className="border border-black/5" />
        <nav aria-label="Breadcrumb">
          <motion.ol
            variants={breadCrumbContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-2 py-4 text-sm text-black/60 md:py-5"
          >
            <motion.li variants={breadCrumbRouteVarinat}>Home</motion.li>
            <ChevronRight size={20} />
            <motion.li variants={breadCrumbRouteVarinat}>Shop</motion.li>
            <ChevronRight size={20} />
            <motion.li variants={breadCrumbRouteVarinat}>Men</motion.li>
            <ChevronRight size={20} />
            <motion.li
              variants={breadCrumbRouteVarinat}
              className="text-black/90"
            >
              T-Shirts
            </motion.li>
          </motion.ol>
        </nav>
      </Container>
    </section>
  );
}
