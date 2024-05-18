import { Circle, MoonIcon, MoonStar, SunIcon } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../state/Slice/themeSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar, Button, MenuItem, Popover } from "@mui/material";
import {
  loginSuccess,
  logoutFailed,
  logoutStart,
} from "../state/Slice/authSlice";
import { apiRequest } from "../apis/fetchApis";

const Navbar = ({ navbarStyle }) => {
  const user = useSelector((state) => state.user.userInfo);
  const accesToken = user?.accessToken
  const distpatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = async () => {
    distpatch(logoutStart());
    try {
      await apiRequest("/api/v1/auth/logout", "POST", null, accesToken);
      distpatch(loginSuccess());
      window.location.reload();
      setAnchorEl(null)
    } catch (err) {
      console.log(err.message);
      distpatch(logoutFailed());
    }
  };
  return (
    <motion.nav
      id="nav"
      className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-transparent z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={navbarStyle}
    >
      <div className="flex items-center justify-start">
        <Link to="/" className="text-2xl font-semibold ">
          H.O.M.E
        </Link>
      </div>
      {/* Logo */}
      {/* Các thành phần còn lại */}
      <div
        className="flex-grow hidden md:flex items-center gap-5 justify-end font-light"
        style={{ fontFamily: "sans-serif" }}
      >
        <a
          href="#about"
          className="px-1  hover:cursor-pointer transition-all hover:translate-y-[-2px] "
        >
          Tổng quát
        </a>
        <a
          href="#rooms"
          className="px-1  hover:cursor-pointer transition-all hover:translate-y-[-2px] "
        >
          Nơi lưu trú
        </a>
        <a
          href="#res"
          className="px-1  hover:cursor-pointer transition-all hover:translate-y-[-2px] "
        >
          Ẩm thực
        </a>
        <a
          href="#act"
          className="px-1  hover:cursor-pointer transition-all hover:translate-y-[-2px] "
        >
          Hoạt động
        </a>
        {/* <button
          onClick={() => dispatch(toogleTheme())}
          className="py-2 px-2 hover:cursor-pointer rounded-full hover:bg-neutral-400 flex items-center"
        >
          {theme === "light" ? <MoonIcon size={24} color="#fff" /> : <SunIcon size={24} color="#fff" />}
        </button> */}
        {user ? (
          <div className="flex justify-center items-center gap-2">
            {/* <UserAvatar name={user?.username} /> */}
            <Avatar onClick={handleClick}>{user?.username.charAt(0)}</Avatar>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleClose}>Quản lý tài khoản</MenuItem>
              <MenuItem onClick={handleClose}>Booking của tôi</MenuItem>
              <MenuItem>
                <Button variant="outlined" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </MenuItem>
            </Popover>
            {/* <button
              className="px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition"
              onClick={handleLogout}
            >
              Đăng xuất
            </button> */}
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2">
              <Link
                to="/login"
                className="md:px-8 py-2 border border-gray-500 rounded-xl   dark:border-white transition-all hover:bg-neutral-800  hover:translate-y-[-2px] "
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="md:px-8 py-2  rounded-xl  transition-all  border border-gray-500 hover:bg-neutral-800  hover:translate-y-[-2px] "
              >
                Đăng ký
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Phần đăng nhập và chuyển đổi chủ đề */}
    </motion.nav>
  );
};
export default Navbar;
