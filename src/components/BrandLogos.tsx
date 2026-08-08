// Logos
import calvinKlein from "@/assets/images/brand-logos/calvin-klein-logo.svg";
import gucci from "@/assets/images/brand-logos/gucci-logo.svg";
import prada from "@/assets/images/brand-logos/prada-logo.svg";
import versace from "@/assets/images/brand-logos/versace-logo.svg";
import zara from "@/assets/images/brand-logos/zara-logo.svg";
import Container from "./Container";

export default function BrandLogos() {
  return (
    <section className="bg-black">
      <Container>
        <div className="flex flex-wrap items-center justify-evenly gap-6 py-6 sm:py-8 md:justify-between">
          <img src={versace} alt="versace logo" className="w-20 md:w-32" />
          <img src={zara} alt=" zara logo" className="w-16 md:w-24" />
          <img src={gucci} alt=" gucci logo" className="w-20 md:w-32" />
          <img src={prada} alt="prada logo" className="w-20 md:w-32" />
          <img
            src={calvinKlein}
            alt="calvin Klein logo"
            className="w-20 md:w-32"
          />
        </div>
      </Container>
    </section>
  );
}
