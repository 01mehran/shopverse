// Components;
import CartItem from "@/features/cart/components/CartItem";
import { BreadCrumb, Header, TopBar } from "@/shared/components";

export default function Cart() {
  return (
    <section>
      <TopBar />
      <Header />
      <BreadCrumb />
      <CartItem />
    </section>
  );
}
