"use client"; // Mark this as a client-side component
import { useRouter } from "next/navigation"; // Import from 'next/navigation' for App Directory
import React from "react";
import Image from "next/image"; // Don't forget to import Image
import Frame from "../../../../../../assets/icons/overview/Frame.png";
import Elevated from "../../../../../../assets/icons/overview/Elevated.png";

function Page() {
  const router = useRouter(); // Initialize the router

  // Handle Sign In click and navigate to the 'login' page
  const handleSignUpClick = () => {
    router.push("/school-web/auth/login"); // Navigate to the login page
  };

  return (
    <div className="p-20 border border-gray-300 rounded-2xl shadow-lg shadow-gray-500/50 hover:shadow-2xl transition-all duration-300 pb-64" >
      <div className="flex items-center gap-4">
        <Image src={Frame} width={30} height={30} alt="" />
        <Image src={Elevated} width={150} height={150} alt="" />
      </div>
      <div className="mt-24">
        <p className="text-[#0B090A] text-[27px] font-bold">Forgot Password</p>
        <p className="text-[#8B919E] text-[18px] mt-4">
          Send a link to reset your password
        </p>
      </div>
      <form action="" className="mt-4">
        <label htmlFor="email" className="text-[#344054] text-[13px]">
          Email Address
        </label>
        <input
          type="email" // Changed from "text" to "email" for better validation
          id="email"
          className="pl-3 pr-10 py-3 w-full border border-gray-300 mt-2 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Email Address"
        />
        <button type="submit" className="text-[white] bg-[#043259] text-center py-3 rounded-md mt-5 w-full">
          Send Link
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-[#F5105C] cursor-pointer"
            onClick={handleSignUpClick} // Call the handleSignUpClick function on click
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default Page;
