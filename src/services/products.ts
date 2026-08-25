// Types;
import type { Product } from "@/shared/types/types";
type GetProductsProps = "new-arrivals" | "top-selling";

// Api;
import { api } from "./api";

export const getProducts = async (
  section: GetProductsProps,
): Promise<Product[]> => {
  const { data } = await api.get(`/products?section=${section}`);

  return data;
};
