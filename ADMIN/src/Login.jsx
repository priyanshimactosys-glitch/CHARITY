import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineEyeOff } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { loginService } from "./services/login";

import childrenImg from "./assets/children.png";
import logoImg from "./assets/icons/logo copy.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      email: username,
      password: password,
    };

    console.log("Sending Payload:", payload); 

    const res = await loginService(payload);

    console.log("API RESPONSE:", res); 

    if (res.success) {
      // save token
      localStorage.setItem("token", res.data.token);

      // save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Login Successful");

      navigate("/admin/dashboard");
    }
  } catch (error) {
    console.log("Login Failed:", error);
    alert("Invalid Email or Password");
  }
};

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center 
      bg-cover bg-center bg-no-repeat fixed inset-0 font-sans"
      style={{ backgroundImage: `url(${childrenImg})` }}
    >
      <div
        className="relative z-10 w-full max-w-[480px] bg-[#01010180] 
      backdrop-blur-md border border-white rounded-[2.5rem] px-10 
      py-8 flex flex-col items-center shadow-2xl mx-4"
      >
        {/* Logo */}
        <div className="mb-3">
          <img
            src={logoImg}
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <h1 className="text-white text-xl font-semibold text-center">
          Welcome back!
        </h1>

        <p className="text-white mt-2 text-md text-center opacity-80">
          Please enter your username and password
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-4">

          {/* Username */}
          <div className="relative mt-2">
            <label className="block text-white text-md mb-0.5 ml-1">
              Username
            </label>

            <div className="flex items-center border-b border-white py-1.5">
              <input
                type="text"
                placeholder="Email or ID Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-none placeholder-white w-full text-white text-sm focus:outline-none"
                required
              />

              <HiOutlineMail className="text-white" size={24} />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-white text-md mb-0.5 ml-1">
              Password
            </label>

            <div className="flex items-center border-b border-white py-1.5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none w-full text-white placeholder-white focus:outline-none text-base tracking-[0.2em]"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <HiOutlineEyeOff className="text-white" size={22} />
              </button>
            </div>
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-white/70 text-md hover:text-white"
            >
              Forget password ?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#D90102] hover:bg-red-700 text-white 
              font-bold py-2 px-14 rounded-md
              transition-all active:scale-[0.98] shadow-lg text-sm
              block mx-auto"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center space-y-2">

          <button className="text-white text-md font-semibold hover:underline">
            Login help
          </button>

          <div className="flex items-center text-white/40 text-sm tracking-wide">
            <MdLockOutline className="mr-1 text-white text-xs" />
            Authorized access only. Activity is monitored.
          </div>

          <p className="text-white text-xs tracking-[0.2em]">
            © 2026. V'Peters Initiative
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;