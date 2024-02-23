import React from "react";
import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { RoomCarosel } from "../common/RoomCarosel";
import {  ArrowLeft, ArrowRight } from "lucide-react";
import { Restaurant } from "../common/Restaurant";
import { Activity } from "../common/Activity";
import { Footer } from "../components/Footer";

export const Home = () => {
  
  return (
    <div className="relative w-full h-full pt-16 ">
      <div className="flex items-center justify-center w-[95%] rounded-3xl h-[90%] mx-10 mt-10  ">
        <Banner />
      </div>
      <div className="my-10 flex flex-wrap justify-center px-10 w-[85%] mx-auto">
        <About />
        <RoomCarosel />
        <Restaurant />
        <img src="" alt="" />
        <Activity />
      </div>
      <div className="w-full py-3 px-3 rounded-xl dark:bg-[#171717]">
        <img src="https://images.unsplash.com/photo-1533002832-1721d16b4bb9?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" className="w-full object-cover rounded-lg" />

      </div>
      <Footer />
    </div>
  );
};
