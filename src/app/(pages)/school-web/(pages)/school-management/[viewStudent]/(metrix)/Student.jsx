"use client";
import Image from "next/image";
import React from "react";
import gender from "../../../../../../../assets/icons/overview/gender.png";
import date from "../../../../../../../assets/icons/overview/date.png";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Progress } from "@arco-design/web-react";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { TiArrowUnsorted } from "react-icons/ti";
import maleAvatar from "../../../../../../../assets/icons/overview/maleAvatar.png";
import goldBadge from "../../../../../../../assets/icons/overview/goldBadge.png";
function Student() {
  const [active, setActive] = useState(null);
  const handleClick = (index) => setActive(index);
  const headers = [
    {
      id: 1,
      headerOne: "DONOR NAME",
    },
    {
      id: 2,
      headerOne: "TRANSACTION ID",
    },
    {
      id: 3,
      headerOne: "DONATION AMOUNT",
    },
    {
      id: 4,
      headerOne: "TRANSACTION DATE",
    },
    {
      id: 5,
      headerOne: "FREQUENCY DATA",
    },
  ];
  const donorTable = [
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount : "#29,000.00",
      transactionId: "001",
      gold: goldBadge,
      price: "Gold",
      amount: "#8.500",
      spanAmount: ".00",
      transactionDate: "17 - 09 - 2024",
      frequencyStatus: "Monthly",
    },
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount : "#29,000.00",
      transactionId: "001",
      gold: goldBadge,
      price: "Gold",
      amount: "#8.500",
      spanAmount: ".00",
      transactionDate: "17 - 09 - 2024",
      frequencyStatus: "Monthly",
    },
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount : "#29,000.00",
      transactionId: "001",
      gold: goldBadge,
      price: "Gold",
      amount: "#8.500",
      spanAmount: ".00",
      transactionDate: "17 - 09 - 2024",
      frequencyStatus: "Monthly",
    },
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount : "#29,000.00",
      transactionId: "001",
      gold: goldBadge,
      price: "Gold",
      amount: "#8.500",
      spanAmount: ".00",
      transactionDate: "17 - 09 - 2024",
      frequencyStatus: "Monthly",
    },
    {
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount : "#29,000.00",
      transactionId: "001",
      gold: goldBadge,
      price: "Gold",
      amount: "#8.500",
      spanAmount: ".00",
      transactionDate: "17 - 09 - 2024",
      frequencyStatus: "Monthly",
    },
   
   
    
  ];
  return (
    <div>
      <div className="bg-[#EBEBEB] p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="bg-[#568FED] text-[19px] p-4 rounded-full w-16 h-16 text-white">
            OA
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#043259] text-[19px]">Olabisi Adekunle</p>
            <div className="flex justify-between items-center gap-2">
              <p className="flex rounded-xl px-3 py-1 text-[12px] bg-[#E2E2E2] text-[#667085]">
                j s s 3
              </p>
              <p className="text-[#667085] text-[13px]">
                Average Performance: Excellent
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-[#043259] rounded-md px-3 py-1">
          Edit Student Profile
        </div>
      </div>
      <div className="flex gap-36 mt-4 items-start">
        {" "}
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-6">
            <div className="flex gap-5">
              <div className="border border-gray-200 rounded-lg p-3 flex flex-col gap-3">
                <div className="flex gap-5 p-2">
                  <Image src={gender} alt="icon" />
                  <p className="text-[#909090] text-[13px]">
                    Gender : <span className="text-[#212121]">Female</span>
                  </p>
                </div>

                <div className="border border-t-gray-50"></div>

                <div className="flex gap-5 p-2">
                  <Image src={date} alt="icon" className="text-[#909090]" />
                  <p className="text-[#909090] text-[13px]">
                    Admission Date :{" "}
                    <span className="text-[#212121]">23 - 07 - 2020</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p>Profile</p>
              <p className="text-[#909090] text-[13px]">
                Date of birth :{" "}
                <span className="text-[#212121]">15 - 11 - 2010</span>
              </p>
              <p className="text-[#909090] text-[13px]">
                Place of birth : <span className="text-[#212121]">Lagos</span>
              </p>
              <p className="text-[#909090] text-[13px]">
                Religion : <span className="text-[#212121]">Christian</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-[#909090]">
              STUDENT DONATION PROGRESS
            </p>
            <div className="mt-3">
              <p className="text-[12px] whitespace-nowrap">
                {" "}
                #300,000{" "}
                <span className="text-[#838383] text-[12px]">from</span>{" "}
                #500,000{" "}
                <span className="text-[#838383] text-[12px]">Donation</span>{" "}
              </p>
            </div>
            <Progress
              percent={50}
              showText={false}
              color="#00984C"
              style={{
                marginBottom: "15px",
                width: "50%",
                marginTop: "0px",
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-[#909090]">CONTACT INFORMATION</p>
          <div className="flex gap-4 items-center mt-2">
            <div className="border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center p-2">
              <Image
                src={gender}
                alt="gender"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#909090] text-[13px]">Parent/Guardian</p>
              <p className="text-[13px]"> Mr. Adekunle Ajala</p>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <div className="border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center p-2">
              <CiPhone />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#909090] text-[13px]">Phone Number</p>
              <p className="text-[13px]">(234) 800 234 4567</p>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-2">
            <div className="border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center p-2">
              <IoLocationOutline />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#909090] text-[13px]">Home Address</p>
              <p className="text-[13px]">24, Sandy street, Agege, Lagos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-t-gray-50 w-[100%] mt-3"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col gap-3">
          <p className="text-[20px] text-[#090814] font-medium">
            Hero Transaction History
          </p>
          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-lg max-w-[600px] w-full">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for donor"
              className="text-[12px] text-[#667085] flex-grow outline-none w-full"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#F2F2F2] rounded-md px-2 flex w-fit gap-3 p-2 text-[#1A1A1A80]  ">
            {["Total", "Last week", "Last month", "Today"].map(
              (text, index) => (
                <p
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer p-1 ${
                    active === index ? "text-black bg-white rounded-md" : ""
                  }`}
                >
                  {text}
                </p>
              )
            )}
          </div>
          <div className="bg-[#F2F2F2] p-2 rounded-md flex gap-2">
            <FiCalendar size={15} className="text-[#888888] mt-1" />
            <p className="text-[#888888]">custom</p>
          </div>{" "}
        </div>
      </div>
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
        <thead>
          <tr className="bg-gray-200 w-full ">
            {headers.map((e, i) => (
              <th
                key={i}
                className={`${
                  i === 0 ? "px-3" : "px-0"
                } py-[.4rem] text-[11px] text-[#687182] font-normal`}
              >
                <div className="flex items-center">
                  <div>{e.headerOne}</div>
                  {e?.headerOne && (
                    <div>
                      <TiArrowUnsorted size={11} />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {donorTable.map((e, i) => {
            return (
              <tr key={i} className="border-b border-gray-300">
                <td className="flex items-center gap-3">
                  <div className="flex gap-2 mt-2">
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
                <td className="py-3 text-[#344054] w-[13%] text-[13px]">{e.transactionId}</td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">{e.donationAmount}</td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">{e.transactionDate}</td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">
                <p className="bg-[#04325926] rounded-md p-2 w-fit">{e.frequencyStatus}</p>
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
