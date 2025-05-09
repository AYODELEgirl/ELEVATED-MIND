import Image from "next/image";
import React from "react";
import Overview from "../../../../../assets/images/OverView.png";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-2 gap-3 p-3">
      <div className="">{children}</div>
      <div
        className=" rounded-2xl p-20"
        style={{
          background: "linear-gradient(to right, #DAEEFE 100%, #FAFAFA 100%)",
        }}
      >
        <p className="bg-white rounded-md p-2 text-[#8B919E] text-[13px] w-fit ">
          SCHOOL PORTAL FOR DONATION
        </p>
        <p className="w-[70%] text-[#5D5D5D] mt-2 text-[16px]">
          Manage your school and student Donations{" "}
          <span className="text-[#F5105C]">more professionally</span>
        </p>
        <Image
          src={Overview}
          alt="Overview Image"
          width={500}
          height={300}
          className="mt-3"
        />
      </div>
    </div>
  );
}
