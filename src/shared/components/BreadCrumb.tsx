// React Router Dom;
import { Link } from "react-router-dom";

// Components;
import Container from "./Container";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  breadCrumbContainerVariant,
  breadCrumbRouteVarinat,
} from "../animations";

// Types;
import type { BreadCrumbProps } from "../types/types";

// Icons;
import { ChevronRight } from "lucide-react";

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <nav>
      <Container>
        <nav aria-label="Breadcrumb">
          <motion.ul
            variants={breadCrumbContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-1 py-4 text-sm text-black/60 sm:gap-2 md:py-5"
          >
            {/* Home */}
            <motion.li variants={breadCrumbRouteVarinat}>
              <Link to="/">Home</Link>
            </motion.li>

            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={20} />

                <motion.li
                  variants={breadCrumbRouteVarinat}
                  className={
                    index === items.length - 1
                      ? "font-medium text-black/80"
                      : ""
                  }
                >
                  {item.label || "..."}
                </motion.li>
              </div>
            ))}
          </motion.ul>
        </nav>
      </Container>
    </nav>
  );
}
