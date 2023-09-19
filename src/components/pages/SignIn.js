import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillApple,
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-[#F8FAFF] grid grid-cols-2">
      <div
        className="flex flex-col py-12 justify-between h-[100vh] bg-gradient-to-b from-blue-500 via-blue-500 to-blue-700"
        style={{
          clipPath: "polygon(0 0, 100% 0, 81% 100%, 0 100%)",
        }}
      >
        <p className="font-bold text-2xl text-white font-poppins pl-12">LOGO</p>
        <h1 className="font-bold text-7xl text-white ml-[13vw]">Board.</h1>
        <div className="flex gap-8 ml-[10vw]">
          <AiFillGithub className="h-12 w-12 text-white" />
          <AiFillTwitterCircle className="h-12 w-12 text-white" />
          <AiFillLinkedin className="h-12 w-12 text-white" />
          <BiLogoDiscord className="h-12 w-12 text-white" />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        
        <div className=" w-[25rem]">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-base font-lato mt-2">Sign in to your account</p>
          <div className="grid grid-cols-2 gap-5 my-5">
            <button className="bg-white rounded-lg py-2 px-5 flex items-center justify-center gap-3 text-[#858585]">
              <FcGoogle />
              <span className="text-xs">Sign in with Google</span>
            </button>
            <button className="bg-white rounded-lg py-2 px-5 flex items-center justify-center gap-3 text-[#858585]">
              <AiFillApple />
              <span className="text-xs">Sign in with Apple</span>
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col gap-y-4">
             <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-lato">Email Address</label>
              <input className="text-base font-lato bg-[#F5F5F5] p-2 rounded-lg focus:outline-none focus:bg-[#EAEAEA]" type="email" placeholder="Eg. johndoe@gmail.com" id="email" />
             </div>
             <div className="flex flex-col gap-y-2">
              <label htmlFor="password" className="font-lato">Password</label>
              <input className="text-base font-lato bg-[#F5F5F5] p-2 rounded-lg focus:outline-none focus:bg-[#EAEAEA]" type="password" id="password" />
             </div>
             <p className="cursor-pointer text-[#346BD4] font-lato">Forgot Password?</p>
             <button onClick={()=>navigate('/dashboard')} className="text-white font-bold p-2 rounded-lg bg-[#4285F4] ">Sign In</button>
          </div>
          <p className="font-lato text-[#858585] mt-5 text-center">Don’t have an account? <span className="cursor-pointer text-[#346BD4]"> Register here </span></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
