import React, { useEffect, useState } from "react";
import { MapPin, Sparkles } from "lucide-react";
import background from "../assets/bc1.jpg";
import Search from "./Search";
import { color, motion } from "framer-motion";
import Navbar from "./Navbar";
const Banner = () => {
  const [navbarStyle, setNavbarStyle] = useState({ backgroundColor: "transparent", color: "white" });

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      const navbar = document.querySelector("nav");
      if (banner && navbar) {
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        const scrollPosition = window.scrollY + navbar.offsetHeight;
        if (scrollPosition >= bannerBottom) {
          setNavbarStyle({ backgroundColor: "white", color: "black" ,":hover":{color:"white"}});
        } else {
          setNavbarStyle({ backgroundColor: "transparent", color: "white" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      id="banner"
      className="relative w-full h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={"https://dam.melia.com/melia/file/1JBcCYQrH3JyGUbCLhCU.JPG?im=RegionOfInterestCrop=(1600,1200),regionOfInterest=(3656.487953,3435.120704) 1600w"}
        alt="bc"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-full p-10">
        <Navbar navbarStyle={navbarStyle} />
        <motion.div
          className="flex flex-col items-center text-white mt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex gap-2 justify-center items-center">
            <MapPin size={30} />
            <span>NHA TRANG CITY, KHANH HOA PROVINCE, VIỆT NAM</span>
          </div>
          <h1 className="text-7xl">Gran Meliá Nha Trang</h1>
        </motion.div>
        <motion.div
          className="flex gap-5 justify-center items-center mt-8 mb-44 "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Sparkles size={24} color="white" />
          <Sparkles size={24} color="white" />
          <Sparkles size={24} color="white" />
          <Sparkles size={24} color="white" />
          <Sparkles size={24} color="white" />
        </motion.div>
        <Search />
      </div>
    </motion.div>
  );
};
export default Banner;
