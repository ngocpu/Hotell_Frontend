import React from "react";
import { MapPin, Sparkles } from "lucide-react";
import background from "../assets/bc1.jpg";
import { Search } from "./Search";
export const Banner = () => {
  return (
    <div className="relative w-full h-[90%] ">
      <img
        src={background}
        alt="bc"
        className="w-full h-[630px] object-cover rounded-3xl"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto  w-[80%] h-[75%] flex flex-col gap-3">
        <div className="flex flex-col gap-20 items-center text-neutral-600 ">
          <div className="flex gap-2 justify-center items-center mt-10">
            <MapPin size={30} />
            <span>NHA TRANG CITY, KHANH HOA PROVINCE, VIỆT NAM</span>
          </div>
          <h1 className="text-7xl font-serif text-neutral-600">
            Gran Meliá Nha Trang
          </h1>
        </div>
        <div className="flex gap-5 justify-center items-center mt-8">
          <Sparkles size={24} color="white"/>
          <Sparkles size={24} color="white"/>
          <Sparkles size={24} color="white"/>
          <Sparkles size={24} color="white"/>
          <Sparkles size={24} color="white"/>
        </div>
        <Search />
      </div>
    </div>
  );
};
