"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import transact from "../../../../../assets/icons/overview/transact.png";
import Navbars from "../Navbars";
import { FiCalendar } from "react-icons/fi";
import All from "./(metrix)/All";
import Completed from "./(metrix)/Completed";
import Ongoing from "./(metrix)/Ongoing";
import Failed from "./(metrix)/Failed";

function Page() {
   
    
  const tabs = [
    { name: "All" },
    { name: "Completed" },
    { name: "Ongoing" },
    { name: "Failed" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <Navbars text={"Transactions"} img={transact} />
      <div className="flex flex-col mt-3">
        <div className="flex gap-2 items-center">
          <p className="text-[20px]">Transactions</p>
          <p className="bg-[#0432591A] text-[#043259] text-[12px] rounded-lg px-2">
            272 donations
          </p>
        </div>
        <p className="text-[13px] text-[#848D87]">
          See all donation transactions in this field.
        </p>
      </div>
      <div className="flex justify-between">
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
          {currentTab === "All" ? (
            <All />
          ) : currentTab === "Completed" ? (
            <Completed />
          ) : currentTab === "Ongoing" ? (
            <Ongoing />
          ) : (
            <Failed />
          )}
        </section>
      </div>
    </div>
  );
}

export default Page;
