// Images;
import hero from "@/assets/hero.png";
import smallVector from "@/assets/smallVector.png";
import bigVectore from "@/assets/bigVector.png";

export default function Hero() {
  return (
    <section className="bg-bg-muted">
      <div className="relative mx-auto h-full max-w-7xl px-5 lg:px-10 2xl:max-w-350">
        {/* Content */}
        <div className="absolute top-20 z-50 w-1/2">
          <div>
            <h1 className="font-Inter text-[60px] leading-14 tracking-wide">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="font-Satoshi mt-8 text-base leading-5 tracking-wide text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
            <button className="font-Satoshi mt-8 w-52 cursor-pointer rounded-full bg-black py-3.5 text-base text-white hover:bg-black/90 focus:ring-2 focus:ring-white">
              shop now
            </button>
          </div>

          {/* Stats */}
          <div className="font-Satoshi mt-12 flex items-center divide-x divide-black/10">
            <article className="pr-8 leading-9">
              <p className="text-[40px] font-bold text-black">200+</p>
              <span className="text-base text-black/60">
                International Brands
              </span>
            </article>

            <article className="px-8 leading-9">
              <p className="text-[40px] font-bold text-black">2,000+</p>
              <span className="text-base text-black/60">
                High-Quality Products
              </span>
            </article>

            <article className="pl-8 leading-9">
              <p className="text-[40px] font-bold text-black">30,000+</p>
              <span className="text-base text-black/60">Happy Customers</span>
            </article>
          </div>
        </div>

        {/* Hero */}
        <div className="relative">
          <img
            src={hero}
            alt="Fashion models wearing modern clothes"
            className="h-full w-full object-contain"
            loading="lazy"
          />
          <img
            src={smallVector}
            alt="small vector around hero image"
            className="absolute top-1/2 right-[42%] -translate-y-1/2"
            loading="lazy"
          />
          <img
            src={bigVectore}
            alt="big vector around hero image"
            className="absolute top-20 right-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
