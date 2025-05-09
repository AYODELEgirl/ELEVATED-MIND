"use client";
import React, { useState } from "react";
import Navbars from "../Navbars";
import donation from "../../../../../assets/icons/overview/donation.png";
import Ongoing from "./(metrix)/Ongoing";
import Completed from "./(metrix)/Completed";
import { CiSearch } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";

function Page() {
  const tabs = [{ name: "Ongoing Donation" }, { name: "Completed Donation" }];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);
  return (
    <div>
      {" "}
      <Navbars text={"Donations"} img={donation} />
      <div className="flex flex-col mt-3">
        <div className="flex gap-2 items-center">
          <p className="text-[20px]">Donations</p>
          <p className="bg-[#0432591A] text-[#043259] text-[12px] rounded-lg px-2">
            272 donations
          </p>
        </div>
        <p className="text-[13px] text-[#848D87]">
          Manage and view donations registered.{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          {tabs?.map((e, i) => {
            return (
              <div
                key={i}
                className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                  currentTab === e?.name
                    ? "border-b-[2px] border-[#696566] text-[#F5105C]  font-[800]"
                    : "border-b-[2px] border-transparent"
                }`}
                onClick={() => setCurrentTab(e?.name)}
              >
                <div>{e.name}</div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-lg max-w-52 w-full">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for name"
              className="text-[12px] text-[#667085] flex-grow outline-none"
            />
          </div>
          <div className="bg-[#1018280D] p-2 rounded-md flex gap-2">
            <FiCalendar size={15} className="text-[#888888] mt-1" />
            <p className="text-[#888888]">custom</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <section className="w-[100%]">
          {currentTab === "Ongoing Donation" ? (
            <Ongoing />
          ) : currentTab === "Completed Donation" ? (
            <Completed />
          ) : (
            <div>No content available for this tab</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Page;
