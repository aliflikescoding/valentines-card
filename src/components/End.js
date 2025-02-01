"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Chocolate from "@/components/Chocolate";
import { motion, AnimatePresence } from "framer-motion";
import data from "../app/data"; // Adjust the import path as needed

const End = () => {
  const [text, setText] = useState("");
  const [showComponents, setShowComponents] = useState(false);
  const fullText = data.to;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        // Wait a bit, then fade out the text and show components
        setTimeout(() => {
          setText("");
          setTimeout(() => {
            setShowComponents(true);
          }, 500); // Start showing components after text fade out
        }, 1000); // Wait 1s after typing completes
      }
    }, 150); // Typing speed

    return () => {
      clearInterval(typewriterInterval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {!showComponents && (
          <motion.div
            className="absolute text-4xl font-bold text-center w-full"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-typewritter text-[100px]">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {showComponents && (
        <div className="relative w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-8 w-full relative">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="z-0"
            >
              <Chocolate />
            </motion.div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="z-0"
            >
              <Image
                alt="Flowers"
                src="/flowers-grup.png"
                height={0}
                width={0}
                sizes="100vw"
                className="w-auto h-auto"
              />
            </motion.div>
          </div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Image
              alt="Will You"
              src="/will-you.svg"
              height={0}
              width={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default End;
