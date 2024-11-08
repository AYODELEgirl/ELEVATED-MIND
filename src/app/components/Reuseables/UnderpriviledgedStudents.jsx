import React from "react";
import { Progress } from "@arco-design/web-react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function UnderpriviledgedStudents({
  amountDonated,
  amountDonatedTwo,
  nairaAmountThree,
  Initials,
  donate,
  age,
  ageNumber,
  fees,
  feesAmount,
  performance,
  grade,
  Raised,
  naira,
  nairaAmount,
  nairaAmountTwo,
  more,
  Goals,
  number,
  progress,
  studentName,
  studentClass,
  Left
}) {
  const lessPriviledged = [
    {
      Initials: "OA",
      studentName: "Olayinka Akindele",
      studentClass: " S. S. S 1",
      donate: "Donate to Olayinka",
      progress: "Donation Progress",
      amountDonated: " ₦47,250.00 Donated",
      amountDonatedTwo: "from ₦150,000.00 Donation",
      age: "Age",
      ageNumber: "13",
      fees: "School fees",
      feesAmount: "₦250,000",
      performance: "Average performance",
      grade: "Excellent",
      Raised: "Raised",
      naira: "₦",
      nairaAmount: "180,000.00",
      Goals: "Goals",
      nairaAmountTwo: "₦500,000.00",
      nairaAmountThree: "₦120,000.00",
      more: "See more about Olayinka",
      number: "20",
      Left : "Left"
    },
    
  ];
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-md w-[100%]">
      <div className="flex gap-3">
        <div className="rounded-full text-lg text-[#043259] bg-[#E4E4E4] p-2 w-12 h-12 flex justify-center items-center">
          {Initials}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#1A1A1A] text-[15px] mt-1 ">{studentName}</p>
          <p className="bg-[#F5105C1A] text-[#F5105C] text-[.5rem] w-fit p-1 rounded-md">
            {studentClass}
          </p>
        </div>
      </div>

      <div className="rounded-md px-12 py-2 mt-6 mb-3 text-[#043259] border border-[#043259] text-[14px] flex justify-center items-center">
        {donate}{" "}
      </div>
      <p className="mb-3 mt-2 text-[#858585] text-[13px] ">{progress}</p>
      <p className="text-[11px] text-black">
        {amountDonated} <span>{amountDonatedTwo}</span>{" "}
      </p>
      <Progress
        percent={number}
        showText={false}
        color="#00984C"
        style={{ marginBottom: "15px", width: "90%", marginTop: "0px" }}
      />
      <div className="border border-t-gray-50 mt-3 w-[100%] "></div>
      <div className="flex flex-col gap-1 mt-1 ">
        <p className="text-[#858585] text-[13px]">{age}</p>
        <p className="text-black text-[13px]">{ageNumber}</p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%] "></div>

      <div className="flex flex-col gap-1 mt-1 ">
        <p className="text-[#858585] text-[13px]">{fees}</p>
        <p className="text-black text-[13px]">{feesAmount}</p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%] "></div>

      <div className="flex flex-col gap-1 mt-1 ">
        <p className="text-[#858585] text-[13px]">{performance}</p>
        <p className="text-black text-[13px]">{grade}</p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%] "></div>

      <div className="rounded-md p-4 bg-white mt-2">
        <div className="flex gap-2">
          <div>
            <p className="text-[#858585] text-[13px]">{Raised}</p>
            <p className="text-black text-[10px]">
              {" "}
              <span className="text-[#858585]">{naira}</span>
              {nairaAmount}
            </p>
          </div>
          <div className="border-r-2 border-gray-200  h-[50px]"></div>

          <div className="flex gap-2">
            <div>
              <p className="text-[#858585] text-[13px]">{Goals}</p>
              <p className="text-black text-[10px]">
                {" "}
                <span className="text-[#858585]">{naira}</span>
                {nairaAmountTwo}
              </p>
            </div>
          </div>

          <div className="border-r-2 border-gray-200  h-[50px]"></div>
          <div className="flex gap-2">
            <div>
              <p className="text-[#858585] text-[13px]">{Left}</p>
              <p className="text-black text-[10px]">
                {" "}
                <span className="text-[#858585]">{naira}</span>
                {nairaAmountThree}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-3 justify-center items-center mt-3"
        style={{ alignItems: "center" }}
      >
        <p className="text-[#043259] ">{more} </p>
        <MdKeyboardArrowRight className="text-[#043259] size-5" />
      </div>
    </div>
  );
}
