"use client";
import React, { useState } from "react";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import Header from "@/components/Templates/Header";
import Link from "next/link";
import notify from "../../../assets/images/notify.png";
import Lock from "../../../assets/images/Lock.png";
import profile from "../../../assets/images/profile.png";
// import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

export default function page() {
  const select = [
    { img: profile, text: "Profile Settings", icon: <MdKeyboardArrowRight /> },
    {
      img: notify,
      text: "Notification Settings",
      icon: <MdKeyboardArrowRight />,
    },
    { img: Lock, text: "Privacy & Security", icon: <MdKeyboardArrowRight /> },
  ];
  const [currentTab, setCurrentTab] = useState(select[0]?.name);

  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="flex justify-between items-center  pt-6 h-40">
          <Header
            header={"Settings"}
            text={
              "Manage your account preferences, notifications, and security settings"
            }
          />
          <Link
            href="/donations"
            className="z-50 bg-primary  cursor-pointer text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem]"
          >
            Make a donation
          </Link>
        </div>
      </SecondLayout>
      <div className="bg-[#F5F5F5] mx-4 pt-3">
        <div className="bg-white mx-4 p-4 pt-4 rounded-md">
          <p
            style={{ fontWeight: "400", fontSize: "18px" }}
            className="text-primary"
          >
            Profile Settings<span className="text-[#F5105C]">*</span>
          </p>
          <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
          <div className="flex  flex-col items-center gap-3 border border-[#E4E7EC] mt-4 w-fit rounded-lg text-start">
            <p className="text-[12px] mt-2 text-[#5F5F67CC]">SELECT MENU</p>
            {select?.map((e, i) => {
  return (
    <div
      key={i}
      className={`text-[#667185] flex items-center justify-between items-center gap-3 pb-3 transition-all cursor-pointer px-5 ${
        currentTab === e?.text
          ? "bg-[#04325926] text-primary font-semibold rounded-md" // Active state with background
          : "hover:bg-[#04325926] rounded-md" // Hover effect for non-active tabs
      }`}
      onClick={() => setCurrentTab(e?.text)} // Set the current tab when clicked
    >
      {/* Image with centering styles */}
      <Image
        src={e?.img}
        alt={e?.text} // Add alt text for accessibility
        width={20} // You can adjust width and height as needed
        // height={50} // Ensure this is a square for uniformity
        className="flex-shrink-0" // Prevent image from shrinking if container is resized
      />
      
      <p>{e?.text}</p>

      {/* Show icon for active tab */}
      {currentTab === e?.text && (
        <div className="bg-primary rounded-full text-white font-semibold flex justify-center items-center text-[1rem] h-[20px] w-[20px]">
          {e?.icon}
        </div>
      )}
    </div>
  );
})}

          </div>
        </div>
      </div>
    </div>
  );
}
