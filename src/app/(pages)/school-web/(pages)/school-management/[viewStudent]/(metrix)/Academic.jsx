import React, { useState } from "react";
import First from "../(academic)/First";
import Second from "../(academic)/Second"; // Make sure the correct import is used
import Third from "../(academic)/Third";

function Academic() {
  const tabs = [
    { name: "1st term (2024/2025)" },
    { name: "2nd term (2024/2025)" },
    { name: "3rd term (2024/2025)" },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <div>
      <div className="flex gap-4 border-t-gray-200 p-1">
        {tabs.map((e, i) => {
          return (
            <div
              key={i}
              className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2 ${
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

      <section>
        {currentTab === "1st term (2024/2025)" && <First />}
        {currentTab === "2nd term (2024/2025)" && <Second />}
        {currentTab === "3rd term (2024/2025)" && <Third />}
      </section>
    </div>
  );
}

export default Academic;
