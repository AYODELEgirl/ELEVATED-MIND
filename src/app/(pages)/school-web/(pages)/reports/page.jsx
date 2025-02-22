"use client";
import React, { useState, useEffect } from "react";
import Navbars from "../Navbars";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image"; // Add Image component import from Next.js
import blackPanel from "../../../../../assets/icons/overview/blackPanel.png";
import maleAvatar from "../../../../../assets/icons/overview/maleAvatar.png";
import goldBadge from "../../../../../assets/icons/overview/goldBadge.png";
import Reports from "@/app/components/Charts/Reports";

function page() {
  const [active, setActive] = useState(null);
  const handleClick = (index) => setActive(index);

  const donations = [
    {
      Total: "Total Donations received",
      Amount: "₦ 1,200,175.00",
      percent: "16%",
      Icon: <GoArrowUpRight size={12} className="text-[#50B848]" />,
    },
    {
      Total: "Total Number of Students Supported",
      Amount: "48",
      percent: "4.8%",
      Icon: <GoArrowUpRight size={12} className="text-[#50B848]" />,
    },
    {
      Total: "Completed Donation",
      Amount: "48",
      percent: "0.9%",
      Icon: <GoArrowUpRight size={12} className="text-[#50B848]" />,
    },
    {
      Total: "Ongoing Donations",
      Amount: "71",
      percent: "48%",
      Icon: <GoArrowUpRight size={12} className="text-[#50B848]" />,
    },
  ];

  const table = [
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      class: "j.s.s 3",
      gold: goldBadge,
      price: "Gold",
      initials: "OA",
      nameTwo: "Olabisi Adekunle",
      amount: "Total Donation Amount",
      date: "4 Sep 2024",
      money: "#8,500",
    },
    {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
      {
        avartar: maleAvatar,
        name: "Mayowa Kingsley",
        class: "j.s.s 3",
        gold: goldBadge,
        price: "Gold",
        initials: "OA",
        nameTwo: "Olabisi Adekunle",
        amount: "Total Donation Amount",
        date: "4 Sep 2024",
        money: "#8,500",
      },
    // Add more rows if needed
  ];

  // Two Color Progress Bar Logic
  const [percent, setPercent] = useState(50); // Default progress 50%
  
  // Colors for the progress bar
  const color1 = "#043259"; // Red color
  const color2 = "#F5105C"; // Blue color

  const redWidth = (percent <= 50) ? percent : 50;  // Red fills up to 50%
  const blueWidth = (percent > 50) ? percent - 50 : 0;  // Blue fills the rest

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 10 : 100)); // Increment every second
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div>
      <Navbars text={"Dashboard"} img={blackPanel} />
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col gap-1">
          <p className="text-[20px] text-[#090814] font-medium">Reports</p>
          <p className="text-[#667085] text-[13px]">
            All general report of Elevatedminds appears in this field{" "}
          </p>
        </div>
        <div className="bg-[#F2F2F2] rounded-md px-2 flex w-fit gap-3 text-[#1A1A1A80]">
          {["Total", "Last week", "Last month", "Today"].map((text, index) => (
            <p
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer p-1 ${
                active === index ? "text-black bg-white rounded-md" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {donations.map((donation, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 mt-3">
            <p className="text-[12px] text-[#667085]">{donation.Total}</p>
            <div className="flex gap-7 justify-between items-center">
              <p className="text-[#141414] text-[20px] font-medium mt-3">
                {donation.Amount}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-[#50B848] text-[12px] mr-1">
                  {donation.percent}
                </p>
                {donation.Icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-3">
        <div className="w-[65%] border border-gray-200 rounded-md p-3">
          <p>Donation Overview</p>
          <div className="flex flex-col mt-5">
            <p className="text-[#043259] text-[17px] font-semibold">3.2M</p>
            <p className="text-[#454545] text-[13px]">
              Total donation{" "}
              <span className="text-[10px] text-[#027A48]">+2.8%</span>
            </p>
          </div>
          <div>
            <Reports />
          </div>
         <p className="text-[#1A1A1A] text-[18px]">Donation Frequency Type</p>
          {/* Two Color Progress Bar */}
          <div className="mt-10 mb-5"
            style={{
              width: "100%",
              backgroundColor: "#E0E0E0",  // Light gray background
              height: "10px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >

            <div
              style={{
                width: `${redWidth}%`,
                backgroundColor: color1,  // Red color
                height: "100%",
                float: "left",
              }}
            ></div>
            <div
              style={{
                width: `${blueWidth}%`,
                backgroundColor: color2,  // Blue color
                height: "100%",
                float: "left",
              }}
            ></div>
            
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col">
              <p className="text-[10px] text-[#939393]">Total</p>
              <p className="text-[18px] text-[#2E2E30] font-semibold">34,567 <span className="text-[10px] text-[#2E2E30]">Donations</span></p>
            </div>
            <div>
                <div className="flex gap-3">
                <div class="bg-[#043259] w-1 h-10 rounded-2xl"></div>
                 <div className=" flex flex-col">
                    <p>Recurring Donation</p>
                    <p className="text-[#77838F] text-[12px]">23,452 donations</p>
                 </div>
                </div>

            </div>
            <div>
                <div className="flex gap-3">
                <div class="bg-[#F5105C] w-1 h-10 rounded-2xl"></div>
                 <div className=" flex flex-col">
                    <p>One time Donation</p>
                    <p className="text-[#77838F] text-[12px]">23,452 donations</p>
                 </div>
                </div>

            </div>
          </div>
        </div>

        <div className="w-[40%] border border-gray-200 rounded-lg p-2">
          <div className="mb-2 mt-2">
            <p className="text-[17px]">Top Hero</p>
          </div>
          <table className="w-full">
            <tbody>
              {table.map((e, i) => (
                <tr
                  key={i}
                  className="flex gap-1 justify-between items-center mb-6 border-b border-gray-300"
                >
                  <td className="">
                    <div className="bg-[#EBEBEB] p-4 w-10 h-10 flex items-center justify-center rounded-full">
                      {e.initials}
                    </div>
                  </td>
                  <td className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="rounded-full bg-[#EBF3FF] w-10 h-10 flex items-center justify-center">
                        <Image
                          src={e.avartar}
                          alt="avatar"
                          width={40}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[11px]">{e.name}</p>
                        <div className="flex gap-3 items-center">
                          <div className="flex gap-3">
                            <Image
                              src={e.gold}
                              alt="badge"
                              width={20}
                              height={20}
                            />
                            <p className="text-[11px]">{e.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-col gap-2">
                      <p className="text-[11px]">{e.amount}</p>
                      <p className="text-[#9096A2] text-[11px]">{e.money}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
        
      </div>
    </div>
  );
}

export default page;
