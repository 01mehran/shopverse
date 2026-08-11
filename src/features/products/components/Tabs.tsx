// Components;
import { Container } from "@/shared/components";

export default function Tabs() {
  return (
    <section className="mt-4 py-12">
      <Container>
        <div className="font-Satoshi relative flex items-center justify-between border-b border-b-black/10 py-2 text-sm text-black/60 md:justify-around md:text-base">
          {/* Indicator */}
          <div className="absolute bottom-0 left-1/2 h-0.5 w-[calc(100%/3-35px)] -translate-x-1/2 bg-black"></div>

          <p>Product Details</p>
          <p className="font-medium text-black">Rating & Reviews</p>
          <p>FAQs</p>
        </div>
      </Container>
    </section>
  );
}
