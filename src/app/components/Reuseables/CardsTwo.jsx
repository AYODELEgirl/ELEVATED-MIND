"use client";
import { Progress } from "@arco-design/web-react";
export default function CardsTwo() {
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-md w-fit">
      <div className="flex gap-2">
        <div className="bg-white p-2 rounded-md flex flex-col w-fit px-3">
          <p className="font-thin text-[14px]">Aug</p>
          <p className="font-bold text-[24px]">2</p>
        </div>
        <div className="flex flex-col mt-1">
          <p className="text-[#1A1A1A] font-medium text-[20px]">Level 1</p>
          <p className="text-[#F5105C] bg-[#F5105C1A]  py-2 px-3 w-fit rounded-md text-[11px]">
            Random donation{" "}
          </p>
        </div>
      </div>

      <p className="text-[#858585] text-[12px] mt-3">Donation progress</p>
      <p>
        <span
          style={{ fontWeight: "700" }}
          className="text-[#1A1A1A] text-[13px] font-semibold"
        >
          ₦47,250.00 Donated
        </span>
        <span className="text-[#838383] text-[12px]">
          from ₦150,000.00 Donation
        </span>
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
            <p className="text-[#858585] text-[12px] ml-1">School</p>
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
              George College{" "}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-r border-l px-2 border-gray-200">
            <p className="text-[#858585] text-[12px]">Due Date</p>
            <p className="text-[#043259] text-[14px] whitespace-nowrap">
              5th Feb 2025
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#858585] text-[12px] whitespace-nowrap">
              Donation Amount
            </p>
            <p className="text-[#043259] text-[14px]">₦1,000.00</p>
          </div>
        </div>

        <div className="flex gap-5 border-t border-gray-200 pt-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1  px-2 border-gray-200 ">
              <p className="text-[#858585] text-[12px] whitespace-nowrap w-fit ">
                Payment Method
              </p>
              <p className="text-[#043259] text-[14px] whitespace-nowrap">
                Debit - **5689
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-r border-l px-2 border-gray-200 ">
            <p className="text-[#858585] text-[12px] ">Frequency</p>
            <p className="text-[#043259] text-[14px] whitespace-nowrap">
              Fri - Weekly
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#858585] text-[12px]">Donation Impact</p>
            <p className="text-[#043259] text-[14px]">5%</p>
          </div>
        </div>

        <p className="text-[#043259] px-6 py-2 rounded-md border border-[#043259] text-center">
          Go to Donation
        </p>
      </div>
    </div>
  );
}
