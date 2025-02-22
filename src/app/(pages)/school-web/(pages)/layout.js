"use client"
import Image from "next/image";
import React from "react";
import FrameWhite from "../../../../assets/icons/overview/FrameWhite.png";
import ElevatedWhite from "../../../../assets/icons/overview/ElevatedWhite.png";
import { IoIosArrowDown } from "react-icons/io";
import panel from "../../../../assets/icons/overview/panel.png";
import help from "../../../../assets/icons/overview/help.png";
import settings from "../../../../assets/icons/overview/settings.png";
import transaction from "../../../../assets/icons/overview/transaction.png";
import report from "../../../../assets/icons/overview/report.png";
import studentIcon from "../../../../assets/icons/overview/studentIcon.png";
import Donations from "../../../../assets/icons/overview/Donations.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

function layout({ children }) {
  const router = useRouter();
  console.log(window.location.pathname) 
  const handleStudentManagement = () => {
    router.push('/school-web/school-management');
  };
  const handleOverview = () => {
    router.push('/school-web/overview');
  };
  const handleDonations = () => {
    router.push('/school-web/donations');
  };
  const handleTransactions = () => {
    router.push('/school-web/transaction');
  };
  const handleHelp = () => {
    router.push('/school-web/help');
  };
  const handleSettings = () => {
    router.push('/school-web/schoolSettings');
  };
const handleReport = () => {
  router.push('/school-web/reports')
}

const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    // Check if the current path includes "auth"
    setIsAuthPage(window.location.pathname.includes("auth"));
  }, [window.location.pathname]);
 

  return (
    <div className="flex gap-4">
      
      {!isAuthPage && <div className="w-[20%] bg-[#043259] p-4">
        <div className="flex items-center gap-4">
          <Image src={FrameWhite} width={30} alt="frame" />
          <Image src={ElevatedWhite} width={150} alt="Elevated" />
        </div>
        <div className="bg-[#295172] p-2 mt-3 rounded-2xl text-[#FFFFFF99] text-[12px]">
          <p>School</p>
          <div className="bg-[#FFFFFF26] p-3 mt-3 rounded-2xl text-[#FFFFFF99] text-[12px]">
            <p className="flex justify-between items-center">
              Lagos Preparatory School
              <IoIosArrowDown />
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p    className="text-[#FFFFFF99] text-[13px] mb-3">Overview</p>
          <div  onClick={handleOverview}className="flex gap-4 items-center bg-transparent hover:bg-[#FFFFFF26] rounded-3xl p-3 cursor-pointer">
            <Image src={panel} alt="panel" />
            <p   className="text-[13px] text-[#FFFFFFDE] ">Dashboard</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[#FFFFFF99] text-[13px] mb-3">Student</p>
          <div onClick={handleStudentManagement} className="flex gap-4 items-center cursor-pointer bg-transparent hover:bg-[#FFFFFF26] rounded-3xl p-3">
            <Image src={studentIcon} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Student management</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[#FFFFFF99] text-[13px] mb-3">Donation</p>
          <div onClick={handleDonations} className="flex gap-4 items-center bg-transparent cursor-pointer hover:bg-[#FFFFFF26] rounded-3xl p-3">
            <Image src={Donations} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Donation </p>
          </div>

          <div onClick={handleTransactions} className="flex gap-4 items-center bg-transparent hover:bg-[#FFFFFF26] cursor-pointer rounded-3xl p-3">
            <Image src={transaction} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Transactions</p>
          </div>

          <div onClick={handleReport} className="flex gap-4 items-center bg-transparent hover:bg-[#FFFFFF26] rounded-3xl p-3 cursor-pointer">
            <Image  src={report} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Reports</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[#FFFFFF99] text-[13px] mb-3">Support</p>
          <div onClick={handleHelp} className="flex gap-4 items-center bg-transparent hover:bg-[#FFFFFF26] rounded-3xl p-3 cursor-pointer">
            <Image src={help} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Help & Support</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[#FFFFFF99] text-[13px] mb-3">Home</p>
          <div  onClick={handleSettings} className="flex gap-4 items-center bg-transparent hover:bg-[#FFFFFF26] rounded-3xl p-3 cursor-pointer">
            <Image src={settings} alt="panel" />
            <p className="text-[13px] text-[#FFFFFFDE]">Settings</p>
          </div>
        </div>
      </div> } 
      <div className={` ${!isAuthPage ? "w-[80%]" : "w-[100%]"}`}>
        {children}
      </div>
    </div>
  );
}

export default layout;
