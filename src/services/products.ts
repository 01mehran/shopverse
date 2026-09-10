// Types;
import type { Product } from "@/shared/types/types";
type props = "new-arrivals" | "top-selling" | "you-might-like";

// Supabse;
import { supabse } from "@/lib/supabse-client";

export const getProducts = async (section: props): Promise<Product[]> => {
  const { data, error } = await supabse
    .from("products")
    .select("*")
    .eq("section", section);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};
