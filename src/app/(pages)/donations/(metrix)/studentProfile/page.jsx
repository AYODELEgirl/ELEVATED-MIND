"use client";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import React from "react";
import { Progress } from "@arco-design/web-react";
import pdf from "../../../../../assets/images/pdf.png";

import { FaTradeFederation } from "react-icons/fa";
export default function Page() {
  const tabs = [
    {
      name: "Family Background",
      text: "Olayinka is a 13-year-old in JSS 3 from a low-income family. After losing her father to illness two years ago, her mother became the sole provider for Olayinka and her two younger siblings. Her mother works as a petty trader, but her earnings barely cover basic needs like food, rent, and healthcare.",
    },
    {
      name: "Need for financial assistance",
      text: "With rising expenses and her mother's limited income, Olayinka's family is struggling to afford herr school fees. Her younger brother also needs medical care, adding financial pressure. Without assistance , Sarah risks dropping out of school.",
    },
    {
      name: "Hobbies and interest",
      text: "Olayinka is a dedicated student with a passion for science, aspiring to become a doctor. She participates in school debate club. Volunteers to help younger students and enjoys playing football and reading adventure novels in her free time.",
    },
    {
      name: "Career Aspirations",
      text: "Olayinka dreams of becoming a doctor so she can provide medical care to those in need especially in her community where access to healthcare is linmited. Inspired by the doctors who helped her family, she hopes to one day make a difference in the lives of others facing similar cahallenges.",
    },
  ];
  const secondTab = [
    {
      name: "1st term (2024/2025)",
      table: [
        { subject: "Mathematics", grade: "A" },
        { subject: "English", grade: "B" },
        { subject: "Integrated Science", grade: "A" },
        { subject: "Social Studies", grade: "B" },
        { subject: "Agricultural Science", grade: "A" },
        { subject: "Civic Education", grade: "A" },
        { subject: "Physical and Health Education", grade: "B" },
      ],
    },
    {
      name: "2nd term (2024/2025)",
      table: [
        { subject: "Mathematics", grade: "B" },
        { subject: "English", grade: "B" },
        { subject: "Integrated Science", grade: "B" },
        { subject: "Social Studies", grade: "B" },
        { subject: "Agricultural Science", grade: "A" },
        { subject: "Civic Education", grade: "B" },
        { subject: "Physical and Health Education", grade: "B" },
      ],
    },
    {
      name: "3rd term (2024/2025)",
      table: [
        { subject: "Mathematics", grade: "C" },
        { subject: "English", grade: "A" },
        { subject: "Integrated Science", grade: "A" },
        { subject: "Social Studies", grade: "A" },
        { subject: "Agricultural Science", grade: "A" },
        { subject: "Civic Education", grade: "A" },
        { subject: "Physical and Health Education", grade: "A" },
      ],
    },
  ];
  const supportingMaterials = [
    {
      img: pdf,
      letter: "Letters of Recommendation.pdf",
      time: "11 Sep, 2024 | 12:24pm . 13MB",
    },
    {
      img: pdf,
      letter: "Student's Personal Letter.pdf",
      time: "11 Sep, 2024 | 12:24pm . 13MB",
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);
  const familyBackgroundText =
    "Olayinka is a 13-year-old in JSS 3 from a low-income family. Afterlosing her father to illness two years ago, her mother became the soleprovider for Olayinka and her two younger siblings. Her mother works as a petty trader, but her earnings barely cover basic needs like food, rent, and healthcare";
  const financialText = "With rising expenses and her mother's limited income, Olayinka's family is struggling to afford herr school fees. Her younger brother also needs medical care, adding financial pressure. Without assistance , Sarah risks dropping out of school.";
  const hobbiesText = "Olayinka is a dedicated student with a passion for science, aspiring to become a doctor. She participates in school debate club. Volunteers to help younger students and enjoys playing football and reading adventure novels in her free time.";
  const carrerText = "Olayinka dreams of becoming a doctor so she can provide medical care to those in need especially in her community where access to healthcare is linmited. Inspired by the doctors who helped her family, she hopes to one day make a difference in the lives of others facing similar cahallenges.";
  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 pt-6 mb-4 ">
            <p className="rounded-full text-[15px] text-[#043259] bg-[#E4E4E4] p-2 w-10 h-10 flex justify-center items-center">
              OA
            </p>
            <p className="text-[#101828] text-[23px] font-semibold">
              Olayinka Akindele
            </p>
            <p className="text-[#F5105C] bg-[#F5105C26] text-[11px] rounded-3xl px-1 p-1 w-fit">
              . Lagos Preparatory
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Link
              href="/donations"
              className="z-50 bg-primary  cursor-pointer text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem]"
            >
              Donate to Olayinka Akindele
            </Link>
          </div>
        </div>
      </SecondLayout>
      <div className="bg-[#F5F5F5] mx-4 p-2 pt-3">
        <div className="bg-white mx-4 pt-4 rounded-md p-4">
          <div className="flex justify-between">
            <p className="text-[#043259] text-[20px]">Profile</p>
            <div className="flex gap-2 justify-center items-center text-[#043259]">
              <BsArrowLeft />
              <p className=" mb-[.2rem]">Back</p>
            </div>
          </div>
          <div className="border border-t-gray-50 mt-3 mb-3 w-[100%]"></div>

          <p
            style={{ fontWeight: "400", fontSize: "17px" }}
            className="text-[#1A1A1AB2] mb-5"
          >
            Student information<span className="text-[#F5105C]">*</span>
          </p>
          <div className="flex gap-9 ">
            <div className="flex gap-3 mb-9">
              <div className="rounded-full text-lg text-[#043259] bg-[#E4E4E4] p-2 w-12 h-12 flex justify-center items-center">
                OA{" "}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#1A1A1A] text-[15px] mt-1 ">
                  Olayinka Akindele
                </p>
                <p className="bg-[#F5105C1A] text-[#F5105C] text-[.5rem] w-fit p-1 rounded-md">
                  J. S. S 3
                </p>
              </div>
            </div>
            <div className="border-r-2 border-gray-200  h-[50px]"></div>
            <div className="flex gap-24">
              <div className="flex flex-col gap-1 mt-1 ">
                <p className="text-[#858585] text-[13px]">Gender</p>
                <p className="text-black text-[13px]">Female</p>
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <p className="text-[#858585] text-[13px]">Age</p>
                <p className="text-black text-[13px]">13</p>
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <p className="text-[#858585] text-[13px]">School</p>
                <p className="text-black text-[13px]">Lagos Preparatory</p>
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <p className="text-[#858585] text-[13px]">
                  Average performance
                </p>
                <p className="text-black text-[13px]">Excellence</p>
              </div>
            </div>
          </div>
          <p
            style={{ fontWeight: "400", fontSize: "17px" }}
            className="text-[#1A1A1AB2] mb-7"
          >
            Personal Background<span className="text-[#F5105C]">*</span>
          </p>

          <div className="flex items-center gap-[2rem] ">
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

          <section className="mt-4">
            {currentTab === "Family Background" ? (
              <div>
                <span className="inline-block w-[40%] text-[#043259] text-[13px]">
                  {familyBackgroundText}
                </span>
              </div>
            ) : currentTab === "Need for financial assistance" ? (
              <span className="inline-block w-[40%] text-[#043259] text-[13px]">
                {financialText}
              </span>
            ) : currentTab === "Hobbies and interest" ? (
              <span className="inline-block w-[40%] text-[#043259] text-[13px]">
                {hobbiesText}
              </span>
            ) : currentTab === "Career Aspirations" ? (
              <span className="inline-block w-[40%] text-[#043259] text-[13px]">
                {carrerText}
              </span>
            ) : null}
          </section>

          <p
            style={{ fontWeight: "600", fontSize: "17px" }}
            className="text-[#1A1A1AB2] mb-8 mt-8"
          >
            Academic Performance
            <span style={{ fontWeight: "400", fontSize: "10px" }}>
              (Previous Three Terms Results){" "}
            </span>{" "}
            <span className="text-[#F5105C]">*</span>
          </p>

          <div className="flex items-center gap-[2rem] ">
            {secondTab.map((e, i) => {
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

          <section className="mt-4">
            {secondTab.map((tab, index) =>
              currentTab === tab.name ? (
                <div key={index}>
                  <h3 className="text-[13px] mb-2">{tab.name}</h3>
                  <table className="w-[25%] table-auto border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#E9EDF5]"
                        }
                      >
                        <th className="px-4 py-2 border bg-[#E9EDF5] text-[12px] text-[#5A6376] w-1/2 whitespace-nowrap text-left">
                          Subject
                        </th>
                        <th className="px-4 py-2 border bg-[#E9EDF5] text-[12px] font-medium w-1/2 whitespace-nowrap text-left">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tab.table.map((item, idx) => (
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0 ? "bg-white" : "bg-[#E9EDF5]"
                          }
                        >
                          <td className="px-4 py-2 border text-[12px] text-[#5A6376] w-1/2 whitespace-nowrap">
                            {item.subject}
                          </td>
                          <td className="px-4 py-2 border text-[13px] font-medium w-1/2 whitespace-nowrap">
                            {item.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null
            )}
          </section>
          <p
            style={{ fontWeight: "400", fontSize: "17px" }}
            className="text-[#1A1A1AB2] mb-8 mt-8"
          >
            Academic Performance
            <span style={{ fontWeight: "400", fontSize: "14px" }}>
              (Previous Three Terms Results){" "}
            </span>{" "}
            <span className="text-[#F5105C]">*</span>
          </p>

          <div className="flex gap-7">
            <div className="flex flex-col gap-2">
              <p className="text-[#858585] text-[13px]">Raised</p>
              <p className="text-black text-[13px] font-semibold">
                <span className="text-[#858585]">#</span>
                100,000.00
              </p>
            </div>
            <div className="border-r-2 border-gray-200  h-[50px]"></div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-[#858585] text-[13px]">Goals</p>
                <p className="text-black text-[13px] font-semibold">
                  {" "}
                  <span className="text-[#858585]">#</span>
                  150,000.00
                </p>
              </div>
            </div>

            <div className="border-r-2 border-gray-200  h-[50px]"></div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-[#858585] text-[13px]">Left</p>
                <p className="text-black text-[13px] font-semibold">
                  <span className="text-[#858585]">#</span>
                  50,000.00{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-t-gray-50 mt-3 w-[100%]  mb-4"></div>

          <div className="flex gap-6">
            <div className="border border-[#EAECF0] rounded-md p-4 flex flex-col gap-2 w-[25%] justify-center">
              <p className="text-[#667085] text-[13px]">
                Total Amount of School Fee Donations{" "}
              </p>
              <p className="text-[#141414] text-[18px] font-semibold">
                ₦ 150,000.00{" "}
              </p>
            </div>

            <div className="border border-[#EAECF0] rounded-md p-4 flex flex-col gap-2 w-[25%] justify-center">
              <p className="mb-3 mt-2 text-[#858585] text-[13px] ">
                Donation Progress
              </p>
              <p className="text-[11px] text-black">
                ₦100,000.00 Donated <span>from ₦150,000.00 Donation</span>{" "}
              </p>
              <Progress
                percent="20"
                showText={false}
                color="#00984C"
                style={{ marginBottom: "15px", width: "90%", marginTop: "0px" }}
              />
            </div>
          </div>
          <p
            style={{ fontWeight: "400", fontSize: "18px" }}
            className="text-[#1A1A1AB2] mt-5"
          >
            Supporting Materials<span className="text-[#F5105C]">*</span>
          </p>

          <div className="grid grid-cols-2 gap-7 w-fit justify-center mt-5 ">
            {supportingMaterials.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between gap-12  items-center border border-[#EAECF0] rounded-md p-8"
                >
                  <div className="flex gap-2">
                    <Image
                      src={e.img}
                      alt="PDF Thumbnail"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col gap-2 mt-2">
                      <p className="text-[#000000] font-semibold text-[14px]">
                        {e.letter}
                      </p>
                      <p className="text-[#98A2B3] text-[11px]">{e.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="bg-[#043259] w-fit px-3 py-2 text-[11px] rounded-md text-white cursor-pointer">
                      View
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
