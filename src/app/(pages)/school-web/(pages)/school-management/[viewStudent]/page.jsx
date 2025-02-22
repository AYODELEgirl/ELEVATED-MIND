"use client";
import { Switch } from "@headlessui/react";
import React from "react";
import Navbars from "../../Navbars";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import studentIcon from "../../../../../../assets/icons/overview/studentIcon.png";
import Student from "./(metrix)/Student";
import Personal from "./(metrix)/Personal";
import Academic from "./(metrix)/Academic";
import Financial from "./(metrix)/Financial";
import Supporting from "./(metrix)/Supporting";

function page() {
  const [enabled, setEnabled] = useState({
    first: false,
  });
  const tabs = [
    { name: "Student Information" },
    { name: "Personal Background" },
    { name: "Academic Performance" },
    { name: "Financial needs" },
    { name: "Supporting Materials" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <Navbars text={"Student Information"} img={studentIcon} />
      <div className="flex justify-between mt-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <BsArrowLeft className="text-[#043259]" />
            <p className="text-[#043259] text-[14px]">
              Back to Student Management
            </p>
          </div>
          <div>
            <p className="text-[18px] text-[#090814] ml-6">Olabisi Adekunle</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <p className="text-[#909090] text-[13px]">
              Olabisi on Donation list
            </p>
          </div>
          <div>
            <Switch
              checked={enabled.first}
              onChange={(e) => handleChange(e)}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </div>
        </div>
      </div>

      <div className="flex gap-4 border border-gray-200 p-1 mt-3">
        {tabs?.map((e, i) => {
          return (
            <div
              key={i}
              className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                currentTab === e?.name
                  ? "border-b-[2px] border-[#F5105C] text-[#F5105C]  font-[800]"
                  : "border-b-[2px] border-transparent"
              }`}
              onClick={() => setCurrentTab(e?.name)}
            >
              <div>{e.name}</div>
            </div>
          );
        })}

       
      </div>
      <section className=" ">
          {currentTab === "Student Information" ? (
            <Student />
          ) : currentTab === "Personal Background" ? (
            <Personal />
          ) : currentTab === "Academic Performance" ? (
            <Academic />
          ) : currentTab === "Financial needs" ? (
            <Financial />
          ) : currentTab === "Supporting Materials" ? (
            <Supporting />
          ) : (
            <div>No content available for this tab</div>
          )}
        </section>
    </div>
  );
}

export default page;
