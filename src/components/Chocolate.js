"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Chocolate = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ top: 0, left: 0 }}
        animate={{ top: -150, left: -150 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }} // Added delay: 1
        className="absolute"
      >
        <Image
          alt="Record Player"
          src="/chocolate-cover.png"
          height={0}
          width={0}
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <Image
        alt="Record Player"
        src="/chocolate-bottom.png"
        height={0}
        width={0}
        sizes="100vw"
        className="w-auto h-auto"
      />
    </div>
  );
};

export default Chocolate;
