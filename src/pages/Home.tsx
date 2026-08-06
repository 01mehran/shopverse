// Components;
import TopBar from "@components/TopBar";
import Header from "@components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <div className="min-h-screen grid grid-rows-[auto_auto_1fr]">
        <TopBar />
        <Header />
        <Hero />
      </div>
    </section>
  );
}
