// Types;
import type { Product } from "@/shared/types/types";
type props = "new-arrivals" | "top-selling" | "you-might-like";

// Api;
import { api } from "./api";

export const getProducts = async (section: props): Promise<Product[]> => {
  const { data } = await api.get(`/products?section=${section}`);

  return data;
};
