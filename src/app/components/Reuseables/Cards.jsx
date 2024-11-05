"use client";

import { Progress } from "@arco-design/web-react";

export default function Cards({
  month,
  date,
  studentName,
  term,
  donation,
  amountDonated,
  amountDonatedTwo,
  school,
  schoolName,
  dueDate,
  due,
  donationAmount,
  donationPrice,
  payment,
  debit,
  frequency,
  weekly,
  impact,
  percentage,
}) {
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-md w-fit mb-5">
      <div className="flex gap-2">
        <div className="bg-white p-2 rounded-md flex flex-col w-fit px-3">
          <p className="font-thin text-[14px]">{month}</p>
          <p className="font-bold text-[24px]">{date}</p>
        </div>
        <div className="flex flex-col mt-1">
          <p className="text-[#1A1A1A] font-medium text-[20px]">
            {studentName}
          </p>
          <p className="text-[#F5105C] bg-[#F5105C1A]  py-2 px-3 w-fit rounded-md text-[11px]">
            {term}
          </p>
        </div>
      </div>

      <p className="text-[#858585] text-[12px] mt-3">{donation}</p>
      <p>
        <span
          style={{ fontWeight: "700" }}
          className="text-[#1A1A1A] text-[13px] font-semibold"
        >
          {amountDonated}
        </span>
        <span className="text-[#838383] text-[12px]">{amountDonatedTwo}</span>
      </p>

      <Progress
        percent={30}
        showText={false}
        color="#00984C"
        style={{ marginBottom: "15px", width: "90%", marginTop: "0px" }}
      />

      <div className="flex flex-col gap-4">
        <div className="flex gap-5 border-t border-gray-200 pt-3">
          <div className="flex flex-col gap-1 w-[30%] ">
            <p className="text-[#858585] text-[12px] ml-1">{school}</p>
            <p
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                width: "50px",
              }}
              className="text-[#043259] text-[14px] ml-1"
            >
              {schoolName}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-r border-l px-2 border-gray-200 ">
            <p className="text-[#858585] text-[12px]">{due}</p>
            <p className="text-[#043259] text-[14px] whitespace-nowrap">
              {dueDate}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#858585] text-[12px] whitespace-nowrap">
              {donationAmount}
            </p>
            <p className="text-[#043259] text-[14px]">{donationPrice}</p>
          </div>
        </div>

        <div className="flex gap-5 border-t border-gray-200 pt-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1  px-2 border-gray-200 ">
              <p className="text-[#858585] text-[12px] whitespace-nowrap w-fit ">
                {payment}
              </p>
              <p className="text-[#043259] text-[14px] whitespace-nowrap">
                {debit}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-r border-l px-2 border-gray-200 ">
            <p className="text-[#858585] text-[12px] ">{frequency}</p>
            <p className="text-[#043259] text-[14px] whitespace-nowrap">
              {weekly}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#858585] text-[12px]">{impact}</p>
            <p className="text-[#043259] text-[14px]">{percentage}</p>
          </div>
        </div>

        <p className="text-[#043259] px-6 py-2 rounded-md border border-[#043259] text-center">
          Go to Donation
        </p>
      </div>
    </div>
  );
}
