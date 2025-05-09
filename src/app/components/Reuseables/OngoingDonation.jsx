import Image from "next/image";
import { Progress } from "@arco-design/web-react";

export default function OngoingDonation({
  studentName,
  schoolName,
  img,
  donationProgress,
  amountDonated,
  amountDonatedTwo,
  donation,
  donationAmount,
  date,
  startDate,
  frequency,
  recurring,
  payment,
  debit,
  raised,
  raisedAmount,
  goals,
  goalsAmount,
  left,
  leftAmount,
  number
}) {
  return (
    <div className="bg-[#F5F5F5] rounded-md w-[100%] p-4 mb-5 ">
      <div className="flex gap-2">
        <Image src={img} width={50}  alt=""/>
        <div className="flex flex-col gap-1">
          <p>{studentName}</p>
          <p className="bg-[#F5105C1A] text-[#F5105C] rounded-md text-[10px] p-1 w-fit">
            {schoolName}
          </p>
        </div>
      </div>
      <p>{donationProgress}</p>
      <p className="text-[11px]">
        {amountDonated} <span>{amountDonatedTwo}</span>{" "}
      </p>
      <Progress
        percent={number}
        showText={false}
        color="#00984C"
        style={{ marginBottom: "15px", width: "90%", marginTop: "0px" }}
      />
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <div className="flex  flex-col gap-2 py-2">
        <p>{donation}</p>
        <p>{donationAmount} </p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <div className="flex   flex-col gap-2 py-2">
        <p>{date}</p>
        <p>{startDate}</p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <div className=" flex   flex-col gap-2 py-2">
        <p>{frequency}</p>
        <p>{recurring}</p>
      </div>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <div className="flex   flex-col gap-2 py-2">
        <p>{payment}</p>
        <p>{debit}</p>
      </div>
      <div className="bg-[white] rounded-lg flex gap-3 p-5">
        <div className="flex flex-col gap-2">
          <p>{raised}</p>
          <p>{raisedAmount}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{goals}</p>
          <p>{goalsAmount}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{left}</p>
          <p>{leftAmount}</p>
        </div>
      </div>
      <p className="text-[#043259] px-6 py-2 rounded-md border border-[#043259] text-center mt-3">
        Go to Donation
      </p>
    </div>
  );
}
