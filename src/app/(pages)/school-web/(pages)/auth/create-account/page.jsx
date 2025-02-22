"use client"; // Mark this as a client-side component
import { useState } from "react";
import Frame from "../../../../../../assets/icons/overview/Frame.png";
import Elevated from "../../../../../../assets/icons/overview/Elevated.png";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' for App Directory

import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
function page() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter(); // Initialize the router

  // Handle Sign Up click and navigate to the 'signin' page
  const handleSignInClick = () => {
    router.push("/school-web/auth/login"); // Navigate to the sign-in page
  };
  return (
    <div className=" p-20 border border-gray-300 rounded-2xl shadow-lg shadow-gray-500/50 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <Image src={Frame} width={30} />
        <Image src={Elevated} width={150} />
      </div>
      <div className="mt-24">
        <p className="text-[#0B090A] text-[27px] font-bold">
          Create your Password{" "}
        </p>
        <p className="text-[#8B919E] text-[18px] mt-4">
          Transform Education, Manage Impact{" "}
        </p>
      </div>
      <form action="">
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
      <p className="text-[white] bg-[#043259] text-center py-3 rounded-md mt-5">
        Proceed{" "}
      </p>
      <p className="text-[#043259] mt-3 text-center">
                Already have an account?{" "}
                <span
                  className="text-[#F5105C] cursor-pointer"
                  onClick={handleSignInClick} // Call the handleSignUpClick function on click
                >
                  Sign in
                </span>{" "}
              </p>
    </div>
  );
}

export default page;
