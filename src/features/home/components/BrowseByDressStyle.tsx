// Components;
import { Container } from "@/shared/components";

// Static Images;
import dressStyle1 from "@images/home/dress-style-1.png";
import dressStyle2 from "@images/home/dress-style-2.png";
import dressStyle3 from "@images/home/dress-style-3.png";
import dressStyle4 from "@images/home/dress-style-4.png";

export default function BrowseByDressStyle() {
  return (
    <Container>
      <section className="bg-bg-muted rounded-2xl px-5 py-8 sm:py-12 lg:px-10">
        <header className="font-IntegralCF md:font-Inter pb-6 text-center text-[32px] leading-8 font-bold tracking-tighter sm:pb-10 md:text-[48px] md:font-normal md:tracking-wide">
          BROWSE BY <br className="md:hidden" />{" "}
          <span className="md:lowercase">DRESS</span> STYLE
        </header>

        <main className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:grid-cols-9">
          <article className="relative sm:col-span-3">
            <img
              src={dressStyle1}
              alt="a man wore causal clothes"
              loading="lazy"
              className="fit h-47 w-full rounded-2xl md:h-52"
            />
            <span className="absolute top-4 left-4 text-xl font-bold sm:left-6">
              Casual
            </span>
          </article>

          <article className="relative sm:col-span-6">
            <img
              src={dressStyle2}
              alt="a man wore formal clothes"
              loading="lazy"
              className="fit h-47 w-full rounded-2xl md:h-52"
            />
            <span className="absolute top-4 left-4 text-xl font-bold sm:left-6">
              Formal
            </span>
          </article>

          <article className="relative sm:col-span-6">
            <img
              src={dressStyle3}
              alt="a women wore party clothes"
              loading="lazy"
              className="fit h-47 w-full rounded-2xl md:h-52"
            />
            <span className="absolute top-4 left-4 text-xl font-bold sm:left-6">
              Party
            </span>
          </article>

          <article className="relative sm:col-span-3">
            <img
              src={dressStyle4}
              alt="a man wore sports clothes"
              loading="lazy"
              className="fit h-47 w-full rounded-2xl md:h-52"
            />
            <span className="absolute top-4 left-4 text-xl font-bold sm:left-6">
              Gym
            </span>
          </article>
        </main>
      </section>
    </Container>
  );
}
