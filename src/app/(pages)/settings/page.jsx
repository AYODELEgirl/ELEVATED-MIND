"use client";
import React, { useState } from "react";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import Header from "@/components/Templates/Header";
import LockIcon from "../../../assets/images/LockIcon.png";
import Link from "next/link";
import notify from "../../../assets/images/notify.png";
import profile from "../../../assets/images/profile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Profile from "./Profile";
import Notification from "./Notification";
import Lock from "./Lock";

export default function page() {
  const select = [
    { img: profile, text: "Profile Settings", icon: <MdKeyboardArrowRight /> },
    {
      img: notify,
      text: "Notification Settings",
      icon: <MdKeyboardArrowRight />,
    },
    {
      img: LockIcon,
      text: "Privacy & Security",
      icon: <MdKeyboardArrowRight />,
    },
  ];
  const [currentTab, setCurrentTab] = useState(select[0]?.text);

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
          <div className = "w-full  items-start flex gap-7">

          <div className="flex  flex-col gap-3 border border-[#E4E7EC] mt-4 p-4 w-[23%] rounded-lg text-start">
            <p className="text-[12px] mt-2 text-[#5F5F67CC] text-start">
              SELECT MENU
            </p>

            {select?.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`text-[#667185] flex gap-3 items-center pb-3 transition-all cursor-pointer px-5 ${
                    currentTab === e?.text
                      ? "bg-[#04325926] text-primary font-semibold rounded-md p-2"
                      : "hover:bg-[#04325926] rounded-md"
                  }`}
                  onClick={() => setCurrentTab(e?.text)}
                >
                  <div className="flex items-center  p-1">
                    <Image
                      src={e?.img}
                      alt={e?.text}
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                  </div>

                  <p className="text-center">{e?.text}</p>

                  {currentTab === e?.text && (
                    <div className="bg-primary rounded-full text-white font-semibold flex justify-center items-center text-[1rem] h-[15px] w-[15px]">
                      {e?.icon}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <section className="mx-4  p-4">
            {currentTab === "Profile Settings" ? (
              <Profile />
            ) : currentTab === "Notification Settings" ? (
              <Notification />
            ) : (
              <Lock />
            )}
          </section>
          </div>

        </div>
      </div>
    </div>
  );
}
