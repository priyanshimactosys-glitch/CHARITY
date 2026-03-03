'use client';
import Button from "@/src/components/common/Button";
import { Eye, EyeOff, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState(
    `Something doesn't match. Please try again or click "Login help" for assistance.`
  );

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-login.svg')",
      }}
    >

      <div className="relative z-10 w-[570px] max-w-[95%] rounded-2xl border border-white/20 bg-black/60 my-10 p-6 text-white shadow-2xl">

        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={109}
            height={70}

          />
        </div>

        <h2 className="text-2xl font-semibold text-center">
          Welcome back!
        </h2>
        <p className="text-base text-white/80 text-center mb-6">
          Please enter your username and password
        </p>

        <div className="mb-5">
          <label className="text-lg text-white/80">
            Username
          </label>
          <div className="relative ">
            <input
              type="text"
              placeholder="Enter your email or ID"
              className="w-full bg-transparent border-b border-white/60 focus:border-white outline-none py-2 pr-8 text-base placeholder:text-white/60"
            />
            <Mail
              size={18}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70"
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="text-lg text-white/80">Password</label>
          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent border-b border-white/60 focus:border-white outline-none py-2 pr-8 text-base placeholder:text-white/60"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="text-right text-base mb-5">
          <a href="#" className="hover:underline text-white/80">
            Forget password?
          </a>
        </div>

        {error && (
          <div className="bg-[#BA4E4D] text-base text-center rounded-md p-3 mb-5">
            {error}
          </div>
        )}


        <div className="flex justify-center">
          <Button>Login</Button>
        </div>

        <div className="text-center text-base mt-2">
          <a href="#" className="underline text-white/90">
            Login help
          </a>
        </div>

        <div className="text-xs text-white/60 text-center mt-2">
          🔒 Authorized access only. Activity is monitored.
          <br />
          <span className="text-sm">© 2026, VPeters Initiative</span>
        </div>
      </div>
    </div>
  );
}