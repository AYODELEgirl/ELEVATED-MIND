"use client";
import React from "react";
import Navbars from "../Navbars";
import set from "../../../../../assets/icons/overview/set.png";
import { useState } from "react";
import Profile from "./{metrix)/Profile";
import Notification from "./{metrix)/Notification";
import Privacy from "./{metrix)/Privacy";
function Page() {
  const tabs = [
    { name: "School Profile" },
    { name: "Notification settings" },
    { name: "Privacy & Security" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <Navbars text={"Settings"} img={set} />
      <div className="flex flex-col">
        <p className="text-[20px] font-medium">Settings</p>
        <p className="text-[12px] text-[#848D87]">
          Manage your school account profile, notifications, and security
          settings
        </p>
      </div>
      <div className="border border-gray-200 p-1 mt-3">
        <div className="flex gap-4 ">
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
      <section className="mt-3 ">
        {currentTab === "School Profile" ? (
          <Profile />
        ) : currentTab === "Notification settings" ? (
          <Notification />
        ) : currentTab === "Privacy & Security" ? (
          <Privacy />
        ) : (
          <div>No content available for this tab</div>
        )}
      </section>
      </div>
    </div>
  );
}

export default Page;
