// Components;
import { Container } from "@/shared/components";

// Static Images;
import pic1 from "@/features/products/assets/pic9.png";
import pic2 from "@/features/products/assets/pic10.png";
import pic3 from "@/features/products/assets/pic11.png";

export default function ProductInfo() {
  return (
    <section>
      <Container>
        <section className="grid-cols-1 gap-8 lg:grid lg:grid-cols-2">
          {/* Product Images */}
          <div className="mx-auto grid max-w-125 grid-cols-1 gap-3 lg:mx-0 lg:h-100 lg:max-w-none lg:grid-cols-[90px_1fr]">
            {/* Main Image */}
            <div className="order-1 h-100 overflow-hidden rounded-2xl lg:order-2 lg:h-full">
              <img
                src={pic1}
                alt="clothes"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="order-2 grid grid-cols-3 gap-3 lg:order-1 lg:grid-cols-1 lg:grid-rows-3">
              <img
                src={pic1}
                alt="clothes"
                className="h-30 w-full rounded-xl object-cover lg:h-full"
              />

              <img
                src={pic2}
                alt="clothes"
                className="h-30 w-full rounded-xl object-cover lg:h-full"
              />

              <img
                src={pic3}
                alt="clothes"
                className="h-30 w-full rounded-xl object-cover lg:h-full"
              />
            </div>
          </div>

          {/* Product Info */}
          <div></div>
        </section>
      </Container>
    </section>
  );
}
