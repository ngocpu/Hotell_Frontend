import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, TextField, Button } from "@mui/material";
import { apiRequest } from "../apis/fetchApis";

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('') 

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()
  const handleRegistration = async(e) => {
    e.preventDefault();
    try{
      const formdata = {
        username: username,
        email:email,
        password:password
      }

      await apiRequest("/api/v1/auth/register", "POST", formdata, null)
      setSuccessMessage("Tạo người dùng thành công!")
      navigate("/login")
    } catch (err){
      setErrorMessage(err.message)
    }// Add registration logic here
  };

  return (
    <div className="relative">
      <div className="absolute top-0 h-screen bg-gray-100 w-full z-10 flex items-center dark:bg-[#131312]">
        <div className="w-1/2">
          <div className="flex flex-col items-center my-4">
            <Link to={"/"}>
              {/* Your SVG or image */}
            </Link>
          </div>
          <div className="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            {errorMessage && (
              <Alert className="alert alert-danger" color="red">{errorMessage}</Alert>
            )}
            {successMessage && (
              <Alert className="alert alert-success" color="green">{successMessage}</Alert>
            )}
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-[#fdfef9] text-blue-gray-900">
              Đăng ký
            </h4>
            <form onSubmit={handleRegistration} className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
              <TextField
                label="Tên người dùng"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Mật khẩu"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
             <button
                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Đăng ký
              </button>
              <p className="block dark:text-gray-600 mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Bạn đã có tài khoản rồi ư ?
                <Link
                  to={"/login"}
                  className="font-medium text-gray-900 dark:text-[#fdfef9]"
                >
                  Đăng nhập tại đây!
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src='https://dam.melia.com/melia/accounts/f8/4000018/projects/119/assets/5b/75779/aada12177506071e103be564a3ab0927-1642515219.jpg?im=RegionOfInterestCrop=(1020,1530),regionOfInterest=(2732.0,4096.0)'
            alt=""
            className="hidden xl:block h-screen w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
