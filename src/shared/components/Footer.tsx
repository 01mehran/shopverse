// Components;
import Container from "./Container";
import FooterColumn from "./FooterColumn";
import FooterLogosBox from "./FooterlogosBox";

// Data;
import { footerLinks } from "../data/footerLinks";
import { footerImages } from "../data/footerPaymentLogos";

// Images;
import shopCo from "@images/home/SHOP.CO.png";

import twitter from "@images/home/social-logos/xTwitter.svg";
import facebook from "@images/home/social-logos/facebook.svg";
import instagram from "@images/home/social-logos/instagram.svg";
import github from "@images/home/social-logos/github.svg";

// Icons;
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-muted relative mt-40 pt-10 pb-6">
      <Container>
        <section className="flex w-full -translate-y-32 flex-col items-center justify-between space-y-10 rounded-3xl bg-black p-8 text-white md:flex-row md:space-y-0 lg:p-12">
          <div>
            <p className="font-IntegralCF max-w-150 pr-8 text-[32px] leading-9 font-extrabold md:text-[40px] md:leading-11">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>
          <form className="relative flex w-full max-w-77 flex-col items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className="rounded-0 w-full rounded-full bg-white px-12 py-2 text-black outline-0 placeholder:text-black/60"
            />
            <span className="absolute top-2.5 left-3 text-gray-500">
              <Mail size={20} />
            </span>
            <button className="font-Satoshi w-full rounded-full bg-white py-2 font-medium text-black">
              Subscribe to Newsletter
            </button>
          </form>
        </section>
      </Container>
      <Container>
        <main className="">
          <article className="mb-8 flex flex-col items-start justify-center gap-6 lg:hidden">
            <img src={shopCo} alt="" />
            <p className="font-Satoshi text-sm text-black/60">
              We have clothes that suits your style and <br /> which you’re
              proud to wear. <br /> From women to men.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={twitter}
                alt="twitter logo"
                className="aspect-square w-4.5"
              />
              <img
                src={facebook}
                alt="facebook logo"
                className="aspect-square w-4.5"
              />
              <img
                src={instagram}
                alt="instagram logo"
                className="aspect-square w-4.5"
              />
              <img
                src={github}
                alt="github logo"
                className="aspect-square w-4.5"
              />
            </div>
          </article>
          <section className="grid grid-cols-2 justify-between space-y-5 pb-8 sm:grid-cols-4 lg:flex">
            {/* 1 */}
            <article className="mb-8 hidden flex-col items-start justify-center gap-6 lg:flex">
              <img src={shopCo} alt="" />
              <p className="font-Satoshi text-sm text-black/60">
                We have clothes that suits your style and <br /> which you’re
                proud to wear. <br /> From women to men.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={twitter}
                  alt="twitter logo"
                  className="aspect-square w-4.5"
                />
                <img
                  src={facebook}
                  alt="facebook logo"
                  className="aspect-square w-4.5"
                />
                <img
                  src={instagram}
                  alt="instagram logo"
                  className="aspect-square w-4.5"
                />
                <img
                  src={github}
                  alt="github logo"
                  className="aspect-square w-4.5"
                />
              </div>
            </article>

            {footerLinks.map((column) => (
              <FooterColumn
                title={column.title}
                key={column.title}
                links={column.links}
              />
            ))}
          </section>

          <hr className="border border-black/5" />

          {/* Under Footer */}
          <section className="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row">
            <p className="font-satoshi text-base text-black/60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              {footerImages.map((images) => (
                <FooterLogosBox
                  imageUrl={images.imageUrl}
                  key={images.alt}
                  alt={images.alt}
                />
              ))}
            </div>
          </section>
        </main>
      </Container>
    </footer>
  );
}
