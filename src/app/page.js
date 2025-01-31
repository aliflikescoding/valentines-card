"use client";

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

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
        <div className="flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
          Front Cover
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
