import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IconButton, Button } from "@mui/material";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { restaurant } from "../constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Restaurant = () => {
  const sliderRef = useRef(null);
  const [animateRestaurant, setAnimateRestaurant] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rooms = document.querySelector("#rooms");
      if (rooms) {
        const roomsBottom = rooms.offsetTop + rooms.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= roomsBottom && !animateRestaurant) {
          setAnimateRestaurant(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateRestaurant]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full" id="res">
      <div className="flex justify-between mx-4 mt-10">
        <h2 className="text-2xl text-[#242424] dark:text-[#fdfef9] " style={{fontFamily:"sans-serif"}}>
          Ẩm thực
        </h2>
        <Link
          to={"/all-rooms"}
          className="flex gap-2 dark:text-[#fdfef8] font-semibold"
        >
        </Link>
      </div>
      <div className="relative mt-10" style={{ height: "450px" }}>
        <Slider ref={sliderRef} {...settings}>
          {restaurant.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={animateRestaurant ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="w-full h-[450px] md:h-[400px] lg:h-[450px] xl:h-[450px] bg-gray-200 dark:bg-[#333333] flex items-center justify-center"
            >
              <div className="flex w-full max-w-[1200px] md:mx-5">
                <div className="w-1/2">
                  <img
                    src={item.img}
                    alt="photo"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center w-1/2 px-5 py-10">
                  <h2 className="text-4xl text-[#242422] dark:text-[#fefdf9] mb-5">
                    {item.name}
                  </h2>
                  <p className="text-base text-gray-500 dark:text-[#fefdf9] mb-8" style={{fontFamily:"sans-serif"}}>
                    {item.des}
                  </p>
                  <div className="flex gap-5 items-center" style={{fontFamily:"sans-serif"}}>
                    <Button
                      variant="outlined"
                      size="lg"
                      sx={{border:"1px solid #242424", color:"#242424"}}
                      className="px-5 py-3 dark:border-[#fefdf9] dark:text-[#fefdf8]"
                    >
                      Tìm hiểu thêm 
                    </Button>
                    <Button
                      variant="filled"
                      size="lg"
                      sx={{backgroundColor:"#ac6433", color:"#fff"}}
                      className="text-white px-5 py-3"
                    >
                      Đặt Bàn
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <IconButton
            onClick={goToPrevSlide}
            className="bg-white dark:bg-[#242424] dark:text-[#fefdf9] text-[#242422]"
          >
            <ArrowLeft />
          </IconButton>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <IconButton
            onClick={goToNextSlide}
            className="bg-white dark:bg-[#242424] dark:text-[#fefdf9] text-[#242422]"
          >
            <ArrowRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
