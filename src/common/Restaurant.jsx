import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { restaurant } from "../constant";
import { Button, Carousel, IconButton } from "@material-tailwind/react";
import { useTheme } from "../hooks/useTheme";

export const Restaurant = () => {
    const[activeTheme ,setTheme] = useTheme()
  return (
    <div className="w-full" id="res">
      <div className="flex justify-between mx-4 mt-10">
        <h2 className="text-2xl text-[#242424] dark:text-[#fdfef9] ">
          Am thuc
        </h2>
        <Link
          to={"/all-rooms"}
          className="flex gap-2 dark:text-[#fdfef8] font-semibold"
        >
          <p>Xem tat ca cac nha hang va quan bar</p>
        </Link>
      </div>
      <div className="relative flex items-center group mt-10 h-[45%] overflow-hidden">
        <Carousel
            className="overflow-hidden h-full "
            prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color={`${activeTheme=='light' ? "#131323": "#fff"}`}
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
        >
          {restaurant.map((item, id) => (
            <div
              className="flex w-full relative rounded-lg "
              key={id}
            >
              <div className="flex flex-col gap-6 w-1/2 px-2 mt-3 mx-5  dark:text-[#fefdf9] text-[#242422]">
                <h2 className="text-6xl font-serif " style={{fontSize:'calc(28px - (360px * .0243589744) + (100 * .0243589744vw));'}}>{item.name}</h2>
                <p className="text-neutral-800 dark:text-[#fefdf9] text-gray-500 text-wrap truncate my-5">
                  {item.des}
                </p>
                <div className="flex gap-5 items-center">
                    <Button variant="outlined" size="lg" className="px-5 py-3 dark:text-[#fdfef8] border-white">Tim hieu them</Button>
                    <Button variant="fill" size="lg" className="bg-[#ac6433] text-white px-5 py-3" >Dat phong</Button>
                </div>
              </div>
              <div className="w-1/2">
                <img
                  src={item.img}
                  alt="photo"
                  className="w-full h-[40%] object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
