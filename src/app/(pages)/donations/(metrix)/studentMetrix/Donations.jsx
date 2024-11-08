import React, { useState } from "react";
import CompletedDonations from "../studentDonations/CompletedDonations";
import OngoingDonation from "../studentDonations/OngoingDonation";

 const Donations = () => {
  const tabs = [
    { name: "Completed Donation", num: "23" },
    { name: "Ongoing Donation", num: "15" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);
  return (
    <div>
      <div className="flex items-center gap-[2rem] mt-9">
        {tabs.map((e, i) => {
          const isActive = currentTab === e?.name;
          const tabClass = isActive
            ? "border-b-[1px] border-[#F5105C] text-primary font-[800]"
            : "border-b-[1px] border-transparent";
          const textClass = isActive
            ? "text-[#F5105C] font-normal"
            : "text-[#667085] font-normal";

          return (
            <div
              key={i}
              aria-selected={isActive}
              className={tabClass}
              onClick={() => setCurrentTab(e?.name)}
            >
              <div className={`cursor-pointer flex gap-1 ${textClass}`}>
                {e?.name}
                {isActive && (
                  <div className="bg-primary text-white font-[700] flex justify-center items-center text-[.6rem] rounded-full h-[22px] w-[22px]">
                    {e?.num}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>

      <section>
        {currentTab === "Completed Donation" ? (
          <CompletedDonations />
        ) : (
          <OngoingDonation />
        )}
      </section>
    </div>
  );
}

export default Donations;