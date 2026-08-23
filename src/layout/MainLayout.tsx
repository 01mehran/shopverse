// React Router Dom;
import { Outlet } from "react-router-dom";

// Components;
import {
  BackToTopButton,
  Footer,
  Header,
  ScrollToHash,
  TopBar,
} from "@/shared/components";

export default function MainLayout() {
  return (
    <>
      <ScrollToHash />

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
