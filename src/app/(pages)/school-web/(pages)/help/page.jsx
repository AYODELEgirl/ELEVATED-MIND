"use client";
import React, { useState } from "react";
import Navbars from "../Navbars";
import helpIcon from "../../../../../assets/icons/overview/helpIcon.png";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Pending from "./(matrix)/Pending";
import Resolved from "./(matrix)/Resolved";

function Page() {
  const [gender, setGender] = useState("");
  const [currentTab, setCurrentTab] = useState("Pending Ticket");

  const tabs = [{ name: "Pending Ticket" }, { name: "Resolved Ticket" }];

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <Navbars text={"Help and support"} img={helpIcon} />

      <div className="flex justify-between mt-3 w-full p-2">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <p className="text-[20px]">School Management</p>
            <p className="bg-[#0432591A] text-[#043259] text-[12px] rounded-lg py-1 px-2">
              72 students
            </p>
          </div>
          <p className="text-[13px] text-[#848D87]">
            Manage and view all students registered.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          {/* Tabs */}

          <div className="bg-[#043259] flex items-center gap-2 text-white rounded-md py-2 px-4 cursor-pointer">
            <LuPlus size={20} />
            <p className="text-[12px] font-medium">Add Ticket</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-4">
          {tabs.map((e, i) => {
            return (
              <div
                key={i}
                className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                  currentTab === e?.name
                    ? "border-b-[2px] border-[#696566] text-[#F5105C] font-[800]"
                    : "border-b-[2px] border-transparent"
                }`}
                onClick={() => setCurrentTab(e?.name)}
              >
                <div>{e.name}</div>
              </div>
            );
          })}
        </div>

      <div className="flex gap-5 mt-3">
        <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-lg max-w-52 w-full">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for name"
            className="text-[12px] text-[#667085] flex-grow outline-none"
          />
        </div>

        <div className="flex gap-1 border border-gray-200 p-2 rounded-lg max-w-28 w-full relative">
          <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          <select
            value={gender}
            onChange={handleGenderChange}
            className="text-[12px] text-[#667085] bg-transparent outline-none pl-2 pr-8 py-1 w-full"
          >
            <option value="" disabled>
              Ticket Issue
            </option>
          </select>
        </div>

        <div className="flex gap-1 border border-gray-200 p-2 rounded-lg max-w-44 w-full relative">
          <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          <select
            value={gender}
            onChange={handleGenderChange}
            className="text-[12px] text-[#667085] bg-transparent outline-none pl-2 pr-8 py-1 w-full"
          >
            <option value="" disabled>
              Priority
            </option>
          </select>
        </div>

        <div className="bg-[#1018280D] p-2 rounded-md flex gap-2">
          <FiCalendar size={15} className="text-[#888888] mt-1" />
          <p className="text-[#888888]">custom</p>
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <section className="w-[100%]">
          {currentTab === "Pending Ticket" ? (
            <Pending />
          ) : currentTab === "Resolved Ticket" ? (
            <Resolved />
          ) : (
            <div>No content available for this tab</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Page;
