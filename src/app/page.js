"use client";

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import data from "./data";

export default function Home() {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); // Track current page number

  const handleNext = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext(); // Go to the next page
      setCurrentPage((prev) => prev + 1); // Update page count
    }
  };

  const handlePrevious = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev(); // Go to the previous page
      setCurrentPage((prev) => prev - 1); // Update page count
    }
  };

  // Total number of pages (including front and back covers)
  const totalPages = 6;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* FlipBook Component */}
      <HTMLFlipBook
        width={500} // Width of the book
        height={700} // Height of the book
        showCover={true} // Ensure the cover is visible
        ref={flipBookRef} // Reference to control the flip book
        disableFlip={true} // Disable manual flipping
        onFlip={(e) => setCurrentPage(e.data)} // Update page number on flip
      >
        {/* Front Cover */}
        <div className="flex items-center p-[25px] rounded-r-[25px] justify-center bg-primary">
          <div className="h-full w-full border-[4px] rounded-r-[25px] border-accent flex flex-col justify-center items-center">
            <div className="relative">
              <Image
                src={"/cover-text.svg"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-auto"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute top-[-5px] right-[15px] w-[55px] transform rotate-[-10.85deg]"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute top-[-15px] left-[10px] w-[64px] transform rotate-[-15deg] scale-x-[-1]"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute top-[140px] left-[-25px] w-[53px] transform rotate-[-15deg] scale-x-[-1]"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute top-[146px] left-[141px] w-[55px] transform rotate-[-10.85deg]"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute top-[75px] right-[127px] w-[55px] transform rotate-[6.89deg]"
              />
              <Image
                src={"/hearts-card.png"}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto absolute right-[-15px] top-[146px] w-[64px] transform rotate-[-8.51deg]"
              />
            </div>
            <div className="text-center text-[24px] font-medium font-playfair text-accent mt-[15px]">
              <p>
                to <span className="capitalize">{data.to}</span>
              </p>
              <p>
                from <span className="capitalize">{data.from}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Inner Pages */}
        <div className="flex items-center justify-center bg-white text-black text-lg">
          Page 1
        </div>
        <div className="flex items-center justify-center bg-white text-black text-lg">
          Page 2
        </div>
        <div className="flex items-center justify-center bg-white text-black text-lg">
          Page 3
        </div>
        <div className="flex items-center justify-center bg-white text-black text-lg">
          Page 4
        </div>

        {/* Back Cover */}
        <div className="flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
          Back Cover
        </div>
      </HTMLFlipBook>

      {/* Page Count */}
      <div className="mt-2 text-lg font-semibold">
        Page {currentPage + 1} of {totalPages}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0} // Disable "Previous" on the first page
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1} // Disable "Next" on the last page
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
