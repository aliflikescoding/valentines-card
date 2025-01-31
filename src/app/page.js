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
  const totalPages = 10;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
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
        {/* page 1 and 2 */}
        <div className="flex items-center p-[25px] border-r-2 border-accent rounded-l-[25px] justify-center bg-primary">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="w-[300px] h-[350px] bg-white transform rotate-[-5deg] p-[12px]">
              <Image
                src={data.section1.image}
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-[275px] object-cover"
              />

              <div className="flex mt-[10px] justify-between">
                <Image
                  src={"/heart.png"}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
                <Image
                  src={"/heart.png"}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </div>
            </div>
            <Image
              src={"/quote-love.svg"}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-auto absolute left-0 top-16 transform rotate-[-9deg]"
            />
            <Image
              src={"/quote-my-darling.svg"}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-[172px] absolute right-0 bottom-16 transform rotate-[2.5deg]"
            />
          </div>
        </div>
        <div className="relative border-y-[10px] border-r-[10px] border-primary rounded-r-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-r-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium">
            <div className="text-center max-w-[415px]">
              <div className="relative">
                <p className="text-accent relative">
                  {data.section1.title}{" "}
                  <Image
                    src={"/hearts-card.png"}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto z-20 absolute top-[-15px] left-[80%] w-[30px] transform rotate-[-6.19deg]"
                  />
                </p>
              </div>
              <p className="mt-[24px]">{data.section1.text}</p>
            </div>
          </div>
        </div>

        {/* page 3 and 4 */}
        <div className="relative border-y-[10px] border-l-[10px] border-primary rounded-l-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-l-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium"></div>
        </div>
        <div className="relative border-y-[10px] border-r-[10px] border-primary rounded-r-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-r-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium"></div>
        </div>

        {/* page 5 and 6 */}
        <div className="relative border-y-[10px] border-l-[10px] border-primary rounded-l-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-l-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium"></div>
        </div>
        <div className="relative border-y-[10px] border-r-[10px] border-primary rounded-r-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-r-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium"></div>
        </div>

        {/* page 7 and 8 */}
        <div className="relative border-y-[10px] border-l-[10px] border-primary rounded-l-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          {/* Background Image */}
          <Image
            src="/bg-paper.png"
            alt="Background Paper"
            fill // Makes the image fill the parent container
            style={{ objectFit: "cover" }} // Ensures the image covers the entire area
            className="z-0 rounded-l-[25px]" // Places the image behind the content
          />

          {/* Page Content */}
          <div className="z-10 relative w-full h-full flex justify-center items-center text-[24px] font-playfair font-medium"></div>
        </div>
        <div className="relative bg-primary rounded-r-[25px] flex items-center justify-center text-black text-lg w-full h-full">
          
        </div>

        {/* Back Cover */}
        <div className="flex items-center justify-center bg-primary rounded-l-[25px] p-[25px]">
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
