// Components;
import CartItem from "@/features/cart/components/CartItem";
import { BreadCrumb } from "@/shared/components";

export default function Cart() {
  return (
    <section>
      <BreadCrumb items={[{ label: "Cart" }]} />
      <CartItem />
    </section>
  );
}
