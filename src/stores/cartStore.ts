import { create } from "zustand";

// Each Item;
export type cartItem = {
  id: number;
  quantity: number;
};

type CartStore = {
  cartItems: cartItem[];

  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
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

  decreaseItem: (id) =>
    set(({ cartItems }) => {
      const item = cartItems.find((item) => item.id === id);

      if (!item) return { cartItems };

      if (item.quantity === 1) {
        return {
          cartItems: cartItems.filter((item) => item.id !== id),
        };
      }

      return {
        cartItems: cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    }),

  addItem: (id) =>
    set(({ cartItems }) => {
      const productExist = cartItems.find((item) => item.id === id);

      if (!productExist) {
        return {
          cartItems: [...cartItems, { id: id, quantity: 1 }],
        };
      }

      return { cartItems };
    }),

  removeItem: (id) => {
    set(({ cartItems }) => {
      return {
        cartItems: cartItems.filter((item) => item.id !== id),
      };
    });
  },
}));
