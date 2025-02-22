import React, { useState } from 'react';
import Family from '../(student)/Family';
import Need from '../(student)/Need';
import Hobbies from '../(student)/Hobbies';
import Career from '../(student)/Career';

function Personal() {
  const tabs = [
    { name: "Family Background" },
    { name: "Need for Financial Assistance" },
    { name: "Hobbies and Interest" },
    { name: "Career Aspirations" }
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div className="flex flex-col gap-4 mt-3">
      <div className="flex gap-4 border-t-gray-200 p-1">
        {tabs.map((e, i) => {
          return (
            <div
              key={i}
              className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                currentTab === e?.name
                  ? "border-b-[2px] border-[#F5105C] text-[#F5105C] font-[800]"
                  : "border-b-[2px] border-transparent"
              }`}
              onClick={() => setCurrentTab(e?.name)}
            >
              <div>{e.name}</div>
            </div>
          );
        })}
      </div>

      <section className="">
        {currentTab === "Family Background" ? (
          <Family />
        ) : currentTab === "Need for Financial Assistance" ? (
          <Need />
        ) : currentTab === "Hobbies and Interest" ? (
          <Hobbies />
        ) : currentTab === "Career Aspirations" ? (
          <Career />
        ) : (
          <div>No content available for this tab</div>
        )}
      </section>
    </div>
  );
}

export default Personal;
