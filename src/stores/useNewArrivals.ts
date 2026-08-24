import { create } from "zustand";
type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
};

type TNewArrivals = {
  newArrivals: Product[];
  loading: boolean;
  error: string | null;
  getNewArrivals: () => Promise<void>;
};

export const useNewArrivals = create<TNewArrivals>((set) => ({
  newArrivals: [],
  loading: false,
  error: null,

  getNewArrivals: async () => {
    set({ loading: true, error: null });

    try {
      const rest = await fetch(
        `http://localhost:3000/products?section=new-arrivals`,
      );
      const data = await rest.json();

      //   console.log(data);
      set({ newArrivals: data });
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
}));
