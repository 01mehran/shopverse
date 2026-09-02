import { create } from "zustand";

// Each Item;
type cartItem = {
  id: number;
  quantity: number;
};

type CartStore = {
  cartItems: cartItem[];
  increaseItem: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  increaseItem: (id) =>
    set(({ cartItems }) => {
      const productExist = cartItems.some((item) => item.id === id);

      if (!productExist) {
        return {
          cartItems: [...cartItems, { id: id, quantity: 1 }],
        };
      }

      return {
        cartItems: cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    }),
}));
