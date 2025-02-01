"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import data from "@/app/data";

const RecordPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const play = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 left-4 cursor-pointer" onClick={play}>
      <audio ref={audioRef} src={data.music ? data.musicLink : ""} loop />
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
