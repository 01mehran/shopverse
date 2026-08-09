import shopCo from "@/assets/SHOP.CO.png";
import Container from "./Container";
import twitter from "@/assets/images/social-logos/xTwitter.svg";
import facebook from "@/assets/images/social-logos/facebook.svg";
import instagram from "@/assets/images/social-logos/instagram.svg";
import github from "@/assets/images/social-logos/github.svg";

import applePay from "@/assets/images/badges/applePay.svg";
import googlePay from "@/assets/images/badges/googlePay.svg";
import masterCard from "@/assets/images/badges/mastercard.svg";
import paypal from "@/assets/images/badges/paypal.svg";
import visa from "@/assets/images/badges/Visa.svg";

export default function Footer() {
  return (
    <footer className="bg-bg-muted mt-14 py-18">
      <Container>
        <main>
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
            {/* 2 */}
            <article className="flex flex-col items-start justify-center gap-3">
              <p className="font-Satoshi text-lg font-medium text-black uppercase">
                {" "}
                company
              </p>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                about
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                features
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                works
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                career
              </span>
            </article>
            {/* 3 */}
            <article className="flex flex-col items-start justify-center gap-3">
              <p className="font-Satoshi text-lg font-medium text-black uppercase">
                {" "}
                help
              </p>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                customer support{" "}
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                delivery
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                terms & conditions
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                privacy policy
              </span>
            </article>
            {/* 4 */}
            <article className="flex flex-col items-start justify-center gap-3">
              <p className="font-Satoshi text-lg font-medium text-black uppercase">
                {" "}
                faq
              </p>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                account
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                mangage deliceries
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                orders
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                payments
              </span>
            </article>
            {/* 5 */}
            <article className="flex flex-col items-start justify-center gap-3">
              <p className="font-Satoshi text-lg font-medium text-black uppercase">
                resources
              </p>
              <span className="font-Satoshi text-base text-black/60">
                Free eBooks
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                development tutorial{" "}
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                How to - Blog
              </span>
              <span className="font-Satoshi text-base text-black/60 capitalize">
                youtube playlist
              </span>
            </article>
          </section>
          <hr className="border border-black/5" />

          {/* Under Footer */}
          <section className="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row">
            <p className="font-satoshi text-base text-black/60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              <article className="rounded-md bg-white p-2">
                <img src={visa} alt="" className="object-cover" />
              </article>
              <article className="rounded-md bg-white p-2">
                <img src={masterCard} alt="" className="w-6 object-cover" />
              </article>
              <article className="rounded-md bg-white p-2">
                <img src={paypal} alt="" className="object-cover" />
              </article>
              <article className="rounded-md bg-white p-2">
                <img src={applePay} alt="" className="object-cover" />
              </article>
              <article className="rounded-md bg-white p-2">
                <img src={googlePay} alt="" className="object-cover" />
              </article>
            </div>
          </section>
        </main>
      </Container>
    </footer>
  );
}
