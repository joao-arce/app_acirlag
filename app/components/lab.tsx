"use client";
import { motion } from "framer-motion";
import GraphImg from "@/public/hero/money.png";
import Image from "next/image";

const Lab = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.5 },
    },
  };

  const content = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="px-2 mt-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-10 bg-fuchsia-600 rounded-xl grid grid-cols-2 gap-4 py-8"
      >
        <motion.div
          variants={content}
          className="w-12 h-12 rounded-md bg-indigo-400"
        >
          <div className="bg-gradient-to-r from-teal-200 to-teal-500 rounded-lg md:col-span-2 row-span-2 order-first md:order-none">
            <div className="flex justify-center items-center py-4 md:py-0 w-full h-full">
              <Image src={GraphImg} alt="Grafico" width={80} />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={content}
          className="w-12 h-12 rounded-md bg-indigo-200"
        ></motion.div>
        <motion.div
          variants={content}
          className="w-12 h-12 rounded-md bg-indigo-500"
        ></motion.div>
        <motion.div
          variants={content}
          className="w-12 h-12 rounded-md bg-indigo-600"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lab;
