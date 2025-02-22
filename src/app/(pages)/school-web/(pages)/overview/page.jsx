"use client";
import React, { useState } from "react";
import Navbars from "../Navbars";
import blackPanel from "../../../../../assets/icons/overview/blackPanel.png";
import { GoArrowUpRight } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";
import DashboardAreaChart from "@/app/components/Charts/DashboardAreaChart";
import Image from "next/image";
import maleAvatar from "../../../../../assets/icons/overview/maleAvatar.png";
import goldBadge from "../../../../../assets/icons/overview/goldBadge.png";
import avatarTwo from "../../../../../assets/icons/overview/avatarTwo.png";
import avatarThree from "../../../../../assets/icons/overview/avatarThree.png";
import avatarFour from "../../../../../assets/icons/overview/avatarFour.png";
import avatarFive from "../../../../../assets/icons/overview/avatarFive.png";
import bronze from "../../../../../assets/icons/overview/bronze.png";
import silver from "../../../../../assets/icons/overview/silver.png";
import { TiArrowUnsorted } from "react-icons/ti";
// import { useRouter } from "next/router";
function Page() {
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
      amount: "#8.500",
      spanAmount: ".00",
      date: "4 Sep 2024",
    },
    {
      avartar: avatarTwo,
      name: "jaiye Emmanuel",
      class: "j.s.s 3",
      gold: goldBadge,
      price: "Gold",
      initials: "OA",
      nameTwo: "Olabisi Adekunle",
      amount: "#8.500",
      spanAmount: "00",
      date: "4 Sep 2024",
    },
    {
      avartar: avatarThree,
      name: "Adeshola Adeniyi",
      class: "j.s.s 3",
      gold: silver,
      price: "Gold",
      initials: "OA",
      nameTwo: "Olabisi Adekunle",
      amount: "#8.500",
      spanAmount: "00",
      date: "4 Sep 2024",
    },
    {
      avartar: avatarFour,
      name: "Samuel Oladosu",
      class: "j.s.s 3",
      gold: bronze,
      price: "Gold",
      initials: "OA",
      nameTwo: "Olabisi Adekunle",
      amount: "#8.500",
      spanAmount: "00",
      date: "4 Sep 2024",
    },
    {
      avartar: avatarFive,
      name: "Jaiye Iyanuoluwa",
      class: "j.s.s 3",
      gold: bronze,
      price: "Gold",
      initials: "OA",
      nameTwo: "Olabisi Adekunle",
      amount: "#8.500",
      spanAmount: "00",
      date: "4 Sep 2024",
    },
  ];
  const headers = [
    {
      id: 1,
      headerOne: "STUDENT NAME",
    },
    {
      id: 2,
      headerOne: "STUDENT CLASS",
    },
    {
      id: 3,
      headerOne: "DONATIONS RECIEVED",
    },
    {
      id: 4,
      headerOne: "START DATE",
    },
    {
      id: 5,
      headerOne: "END DATE",
    },
  ];
  const donationTable = [
    {
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      donationsReceived: "₦629,000.00",
      startDate: "28th Aug 2024",
      endDate: "28th Aug 2024",
      Initials: "OA",
    },
    {
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      donationsReceived: "₦629,000.00",
      startDate: "28th Aug 2024",
      endDate: "28th Aug 2024",
      Initials: "OA",
    },
    {
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      donationsReceived: "₦629,000.00",
      startDate: "28th Aug 2024",
      endDate: "28th Aug 2024",
      Initials: "OA",
    },
    {
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      donationsReceived: "₦629,000.00",
      startDate: "28th Aug 2024",
      endDate: "28th Aug 2024",
      Initials: "OA",
    },
  ];    
  return (
    <div>
      <Navbars text={"Dashboard"} img={blackPanel} />
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col gap-1">
          <p className="text-[20px] text-[#090814] font-medium">Dashboard</p>
          <p className="text-[#667085] text-[13px]">
            All general information appears in this field.
          </p>
        </div>
        <div className="bg-[#F2F2F2] rounded-md px-2 flex w-fit gap-3 text-[#1A1A1A80] ">
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
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4  mt-3"
          >
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
        <div className="w-[60%] border border-gray-200 rounded-lg p-5">
          <p className="text-[#090814]">Donations received</p>
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-[#667085]">
              See how your donations collected during reporting period
            </p>
            <div className="bg-[#1018280D] p-2 rounded-md flex gap-2">
              <FiCalendar size={15} className="text-[#888888] mt-1" />
              <p className="text-[#888888]">custom</p>
            </div>
          </div>
          <DashboardAreaChart />
        </div>
        <div className="w-[40%] border border-gray-200 rounded-lg p-5">
          <div className="flex justify-between">
            <p>Recent Transactions</p>
            <p className="border border-gray-200 px-2 py-1 rounded-lg">
              See All
            </p>
          </div>
          <table className="w-full">
            <tbody>
              {table.map((e, i) => {
                return (
                  <tr
                    key={i}
                    className="flex gap-1 justify-between items-center mb-6 border-b border-gray-300 "
                  >
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
                    <td className="flex gap-3">
                      <div className="bg-[#EBEBEB] p-4 w-8 h-8 flex items-center justify-center rounded-full">
                        {e.initials}
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[11px]">{e.nameTwo}</p>
                        <p className="text-[11px]">J.S.S 3</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <p className="text-[11px]">
                          {e.amount}
                          <span className="text-[10px] text-[#9096A2]">
                            {e.spanAmount}
                          </span>
                        </p>
                        <p className="text-[#9096A2] text-[11px]">{e.date}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="w-[70%] border border-gray-200 p-5 rounded-lg">
          <p className="text-[#090814] text-[17px] font-medium">
            Underpriviledged Students
          </p>
          <div className="flex justify-between">
            <p className="text-[12px] text-[#667085]">
              See how underprivileged students and their journeys. Click there
              to view all students
            </p>
            <p className="border border-gray-200 px-2 rounded">See all</p>
          </div>
          <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
            <thead>
              <tr className="bg-gray-200 w-full ">
                {headers.map((e, i) => {
                  return (
                    <th
                      className={`${
                        i === 0 ? "px-3" : "px-0"
                      }  py-[.4rem] text-[8px]  text-[#687182] font-normal`}
                      key={i}
                    >
                      <div className="flex items-center">
                        <div> {e.headerOne}</div>

                        {e?.headerOne && (
                          <div>
                            <TiArrowUnsorted size={11} />
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {donationTable.map((e, i) => {
                return (
                  <tr key={i} className="border-b border-gray-200">
                    <td className=" gap-3 w-[18%] whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full text-[10px] text-[#043259] bg-[#E4E4E4] p-2 w-10 h-10 flex justify-center items-center">
                          {e.Initials}
                        </div>
                        <p className="text-black text-[10px] ">
                          {e.studentName}
                        </p>
                      </div>
                    </td>
                    <td className=" py-4 text-[#344054] w-[10%] text-[11px]">
                      {e.studentClass}
                    </td>
                    <td className="py-4 text-[#344054] w-[10%] text-[11px]">
                      {e.donationsReceived}
                    </td>

                    <td className="py-4 text-[#344054] w-[10%] text-[11px]">
                      {e.startDate}
                    </td>
                    <td className="py-4 text-[#344054] w-[10%] text-[11px]">
                      {e.endDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-[30%] border border-gray-200 p-5 rounded-lg">
          <p className="text-[#090814] text-[17px] font-medium">
            Donation Distribution{" "}
          </p>
          <p className="text-[10px] text-[#667085]">
            Track the distribution of funds across types of donation{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
