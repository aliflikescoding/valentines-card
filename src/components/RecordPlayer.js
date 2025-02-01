"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import data from "@/app/data";

// Create a singleton audio instance outside the component
let globalAudio = null;
if (typeof window !== "undefined") {
  globalAudio = new Audio(data.music ? data.musicLink : "");
  globalAudio.loop = true;
}

const RecordPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();

  // Effect to handle route changes
  useEffect(() => {
    // Don't stop the music on route changes
    return () => {
      if (globalAudio && isPlaying) {
        globalAudio.play();
      }
    };
  }, [pathname, isPlaying]);

  // Effect to sync audio state
  useEffect(() => {
    if (globalAudio) {
      if (isPlaying) {
        globalAudio.play().catch((error) => {
          console.log("Playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        globalAudio.pause();
      }
    }
  }, [isPlaying]);

  // Effect to handle spacebar key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default spacebar behavior (scrolling)
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const play = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className="visible-above-1048 fixed bottom-4 left-4 cursor-pointer z-50"
      onClick={play}
    >
      <div className="relative">
        {/* Record Player Base */}
        <Image
          alt="Record Player"
          src="/record-player.png"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[321px] h-[321px]"
        />

        {/* Record Player Arm with Smooth Rotation */}
        <Image
          alt="Record Player Arm"
          src="/record-arm.png"
          height={0}
          width={0}
          sizes="100vw"
          className={`w-[107px] h-[122px] absolute z-10 transform transition-transform duration-300 ${
            isPlaying
              ? "rotate-[0deg] right-[41px] bottom-[38px]"
              : "rotate-[30deg] right-[15px] bottom-[54px]"
          }`}
        />

        {/* Record with Spinning Animation */}
        <Image
          alt="Record"
          src="/record.png"
          height={0}
          width={0}
          sizes="100vw"
          className={`w-[201px] h-[201px] absolute top-[29px] left-[21px] ${
            isPlaying ? "animate-spin" : ""
          }`}
          style={{
            animationDuration: "3s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      </div>
    </div>
  );
};

export default RecordPlayer;
