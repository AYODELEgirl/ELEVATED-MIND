"use client"; // Mark this as a client-side component
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' for App Directory
import Frame from "../../../../../../assets/icons/overview/Frame.png";
import Elevated from "../../../../../../assets/icons/overview/Elevated.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const handleOverview = () => {
      router.push("/school-web/overview"); 
    };
    
  

  const router = useRouter(); 

  const handleSignUpClick = () => {
    router.push("/school-web/auth/sign-up"); 
  };
  const handleForgetPassword = () => {
    router.push("/school-web/auth/forget-password");
  };

  return (
    <div>
        <div className=" p-20 border border-gray-300 rounded-2xl shadow-lg shadow-gray-500/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <Image src={Frame} width={30} />
            <Image src={Elevated} width={150} />
          </div>
          <div className="mt-24">
            <p className="text-[#0B090A] text-[27px] font-bold">
              Log in to Dashboard
            </p>
            <p className="text-[#8B919E] text-[18px] mt-4">
              Fill the below form to login
            </p>
            <form action="" className="mt-4">
              <label htmlFor="" className="text-[#344054] text-[13px]">
                Email Address
              </label>
              <input
                type="text"
                className="pl-3 pr-10 py-3 w-full border border-gray-300 mt-2 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mt-6"
              >
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="pl-3 pr-10 py-3 w-full border border-gray-300 text-[#98A2B3] text-[12px] rounded-md focus:ring-gray-500"
                  placeholder="Enter your password"
                />

                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                </span>
              </div>
            </form>
            <div className="flex justify-between mt-2">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-[13px]">Remember for 30 days</p>
              </div>
              <p                    onClick={handleForgetPassword} // Call the handleSignUpClick function on click
className="text-[#043259] cursor-pointer">
                Forgot Password?{" "}
               
              </p>
            </div>
            <p    onClick={handleOverview}   className="text-[white] cursor-pointer bg-[#043259] text-center py-3 rounded-md mt-5">
              Login
            </p>
            <p className="text-center mt-3">Already have an account? <span
                  className="text-[#F5105C] cursor-pointer"
                  onClick={handleSignUpClick} // Call the handleSignUpClick function on click
                >
                  Sign up
                </span>{" "}</p>
            {/* Sign Up link */}
          </div>
        </div>
      
    </div>
  );
}

export default Login;
