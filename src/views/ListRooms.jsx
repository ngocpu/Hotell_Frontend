import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Room } from '@material-ui/icons';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Button,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { apiRequest } from "../apis/fetchApis";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
const ListRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [availableRooms, setAvailableRooms] = useState(0);

  const [sortBy, setSortBy] = useState("");
  const [currency, setCurrency] = useState("VDN");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await apiRequest("/api/v1/rooms", "GET", null, null);
        setRooms(response); // Đếm số phòng còn trống
        const availableCount = response.filter(
          (room) => room.status === "Available"
        ).length;
        setAvailableRooms(availableCount);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortRoomsByPrice(event.target.value);
  };
  const convertToUSD = (price) => {
    // Giả sử tỷ giá là 1 USD = 23000 VND
    const exchangeRate = 22000;
    return (price / exchangeRate).toFixed(2); // Làm tròn đến 2 chữ số thập phân
  };

  // Hàm xử lý thay đổi loại tiền tệ
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  // Hàm hiển thị giá phòng theo định dạng tiền tệ và chuyển đổi nếu cần
  const displayPrice = (price) => {
    if (currency === "USD") {
      return `${convertToUSD(price)} USD`; // Chuyển đổi sang USD nếu loại tiền tệ là USD
    } else {
      return `${price.toLocaleString()} VND`; // Hiển thị giá theo VND nếu loại tiền tệ là VND
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const renderRooms = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const startIdx = (page - 1) * rowsPerPage;
    const endIdx = page * rowsPerPage;
    return rooms.slice(startIdx, endIdx).map((room, index) => (
      <motion.div
        key={index}
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-[80%] mx-auto"
      >
        {/* <h1 className='text-4xl font-semibold'>Phòng và trải nghiệm</h1>
        <h4>Phòng còn trống: {availableRooms}</h4> */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Grid item xs={12} sm={7}>
            <Slider {...settings} className="relative rounded-md">
              {room.imgs.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={room.title} className="w-full md:h-[400px] rounded-md hover:scale-105 transition-all duration-200 overflow-hidden" />
                </div>
              ))}
            </Slider>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="flex flex-col gap-5 h-[80%] mb-8">
              <h2 className="text-3xl ">{room.title}</h2>
              <p className="text-gray-500 font-sans">{room.desc}</p>
              <p className="text-neutral-800 font-sans">
                Số người tối đa: {room.maxPeople}
              </p>
            <div className="flex justify-between px-1">
                <p className="text-neutral-800 font-sans">Mức giá chỉ với</p>
                <p className="font-sans font-semibold text-xl">{displayPrice(room.price)}</p>
            </div>
              <button className="w-[100%] text-center bg-[#ac6433] rounded-md py-3 hover:opacity-60 transition font-sans text-white mt-10 ">
                Đặt ngay
              </button>
            </div>
          </Grid>
        </Grid>
      </motion.div>
    ));
  };

  const sortRoomsByPrice = (order) => {
    const sortedRooms = [...rooms].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setRooms(sortedRooms);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto flex flex-col gap-5">
        <Link
          to={"/"}
          className="flex gap-2 mt-20 text-gray-600 text-lg items-center font-sans"
        >
          <ArrowLeft size={18} />
          Trang chủ
        </Link>
        <h1 className=" text-8xl"> Phòng và Trải Ngiệm </h1>
      </div>
      {/* Dropdown sắp xếp */}
      <div className="flex justify-between items-center w-[80%] mx-auto mt-20 mb-10">
        <h2 className="text-xl font-medium font-sans text-gray-700">
          {" "}
          Phòng còn trống: {availableRooms}
        </h2>
        <div className="flex h-8 justify-center items-center gap-3">
          <Select
            value={sortBy}
            onChange={handleSortChange}
            variant="outlined"
            displayEmpty
            sx={{ height: "40px" }}
          >
            <MenuItem value="" disabled>
              Sắp xếp theo giá
            </MenuItem>
            <MenuItem value="asc">Thấp đến cao</MenuItem>
            <MenuItem value="desc">Cao xuống thấp</MenuItem>
          </Select>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            variant="outlined"
            displayEmpty
            sx={{ height: "40px" }}
          >
            <MenuItem value="VDN">VNĐ</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </div>
      </div>

      {/* Danh sách phòng */}
      <div>{renderRooms()}</div>
      <div className="flex w-full justify-center items-center mt-10">
        <Pagination
          count={Math.ceil(rooms.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
        />

        {/* Ô chọn số hàng mỗi trang */}
        <Select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          variant="outlined"
          displayEmpty
          sx={{height:"30px"}}
        >
          <MenuItem value={5}>5 rows per page</MenuItem>
          <MenuItem value={10}>10 rows per page</MenuItem>
          <MenuItem value={20}>20 rows per page</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default ListRooms;
