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

  const play = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 left-4 cursor-pointer z-50" onClick={play}>
      <div className="relative w-[20vw] h-[20vw] max-w-[321px] max-h-[321px] min-w-[150px] min-h-[150px]">
        {/* Record Player Base */}
        <Image
          alt="Record Player"
          src="/record-player.png"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full"
        />

        {/* Record Player Arm with Smooth Rotation */}
        <Image
          alt="Record Player Arm"
          src="/record-arm.png"
          height={0}
          width={0}
          sizes="100vw"
          className={`w-[33.33%] h-[38%] absolute z-10 transform transition-transform duration-300 ${
            isPlaying
              ? "rotate-[0deg] right-[12.5%] bottom-[12%]"
              : "rotate-[30deg] right-[4.5%] bottom-[16.5%]"
          }`}
        />

        {/* Record with Spinning Animation */}
        <Image
          alt="Record"
          src="/record.png"
          height={0}
          width={0}
          sizes="100vw"
          className={`w-[62.5%] h-[62.5%] absolute top-[9%] left-[6.5%] ${
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
