import Image from "next/image";
import React from "react";
import gold from "../../../../../assets/icons/overview/gold.png";
import bronze from "../../../../../assets/icons/overview/bronze.png";
import silver from "../../../../../assets/icons/overview/silver.png";
import ImpactProgressBar from "@/app/components/Charts/ImpactProgressBar";

function Rewards() {
  const support = [
    {
      name: "School Supported 30",
    },
    {
      name: "Student Supported 54",
    },
  ];
  const category = [
    {
      img: bronze,
      text: "Bronze Badge . Awarded for supporting 1-50 students.",
    },
    {
      img: silver,
      text: "Silver Badge . Earned by helping 51-100 students.",
    },
    {
      img: gold,
      text: "Gold Badge . Granted to donor who support 100 or more students.",
    },
  ];
  return (
    <div>
      <div className="flex gap-3 mt-4 mb-4" >
        <div className="w-15 h-15">
          <Image src={gold} alt="badge" width={40} height={40} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[14px]">Mayowa Babatunde</p>
          <p className="text-[13px]">Gold</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-3 mb-2 mt-2">
          {support?.map((e, i) => (
            <div
              key={i}
              className="p-2 rounded-md bg-[#04325926] text-[#043259]"
            >
              {e.name}
            </div>
          ))}
        </div>
        <div className="border border-b-gray-300 w-[100%] mb-2"></div>
        <p className="text-[14px] font-semibold text-[#1A1A1ACC]">
          About Milestone Badges & Rewards for Donors
        </p>
        <p className="text-[12px] text-[#667085] w-[50%]">
          As a donor, you can earn special recognition for your contributions
          through optional badges based on the number of students you help
          support in paying their school fees.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-2 mt-5">
        {category?.map((e, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md p-1 bg-[#04325926] text-[#043259] text-[12px]"
          >
            {/* Ensure `e.img` is an actual image */}
            <Image src={e.img} alt="icon" className="w-6 h-6 object-contain" />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[#090814] font-semibold mt-7 mb-3">Your Milestone Badge Progress</p>
      <ImpactProgressBar />
    </div>
  );
}

export default Rewards;
