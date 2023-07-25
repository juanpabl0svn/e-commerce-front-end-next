"use client";
// @ts-ignore
import { motion } from "framer-motion";
import { IProduct } from "@/utils/types";

function ProductPage({ product }: { product: IProduct }) {
  return (
    <motion.img layoutId={product._id} src={product.image} alt={product.name} />
  );
}

export default ProductPage;
