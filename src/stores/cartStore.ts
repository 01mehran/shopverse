import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  colorIndex: number;
  sizeIndex: number;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];

  addProduct: (newProduct: CartItem) => void;
  updateCartItemQuantity: (cartItem: CartItem) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addProduct: (newProduct) =>
        set((state) => {
          const existingProduct = state.cartItems.find(
            (product) =>
              product.id === newProduct.id &&
              product.colorIndex === newProduct.colorIndex &&
              product.sizeIndex === newProduct.sizeIndex,
          );

          if (existingProduct) {
            return {
              cartItems: state.cartItems.map((product) =>
                product.id === newProduct.id &&
                product.colorIndex === newProduct.colorIndex &&
                product.sizeIndex === newProduct.sizeIndex
                  ? {
                      ...product,
                      quantity: product.quantity + newProduct.quantity,
                    }
                  : product,
              ),
            };
          }

          return {
            cartItems: [...state.cartItems, newProduct],
          };
        }),

      updateCartItemQuantity: (cartItem) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === cartItem.id &&
            item.colorIndex === cartItem.colorIndex &&
            item.sizeIndex === cartItem.sizeIndex
              ? cartItem
              : item,
          ),
        })),
    }),

    { name: "cart-storage" },
  ),
);
