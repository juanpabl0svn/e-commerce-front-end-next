"use client";
// @ts-ignore
import { motion } from "framer-motion"
import { IProduct } from "@/utils/types";
import Link from "next/link";

function Landing({ products }: { products: IProduct[] }) {
  return (products.map((product, index) => (
    <Link href={`/product/${product._id}`} key={index}>
      <motion.img layoutId={product._id} src={product.image} alt={product.name} className='bg-black h-40 aspect-[500/400]'/>
    </Link>
  )));
}

export default Landing;
