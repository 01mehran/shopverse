// React Router Dom;
import { Outlet } from "react-router-dom";

// Components;
import { BackToTopButton, Footer, Header, TopBar } from "@/shared/components";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />

      <main>
        <Outlet />
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
