import { Alert, Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../apis/fetchApis";
import { motion } from "framer-motion";

const Rooms = () => {
  const [roomsData, setRoomsData] = useState([]);
  const [animateRooms, setAnimateRooms] = useState(false);
  const searchRef = useRef()
  const getData = async () => {
    try {
      const res = await apiRequest("/api/v1/rooms", "GET", null, null);
      console.log(res);
      const viewRooms = res.slice(0, 5);
      setRoomsData(viewRooms);
    } catch (err) {
      <Alert severity="error">{err.message}</Alert>;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const slideImg = document.querySelector("#slideImg");
      if (slideImg) {
        const slideImgBottom = slideImg.offsetTop + slideImg.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= slideImgBottom && !animateRooms) {
          setAnimateRooms(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateRooms]);

  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    }
    return string;
  };
  const handleBookRoom = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="sm:mt-5 lg:mt-[300px]"
      initial={{ opacity: 0, x: -50 }}
      animate={animateRooms ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="rooms"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="flex justify-between px-2 items-center mb-5">
        <motion.h1
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={animateRooms ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Đâu sẽ là sự chọn phù hợp với bạn?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={animateRooms ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to={"/all-rooms"}>
            <Button
              sx={{ color: "#242424", fontSize: "11px" }}
              startIcon={<ArrowRight />}
            >
              Xem tất cả các phòng
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {roomsData.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={animateRooms ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.5 }}
            className="bg-white shadow-xl transition-all rounded-lg p-4 w-full cursor-poiter"
            style={{ gridColumnEnd: index < 3 ? "span 2" : "span 3" }}
          >
            <img
              src={room.imgs[0]}
              alt={`Room ${room._id}`}
              className="w-full h-48 object-cover mb-4 rounded-md transition-all duration-300 hover:scale-105 overflow-hidden"
            />
            <h3 className="text-lg font-semibold mb-2 h-[65px]">
              {room.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {truncateString(room.desc, 100)}
            </p>
            <p className="text-sm text-gray-500 mb-2 mt-3">
              Sức chứa: {room.maxPeople} người
            </p>
            <a href="#s" className="bg-[#ac6433]  text-white px-4 py-2 rounded-md my-2" onClick={handleBookRoom}>
              Đặt ngay
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Rooms;
