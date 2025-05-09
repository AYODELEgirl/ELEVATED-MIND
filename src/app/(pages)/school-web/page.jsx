"use client"; // Mark this as a client-side component
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' for App Directory
import Frame from "../../../assets/icons/overview/Frame.png";
import Elevated from "../../../assets/icons/overview/Elevated.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Overview from "../../../assets/images/OverView.png";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter(); // Initialize the router

  // Handle Sign Up click and navigate to the 'signin' page
  const handleSignUpClick = () => {
    router.push("/signin"); // Navigate to the sign-in page
  };

  return (
    <div>
      <div className="flex gap-3 p-3">
        <div className="w-[50%] p-20 border border-gray-300 rounded-2xl shadow-lg shadow-gray-500/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <Image src={Frame} width={30}  alt=""/>
            <Image src={Elevated} width={150} alt="" />
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
              <p className="text-[#043259]">
                Forgot Password?{" "}
                <span
                  className="text-[#F5105C] cursor-pointer"
                  onClick={handleSignUpClick} // Call the handleSignUpClick function on click
                >
                  Sign up
                </span>{" "}
              </p>
            </div>
            <p className="text-[white] bg-[#043259] text-center py-3 rounded-md mt-5">
              Login
            </p>
            {/* Sign Up link */}
          </div>
        </div>
        <div
          className="w-[50%] rounded-2xl p-20"
          style={{
            background: "linear-gradient(to right, #DAEEFE 100%, #FAFAFA 100%)",
          }}
        >
          <p className="bg-white rounded-md p-2 text-[#8B919E] text-[13px] w-fit ">
            SCHOOL PORTAL FOR DONATION
          </p>
          <p className="w-[70%] text-[#5D5D5D] mt-2 text-[16px]">
            Manage your school and student Donations{" "}
            <span className="text-[#F5105C]">more professionally</span>
          </p>
          <Image
            src={Overview}
            alt="Overview Image"
            width={500}
            height={300}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
