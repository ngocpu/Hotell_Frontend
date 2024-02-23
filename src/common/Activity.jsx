import { ArrowLeft, ArrowRight, Link } from 'lucide-react';
import React from 'react'
import { activities } from '../constant';

export const Activity = () => {
  const truncateString = (string, num) =>{
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    }
    return string;
}
const slideLefft = () => {
    let sliderLeft = document.getElementById("slider-id");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
  };
  const slideRight = () => {
    let slideRight = document.getElementById("slider-id");
    slideRight.scrollLeft = slideRight.scrollLeft + 500;
  };
return (
<div className="w-full mt-[-515px]" id='act'>
  <div className="flex justify-between mx-4 mt-10">
    <h2 className="text-2xl text-[#242424] dark:text-[#fdfef9] ">
      Các hoạt động
    </h2>
    
  </div>
  <div className="relative flex items-center group mt-10">
    <ArrowLeft
      onClick={slideLefft}
      className="bg-white left-0 absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
      size={35}
    />
    <div
      id={"slider-id"}
      className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative px-2" style={{scrollbarWidth:'none'}}
    >
      {activities.map((item, id) => (
        <div className="w-[200px] sm:w-[200px] md:w-[280px] lg:w-[300px] inline-block cursor-poiter relative border-gray-300 dark:border-none dark:bg-[#171717] border mx-3 rounded-lg p-2 my-3 hover:scale-[1.015] hover:translate-y-[-5px] overflow-hidden transition-all duration-300" key={id}>
            <img src={item.img} alt="photo" className="object-cover w-full h-[225px] rounded-lg "/>
            
            <div className="flex flex-col gap-3 px-2 mt-3 dark:text-[#fefdf9] text-[#242422]">
                <h3 className="text-lg text-ellipsis truncate">{item.title}</h3>
                <p className="text-neutral-800 dark:text-[#fefdf9] text-wrap truncate">{truncateString(item.des, 150)}</p>
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
}
