import React, { useRef, useState } from "react";
import {
  About,
  Activity,
  Banner,
  Footer,
  Restaurant,
  SlideImg,
} from "../components";
import { motion } from "framer-motion";
import Rooms from "./Rooms";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex items-center justify-center w-full h-[90%]   ">
        <Banner />
      </div>
      <div className="my-10 flex flex-wrap justify-center px-10 w-[85%] mx-auto">
        <About />
        <SlideImg />
        <Rooms />
        <Restaurant />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full"
        id="img"
      >
        <img
          src="https://images.unsplash.com/photo-1533002832-1721d16b4bb9?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="photo"
          className="w-full object-cover"
        />
      </motion.div>
      <Activity />
      <div className="my-10">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
