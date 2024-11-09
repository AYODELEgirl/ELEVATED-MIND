"use client";
import Image from "next/image";
import kidss from "../../../assets/images/kidss.png";
import thankYou from "../../../assets/images/thankYou.png";
import { useState } from "react";
import Random from "./(metrix)/Random";
import Students from "./(metrix)/Students";
import View from "./(metrix)/View";
export default function Donation() {
  const tabs = [{ name: "Random donations" }, { name: "Students donations" }];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);
  return (
    <div>
      <div className="border-t border-l border-r border-b-0 border-[#005399] rounded-tl-2xl rounded-tr-2xl px-4 mx-4">
        <div className="flex justify-between px-4 py-3">
          <div className="">
            <p className="text-white font-semibold text-[23px] mb-2">Donate</p>
            <p className="text-white text-[18px]">
              Make a Difference: Your Gift Transforms Live
            </p>
            <div className="flex items-center gap-[2rem] mt-9">
              {tabs.map((e, i) => {
                return (
                  <div
                  key={i}
                    className={`${
                      currentTab === e?.name
                        ? "border-b-[2px] border-[#F5105C] text-primary  font-[800]"
                        : "border-b-[2px] border-transparent"
                    }`}
                    onClick={() => setCurrentTab(e?.name)}
                  >
                    <div
                      className={`text-[white] cursor-pointer ${
                        currentTab === e?.name
                          ? "text-white font-normal"
                          : "text-[#788397] font-normal"
                      }`}
                    >
                      {e?.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <Image src={thankYou} width={120} />
            <Image src={kidss} width={500} />
          </div>
        </div>
      </div>

      <section className="mx-4 bg-gray-200 p-4">
        {currentTab === "Random donations" ? (
          <Random />
        ) : currentTab === "view" ? (
          <View />
        ) : (
          <Students setCurrentTab={setCurrentTab} />
        )}
      </section>
    </div>
  );
}