import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import logo from "../assets/logo.jpg";
import { useTheme } from "../hooks/useTheme";
import { Alert } from "@material-tailwind/react";

export const Login = () => {
  const [activeTheme, setTheme] = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectUrl = location.state?.path || "/";

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(login);
    if (success) {
      const token = success.token;
      auth.handleLogin(token);
      navigate(redirectUrl, { replace: true });
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 h-screen bg-gray-300 w-full z-10 flex items-center dark:bg-[#131312]">
        <div className="w-1/2">
          <div className="flex flex-col items-center my-4">
            {errorMessage && (
              <Alert className="text-red-900" color="red">{errorMessage}</Alert>
            )}
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="45"
                viewBox="54.00001525878906 26.49370002746582 191.99998474121094 55.53376770019531"
                fill="none"
                class="injected-svg"
                data-src="https://dam.melia.com/melia/accounts/f8/4000018/projects/153/assets/db/78717/1fe7b07943fa3e61ffdeccfe9872ef08-1643619355.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                role="img"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M238.795 31.8483L238.795 31.8482C238.939 31.8063 239.058 31.7718 239.141 31.7408C239.428 31.6335 239.762 31.5558 240.123 31.4718C240.834 31.3062 241.65 31.1162 242.42 30.6272C243.276 30.0865 244.58 29.1484 244.638 26.4937L244.64 32.1047C244.64 34.2119 242.167 35.0125 241.006 35.321C240.256 35.5162 237.645 36.1019 237.645 36.1019C236.506 36.3445 235.542 37.6973 235.542 39.0374V35.1246C235.542 32.7953 237.789 32.1411 238.795 31.8483ZM83.698 53.3769L90.1905 62.3567H93.6338L86.8611 53.2094C90.0521 52.2921 91.9546 50.1514 91.8999 47.0935C91.7592 42.4216 88.0914 41.3657 84.4527 41.3657H79.8081V62.3567H82.7747V53.3769H83.698ZM82.7749 43.811H84.2576C86.5264 43.811 88.8476 44.3679 88.9592 47.1763C89.0708 49.8449 86.3869 51.0406 83.8948 51.0406H82.7749V43.811ZM114.597 62.3564L112.052 56.9348H102.927L100.491 62.3564H97.4688L107.32 40.5591L117.706 62.3564H114.597ZM107.319 47.0361L103.961 54.5996H110.931L107.319 47.0361ZM125.401 62.3564V47.3704L141.241 62.9686V41.3654H138.387V56.1838L122.489 40.6699V62.3564H125.401ZM178.018 62.3564L175.329 49.1772L168.838 63.1627L162.29 49.622L159.517 62.3564H156.664L161.17 40.6965L168.81 56.8805L176.34 40.6699L180.873 62.3564H178.018ZM186.19 41.3657L186.248 62.3567H197.358V59.5772H189.017V51.986H197.246V49.5114H189.017V44.1453H197.358V41.3657H186.19ZM202.535 62.3567V41.3657H205.389V59.5772H211.8V62.3567H202.535ZM89.3956 81.7917V72.4087H91.9726V71.3101H85.7441V72.4087H88.235V81.7917H89.3956ZM99.3598 72.4087V75.4944H103.46V76.5364H99.3028V80.6942H103.572V81.7917H98.1411V71.3101H103.601V72.4087H99.3598ZM162.753 77.1764L165.943 81.7917H167.357L164.014 77.0782C165.51 76.9546 166.645 76.1067 166.685 74.2571C166.742 72.0748 165.103 71.3101 163.272 71.3101H161.268V81.7917H162.43V77.1764H162.753ZM162.459 72.4087H163.385C164.505 72.4087 165.51 72.7564 165.51 74.2571C165.496 75.536 164.349 76.2037 163.214 76.2037H162.459V72.4087ZM218.394 81.7917L215.202 77.1764H214.881V81.7917H213.718V71.3101H215.719C217.552 71.3101 219.19 72.0748 219.136 74.2571C219.093 76.1067 217.959 76.9546 216.461 77.0782L219.806 81.7917H218.394ZM215.832 72.4087H214.908V76.2037H215.665C216.797 76.2037 217.944 75.536 217.959 74.2571C217.959 72.7564 216.951 72.4087 215.832 72.4087ZM228.008 81.7917V72.4087H230.581V71.3101H224.354V72.4087H226.845V81.7917H228.008ZM239.623 82.0005C238.082 82.0005 236.851 81.0416 236.458 79.5548L236.39 79.2475L237.467 78.9425L237.591 79.2891C237.931 80.2214 238.6 80.8614 239.58 80.8741C240.713 80.888 241.734 79.9857 241.72 78.8721C241.707 78.0657 241.329 77.4534 240.616 77.1207L238.95 76.3559C237.802 75.828 236.933 75.0493 236.933 73.7855C236.922 72.2698 238.279 71.1434 239.804 71.1018C240.966 71.088 241.764 71.6021 242.421 72.5621L242.549 72.7284L241.637 73.3257L241.386 72.9918C240.98 72.4362 240.475 72.1577 239.792 72.2005C238.895 72.2282 238.067 72.8809 238.082 73.7705C238.097 74.5075 238.586 74.9523 239.244 75.2584L241.007 76.0648C242.156 76.5789 242.828 77.4118 242.911 78.6503C243.023 80.4582 241.457 82.0155 239.623 82.0005ZM174.704 75.4944V72.4087H178.943V71.3101H173.487V81.7917H178.915V80.6942H174.646V76.5365H178.804V75.4944H174.704ZM187.704 82.0005C186.166 82.0005 184.933 81.0416 184.541 79.5548L184.471 79.2475L185.548 78.9425L185.675 79.2891C186.011 80.2214 186.682 80.8614 187.663 80.8741C188.795 80.888 189.816 79.9857 189.803 78.8721C189.788 78.0657 189.41 77.4534 188.697 77.1207L187.032 76.3559C185.886 75.828 185.018 75.0493 185.018 73.7855C185.004 72.2698 186.361 71.1434 187.887 71.1018C189.046 71.088 189.845 71.6021 190.504 72.5621L190.63 72.7284L189.718 73.3257L189.468 72.9918C189.061 72.4362 188.556 72.1577 187.873 72.2005C186.977 72.2282 186.152 72.8809 186.166 73.7705C186.178 74.5075 186.667 74.9523 187.326 75.2584L189.089 76.0648C190.238 76.5789 190.91 77.4118 190.993 78.6503C191.106 80.4582 189.538 82.0155 187.704 82.0005ZM196.925 76.5642C196.913 79.554 199.375 82.0146 202.37 82.0274C205.378 82.0424 207.883 79.554 207.869 76.5642C207.856 73.6044 205.364 71.1714 202.37 71.1841C199.388 71.1992 196.939 73.6044 196.925 76.5642ZM198.087 76.5642C198.102 74.2433 199.962 72.3383 202.287 72.2828C204.749 72.2285 206.679 74.174 206.706 76.5365C206.751 78.914 204.764 80.9438 202.37 80.9311C199.99 80.9161 198.059 78.9279 198.087 76.5642ZM109.449 81.7917V71.3101H110.623V80.6942H113.465V81.7917H109.449ZM119.146 79.5548C119.539 81.0416 120.769 82.0005 122.31 82.0005C124.144 82.0155 125.712 80.4582 125.599 78.6503C125.516 77.4118 124.844 76.5789 123.695 76.0648L121.932 75.2584C121.274 74.9523 120.785 74.5075 120.769 73.7705C120.756 72.8809 121.583 72.2282 122.479 72.2005C123.163 72.1577 123.667 72.4362 124.074 72.9918L124.326 73.3257L125.236 72.7284L125.111 72.5621C124.451 71.6021 123.652 71.088 122.493 71.1018C120.968 71.1434 119.61 72.2698 119.622 73.7855C119.622 75.0493 120.493 75.828 121.64 76.3559L123.303 77.1207C124.016 77.4534 124.397 78.0657 124.409 78.8721C124.423 79.9857 123.401 80.888 122.27 80.8741C121.288 80.8614 120.618 80.2214 120.281 79.2891L120.154 78.9425L119.079 79.2475L119.146 79.5548ZM146.506 81.7918L145.372 80.3732L144.798 80.8052C143.863 81.5423 143.063 82.0148 141.958 81.972C140.348 81.9304 139.02 80.7775 138.991 79.0955C138.963 77.8582 139.733 76.8566 140.895 76.1068L141.69 75.5927L141.468 75.2866C140.964 74.6188 140.643 74.1325 140.643 73.3122C140.658 72.1015 141.594 71.1427 142.896 71.13C144.21 71.13 145.133 72.0472 145.175 73.2429C145.205 74.1325 144.657 74.7436 143.915 75.327L143.3 75.7868L145.485 78.623L146.686 77.2886L147.499 77.9691L146.212 79.4986L147.976 81.7918H146.506ZM142.278 76.398L141.425 76.9549C140.629 77.4967 140.083 78.3574 140.111 79.0401C140.166 79.9562 140.699 80.639 141.58 80.8885C142.153 81.0549 143.063 80.7926 143.721 80.2485L144.671 79.471L142.278 76.398ZM142.867 72.1303C142.252 72.143 141.803 72.6444 141.763 73.2694C141.749 73.6599 141.874 73.9094 142.113 74.2294L142.643 74.9665L143.357 74.4235C143.818 74.0769 144.112 73.6737 144.042 73.0903C143.959 72.4226 143.455 72.1014 142.867 72.1303ZM220.953 62.3564H218.07V41.3643H220.953V62.3564ZM242.896 62.3564L240.35 56.9348H231.222L228.788 62.3564H225.766L235.619 40.5591L246 62.3564H242.896ZM235.619 47.0361L232.259 54.5996H239.23L235.619 47.0361ZM63.0826 76.6901V81.7917H64.2432V71.3101H63.0547V75.5926H57.667V71.3101H56.5181V81.7917H57.724V76.6901H63.0826ZM75.6355 82.0274C72.641 82.0146 70.1792 79.554 70.1919 76.5642C70.2071 73.6044 72.655 71.1992 75.6355 71.1841C78.6299 71.1714 81.1209 73.6044 81.136 76.5642C81.1488 79.554 78.6439 82.0424 75.6355 82.0274ZM75.5519 72.2828C73.2296 72.3383 71.3666 74.2433 71.3538 76.5642C71.3259 78.9279 73.2563 80.9161 75.6356 80.9311C78.0289 80.9438 80.0162 78.914 79.9744 76.5365C79.9465 74.174 78.0137 72.2285 75.5519 72.2828ZM54.0028 52.2082C54.1156 58.0203 58.8451 62.9405 64.6386 62.8308C70.7683 62.6922 74.6314 58.3542 74.6314 52.9326V51.7635H66.626V54.2946H71.58C71.4951 57.8528 68.2483 60.2719 64.7794 60.1887C60.0754 60.0778 56.774 56.6017 56.774 52.3203C56.774 47.7328 60.2731 43.6455 65.0305 43.7564C67.8285 43.8407 70.0671 45.0907 71.4672 46.9541L73.5383 45.1184C71.2439 42.3377 68.7251 41.1698 65.1143 41.1155C59.0137 41.0034 53.8632 46.1466 54.0028 52.2082Z"
                  fill={`${activeTheme === "light" ? "#fff" : "#252525"} `}
                ></path>
              </svg>
            </Link>
          </div>
          <div class="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-[#fdfef9]">
              Đăng nhập
            </h4>
            <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Nice to meet you! Enter your details to register.
            </p>
            <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={handleSubmit}>
              <div class="flex flex-col gap-6 mb-1">
                <h6 class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Email
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="name@mail.com"
                    value={login.email}
                    onChange={handleInputChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <h6 class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Mật khẩu
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    placeholder="********"
                    value={login.password}
                    onChange={handleInputChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
              </div>
              <div class="inline-flex items-center">
                <label
                  class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="remember"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="remember"
                  />
                  <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="remember"
                >
                  <p class="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    I agree the
                    <a
                      href="#"
                      class="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </label>
              </div>
              <button
                class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Đăng nhập
              </button>
              <p class="block dark:text-gray-600 mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Bạn chưa có tài khoản ư?
                <Link
                  to={"/register"}
                  class="font-medium text-gray-900 dark:text-[#fdfef9]"
                >
                  Đăng ký tại đây!
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={logo}
            alt=""
            className="hidden xl:block h-screen w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
