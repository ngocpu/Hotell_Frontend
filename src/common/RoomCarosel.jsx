import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { hotels } from "../constant";

export const RoomCarosel = () => {
    const truncateString = (string, num) =>{
        if (string?.length > num) {
          return string.slice(0, num) + "...";
        }
        return string;
    }
    const slideLefft = () => {
        let sliderLeft = document.getElementById("slider");
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
      };
      const slideRight = () => {
        let slideRight = document.getElementById("slider");
        slideRight.scrollLeft = slideRight.scrollLeft + 500;
      };
  return (
    <div className="w-full" id="room">
      <div className="flex justify-between mx-4 mt-10">
        <h2 className="text-2xl text-[#242424] dark:text-[#fdfef9] ">
          Dâu là lựa chọn phù hợp nhất với bạn?
        </h2>
        <Link to={"/all-rooms"} className="flex gap-2 dark:text-[#fdfef8] font-semibold">
          <p>Xem tat ca cac phong</p>
          <ArrowRight />
        </Link>
      </div>
      <div className="relative flex items-center group mt-10">
        <ArrowLeft
          onClick={slideLefft}
          className="bg-white left-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
          size={35}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative px-2" style={{scrollbarWidth:'none'}}
        >
          {hotels.map((item, id) => (
            <div className="w-[200px] sm:w-[200px] md:w-[280px] lg:w-[300px] inline-block cursor-poiter relative border-gray-300 dark:border-none dark:bg-[#171717] border mx-3 rounded-lg p-2 my-3 hover:scale-[1.015] hover:translate-y-[-5px] overflow-hidden transition-all duration-300" key={id}>
                <img src={item.img} alt="photo" className="object-cover w-full rounded-lg "/>
                <div className="flex flex-col gap-3 px-2 mt-3 dark:text-[#fefdf9] text-[#242422]">
                    <h3 className="text-lg text-ellipsis truncate">{item.title}</h3>
                    <div className="flex justify-between gap-5 items-center truncate">
                        <p className="text-[#ac6433]">Giá :{item.price}/ngày</p>
                        <span className="text-gray-400 text-ellipsis">{item.type}</span>
                    </div>
                    <p className="text-neutral-800 dark:text-[#fefdf9] text-wrap truncate">{truncateString(item.des, 80)}</p>
                    <div className="flex justify-between items-center my-5 ">
                        <Link to={'/room-detail'} className="px-4 p-2 border border-gray-400 rounded-md hover:cursor-pointer hover:translate-y-[-3px] transition-all duration-200 dark:text-[#fefdf9]">Chi Tiet</Link>
                        <button className="px-4 py-2 rounded-md bg-[#ac6433] text-[#fefdf9] hover:cursor-pointer hover:translate-y-[-5px] transition-all duration-200">Dat ngay</button>
                    </div>
                </div>
                
            </div>
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
