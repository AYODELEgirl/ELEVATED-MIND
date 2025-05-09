"use client"; // Mark this as a client-side component

import Image from "next/image";
import React from "react";
import Frame from "../../../../../../assets/icons/overview/Frame.png";
import Elevated from "../../../../../../assets/icons/overview/Elevated.png";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

function Page() {
  const handleSignUpClick = () => {
    router.push("/school-web/auth/login"); // Navigate to the sign-in page
  };
  const router = useRouter(); // Initialize the router

  // Handle Create Account click and navigate to the 'create-account' page
  const handleCreateAccount = () => {
    router.push("/school-web/auth/create-account"); // Navigate to the create-account page
  };

  return (
    <div className=" p-20 border border-gray-300 rounded-2xl shadow-lg shadow-gray-500/50 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <Image src={Frame} width={30} alt="" />
        <Image src={Elevated} width={150} alt="" />
      </div>
      <div className="mt-24">
        <p className="text-[#0B090A] text-[27px] font-bold">Sign up for free</p>
        <p className="text-[#8B919E] text-[18px] mt-4">
          Transform Education, Manage Impact
        </p>
      </div>
      <form action="" className="mt-4">
        <label htmlFor="" className="text-[#344054] text-[13px] mb-1">
          School Name{" "}
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-3 w-full border border-gray-300 mt-2 mb-4 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter School Name"
        />
        <label htmlFor="" className="text-[#344054] text-[13px] mb-1">
          School Type{" "}
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-3 w-full border border-gray-300 mt-2  mb-4 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter School Type"
        />
        <label htmlFor="" className="text-[#344054] text-[13px] mb-1">
          Email Address
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-3 w-full border mb-4 border-gray-300 mt-2 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
        />
        <label htmlFor="" className="text-[#344054] text-[13px] mb-1">
          Phone Number{" "}
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-3 w-full border mb-4 border-gray-300 mt-2 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Phone Number"
        />
        <label htmlFor="" className="text-[#344054] text-[13px] mb-1">
          School Website{" "}
          <span className="text-[11px] text-[#47536780]">(Optional)</span>
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-3 w-full border border-gray-300 mt-2 mb-4 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter School Website"
        />
        <label htmlFor="" className="text-[#344054] text-[13px] mbp-1">
          School Address{" "}
        </label>
        <input
          type="text"
          className="pl-3 pr-10 py-5 w-full border border-gray-300 mt-2 mb-4 text-[#98A2B3] text-[12px] rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter School Address"
        />
      </form>
      <div className="flex gap-2">
        <input type="checkbox" />
        <p className="text-[13px]">
          I agree with the{" "}
          <span className="text-[#F5105C]">Terms & Condition</span> and{" "}
          <span className="text-[#F5105C]">Privacy Policy</span> .
        </p>
      </div>
      <p
        onClick={handleCreateAccount} 
        className="text-[white] bg-[#043259] text-center py-3 rounded-md mt-5 cursor-pointer"
      >
        Create free account{" "}
      </p>
      <p className="text-[#043259] text-center mt-2">
        Already have an account{" "}
        <span
          onClick={handleSignUpClick} 
          className="text-[#F5105C] cursor-pointer"
        >
          Sign in
        </span>{" "}
      </p>
    </div>
  );
}

export default Page;
