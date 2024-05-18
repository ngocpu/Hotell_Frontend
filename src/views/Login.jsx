import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../state/Slice/authSlice";
import { apiRequest } from "../apis/fetchApis";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMess, setSuccessMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    dispatch(loginStart())
    e.preventDefault();
    try{
      const newUser = {
        email: email,
        password: password
      }
      const res = await apiRequest("/api/v1/auth/login", "POST", newUser, null)
      dispatch(loginSuccess(res))
      setSuccessMessage(`Chào mừng đến với Home Hotel`)
      const prevPath = localStorage.getItem("prevPath")
      if(prevPath){
        navigate(prevPath)
        localStorage.removeItem("prevPath")
      }  else navigate("/")
    } catch(err) {
      setErrorMessage(err.message)
      dispatch(loginFailed())
    }
    // Thực hiện xử lý đăng nhập tại đây
    // Đoạn mã xử lý đăng nhập sẽ được thêm vào sau
  };

  return (
    <div className="relative">
      <div className="absolute top-0 h-screen bg-gray-100 w-full z-10 flex items-center dark:bg-[#131312]">
        <div className="w-1/2">
          <div className="flex flex-col items-center my-4">
            <Link to={"/"}>
              {/* Your logo here */}
            </Link>
          </div>
          <div className="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-[#fdfef9]">
              Đăng nhập
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Nice to meet you! Enter your details to login.
            </p>
            <form
              className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6 mb-1">
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </div>
              
              <button
                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Đăng nhập
              </button>
              <p className="block dark:text-gray-600 mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Bạn chưa có tài khoản ư?
                <Link
                  to={"/register"}
                  className="font-medium text-gray-900 dark:text-[#fdfef9]"
                >
                  Đăng ký tại đây!
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={'https://dam.melia.com/melia/accounts/f8/4000018/projects/119/assets/5b/75779/aada12177506071e103be564a3ab0927-1642515219.jpg?im=RegionOfInterestCrop=(1020,1530),regionOfInterest=(2732.0,4096.0)'}
            alt=""
            className="hidden xl:block h-screen w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
