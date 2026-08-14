// Components;
import Container from "./Container";

// Icons;
import { ChevronRight } from "lucide-react";

export default function BreadCrumb() {
  return (
    <section>
      <Container>
        <hr className="border border-black/5" />
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 py-4 text-sm text-black/60 md:py-5">
            <li>Home</li>
            <ChevronRight size={20} />
            <li>Shop</li>
            <ChevronRight size={20} />
            <li>Men</li>
            <ChevronRight size={20} />
            <li className="text-black/90">T-Shirts</li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}
