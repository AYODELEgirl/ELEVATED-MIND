import React, { useState } from 'react'
import Dowloadables from './certificateFolder/Dowloadables';
import Rewards from './certificateFolder/Rewards';

function Certificate() {
  const tabs = [
    { name: "Downloadable Certificates" },
    { name: "Rewards for specific milestones (Badges)" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <div className="flex items-center gap-[2rem]">
              {tabs?.map((e, i) => {
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
                    <div>{e?.name}</div>
                  </div>
                );
              })}
            </div>
            {currentTab === "Downloadable Certificates" ? (
  <Dowloadables />
) : currentTab === "Rewards for specific milestones (Badges)" ? (
  <Rewards />
) : null} 


    </div>
  )
}

export default Certificate