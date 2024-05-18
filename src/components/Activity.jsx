import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { activities } from "../constant";

const Activity = () => {
  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    }
    return string;
  };

  const slideLeft = () => {
    let sliderLeft = document.getElementById("slider-id");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
  };

  const slideRight = () => {
    let slideRight = document.getElementById("slider-id");
    slideRight.scrollLeft = slideRight.scrollLeft + 500;
  };

  const [animateActivity, setAnimateActivity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideImg = document.querySelector("#img");
      if (slideImg) {
        const slideImgBottom = slideImg.offsetTop + slideImg.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= slideImgBottom && !animateActivity) {
          setAnimateActivity(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateActivity]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-[#252525] py-20" id="act" style={{fontFamily:"sans-serif"}}>
      <div className="flex justify-between mx-4">
        <h2 className="text-2xl text-[#fdfef9] dark:text-[#242424] ml-[20px]">
          Hoạt động của chúng tôi
        </h2>
      </div>
      <div className="relative flex items-center group mt-10">
        <ArrowLeft
          onClick={slideLeft}
          className="bg-white left-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
          size={35}
        />
        <div
          id={"slider-id"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative px-2"
          style={{ scrollbarWidth: "none" }}
        >
          {activities.map((item, id) => (
            <motion.div
              key={id}
              initial="hidden"
              animate={animateActivity ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: id * 0.6 }}
              className="w-[200px] sm:w-[200px] md:w-[280px] lg:w-[300px] inline-block cursor-pointer relative border-gray-300 mx-3 rounded-lg p-2 my-3 hover:scale-[1.015] hover:translate-y-[-5px] overflow-hidden transition-all duration-300"
            >
              <img
                src={item.img}
                alt="photo"
                className="object-cover w-full h-[225px] rounded-lg "
              />

              <div className="flex flex-col gap-3 px-2 mt-3 text-[#fefdf9] dark:text-[#242422]">
                <h3 className="text-lg text-ellipsis truncate">{item.title}</h3>
                <p className="dark:text-neutral-800 text-[#fefdf9] text-wrap truncate">
                  {truncateString(item.des, 150)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <ArrowRight
          onClick={slideRight}
          className="bg-white right-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
          size={35}
        />
      </div>
    </div>
  );
};

export default Activity;
