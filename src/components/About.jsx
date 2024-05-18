import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChefHat,
  Gem,
  HandHeart,
  HandHelping,
  Umbrella,
  Users,
} from "lucide-react";
// import { Paper, Grid, Typography, Slider, Slide } from "@mui/material";
import { overall } from "../constant";
import { motion, useAnimation } from "framer-motion";
import SlideImg from "./SlideImg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controlsTitle = useAnimation();
  const controlsText = useAnimation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isVisible) {
      controlsTitle.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.5 },
      });
      controlsText.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [isVisible, controlsTitle, controlsText]);

  return (
    <section id="about">
      <div className="flex flex-col justify-center items-center gap-y-10 mx-auto">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsTitle}
        >
          Về chúng tôi
        </motion.h1>
        <div className="w-[70%] flex flex-col gap-y-24 justify-center items-center">
          <motion.h1
            className="text-center text-neutral-800 dark:text-white font-title text-[50px]"
            initial={{ opacity: 0, y: 50 }}
            animate={controlsTitle}
          >
            Thiên đường ven biển - sự hòa quyện giữa vẻ đẹp Địa Trung Hải và nét
            quyết rũ mang hồn Việt
          </motion.h1>
          <motion.p
            className="text-neutral-800 dark:text-white text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={controlsText}
            style={{fontFamily:"sans-serif"}}
          >
            Nép mình bên đường bờ biển tuyệt đẹp của Việt Nam, Gran Meliá Nha
            Trang nổi lên như một chuẩn xa hoa mới. Với phương châm “một cuộc
            đời đáng sống” của người Tây Ban Nha cùng lòng hiếu khách của người
            Việt, chúng tôi hứa hẹn mang đến những trải nghiệm khó quên, từ
            những hành trình đậm dấu ấn văn hóa bản địa cho đến những đặc quyền
            xa hoa ngay bên trong khu nghỉ dưỡng.
          </motion.p>
        </div>
        <button className="text-[#ca9e80] underline transition-all hover:translate-y-[-2px]">
          Tìm hiểu thêm
        </button>
      </div>
      <div className="flex justify-center items-center gap-[2rem] mt-10" style={{fontFamily:"sans-serif"}}>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <Gem color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white">Sang trọng</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <ChefHat color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white">Ẩm thực</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <Umbrella color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white">Bãi biển</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <Users color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white">Gia đình</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <HandHeart color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white">Lãng mạn</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 md:w-full px-6 py-6 rounded-xl dark:bg-[#171717]">
          <HandHelping color="#ca9e80" size={40} strokeWidth={1} />
          <h3 className="dark:text-white"> Bền vững</h3>
        </div>
      </div>
      <div className="my-10 flex flex-wrap gap-y-3 gap-x-3 justify-center px-10 mx-auto" style={{fontFamily:"sans-serif"}}>
        {overall.map((item) => (
          <div
            className="flex flex-col gap-3 px-5 py-4 items-start justify-start w-[28%] rounded-xl dark:bg-[#171717]"
            key={item.title}
          >
            <h3 className="font-semibold dark:text-white">{item.title}</h3>
            <p className="dark:text-white">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
