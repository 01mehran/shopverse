// Components;
import { Container } from "@/shared/components";

// Images;
import laptapHeroImage from "@images/home/laptap-hero-imagee.png";
import mobileHeroImage from "@images/home/mobile-hero-image.png";
import smallStar from "@images/home/small-star.png";
import bigStar from "@images/home/big-star.png";

export default function Hero() {
  return (
    <section className="bg-bg-muted">
      <Container>
        <div className="relative grid h-full grid-cols-1 py-8 md:grid-cols-2">
          {/* Content */}
          <div>
            <div>
              <h1 className="md:font-Inter font-IntegralCF text-[36px] leading-8 md:font-normal lg:text-[60px] lg:leading-14 lg:tracking-wide">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="mt-5 text-base leading-5 font-normal tracking-wide text-black/60 lg:mt-8">
                Browse through our diverse range of meticulously crafted
                garments, designed <br /> to bring out your individuality and
                cater to your sense of style.
              </p>
              <button className="mt-8 w-full cursor-pointer rounded-full bg-black py-3.5 text-base font-medium text-white hover:bg-black/90 focus:ring-2 focus:ring-white lg:w-52">
                Shop now
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center space-y-2 divide-black/10 md:flex xl:divide-x">
              <article className="xs:pl-18 w-1/2 border-r border-r-black/10 pl-3 leading-8 md:pl-0 lg:pl-8 xl:w-1/3">
                <p className="text-[24px] font-bold text-black lg:text-[40px]">
                  200+
                </p>
                <span className="text-sm font-normal text-nowrap text-black/60 md:text-base">
                  International Brands
                </span>
              </article>

              <article className="xs:pl-18 w-1/2 pl-6 leading-8 md:pl-8 lg:pl-8 xl:w-1/3">
                <p className="text-[24px] font-bold text-black lg:text-[40px]">
                  2,000+
                </p>
                <span className="text-sm font-normal text-nowrap text-black/60 md:text-base">
                  High-Quality Products
                </span>
              </article>

              <article className="xs:pl-18 w-1/2 pl-3 leading-8 md:pl-0 lg:pl-8 xl:w-1/3">
                <p className="text-[24px] font-bold text-black lg:text-[40px]">
                  30,000+
                </p>
                <span className="text-sm font-normal text-nowrap text-black/60 md:text-base">
                  Happy Customers
                </span>
              </article>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative h-112 md:h-120">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
