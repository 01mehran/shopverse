// Components;
import Container from "./Container";

// Images;
import laptapHeroImage from "@/assets/laptap-hero-imagee.png";
import mobileHeroImage from "@/assets/mobile-hero-image.png";
import smallStar from "@/assets/small-star.png";
import bigStar from "@/assets/big-star.png";

export default function Hero() {
  return (
    <section className="bg-bg-muted">
      <Container>
        <div className="relative mt-10 grid h-full grid-cols-1 md:grid-cols-2">
          {/* Content */}
          <div>
            <div>
              <h1 className="lg:font-Inter font-IntegralCF text-[36px] leading-8 font-extrabold lg:text-[60px] lg:leading-14 lg:tracking-wide">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="font-Satoshi mt-5 text-base leading-5 tracking-wide text-black/60 lg:mt-8">
                Browse through our diverse range of meticulously crafted
                garments, designed <br /> to bring out your individuality and
                cater to your sense of style.
              </p>
              <button className="font-Satoshi mt-8 w-full cursor-pointer rounded-full bg-black py-3.5 text-base text-white hover:bg-black/90 focus:ring-2 focus:ring-white lg:w-52">
                shop now
              </button>
            </div>

            {/* Stats */}
            <div className="font-Satoshi mt-12 flex flex-wrap items-center justify-center space-y-2 divide-black/10 md:flex xl:divide-x">
              <article className="xs:pl-18 w-1/2 border-r border-r-black/10 pl-3 leading-8 md:pl-0 lg:pl-8 xl:w-1/3">
                <p className="text-4xl font-bold text-black sm:text-2xl lg:text-4xl">
                  200+
                </p>
                <span className="text-sm text-nowrap text-black/60 md:text-base">
                  International Brands
                </span>
              </article>

              <article className="xs:pl-18 w-1/2 pl-6 leading-8 md:pl-8 lg:pl-8 xl:w-1/3">
                <p className="text-4xl font-bold text-black sm:text-2xl lg:text-4xl">
                  2,000+
                </p>
                <span className="text-sm text-nowrap text-black/60 md:text-base">
                  High-Quality Products
                </span>
              </article>

              <article className="xs:pl-18 w-1/2 pl-3 leading-8 md:pl-0 lg:pl-8 xl:w-1/3">
                <p className="text-4xl font-bold text-black sm:text-2xl lg:text-4xl">
                  30,000+
                </p>
                <span className="text-sm text-nowrap text-black/60 md:text-base">
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
              alt=""
              className="h-full w-full object-contain md:hidden"
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
