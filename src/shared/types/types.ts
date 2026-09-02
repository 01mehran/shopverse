import type React from "react";

export type ReactNode = {
  children: React.ReactNode;
};

export type product = {
  id: number;
  image: string;
  name: string;
  rating: number;
  price: number;
};

export type ProductCardProps = {
  product: product;
};

export type VariantProps = {
  variant: "mobile" | "desktop";
};

export type FooterImages = {
  imageUrl: string;
  alt: string;
  borderRadius?: string;
  className?: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  section: "new-arrivals" | "top-selling" | "you-might-like";
};

export type BreadcrumbItem = {
  label?: string;
  href?: string;
};

export type BreadCrumbProps = {
  items: BreadcrumbItem[];
};

export type addToCartProps = {
  variant: "product-info" | "cart-item";
  id: number;
};
