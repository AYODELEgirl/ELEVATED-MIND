import Image from "next/image";
import React from "react";
import green from "../../../../../../assets/icons/overview/green.png";
import red from "../../../../../../assets/icons/overview/red.png"
function All() {
  return (
    <div>
      <p>All Notifications</p>
      <div className="border border-t-gray-50 mt-3 w-[100%] mb-2"></div>
      <div className="flex flex-col gap-4">
        <div className="p-4 rounded-md bg-[#F9FAFB] flex flex-col w-[60%]">
          <div className="flex items-center gap-3">
            <div className="bg-[#50B84826] h-10 rounded-md p-2 ">
              <Image src={green} alt="vector" />
            </div>
            <p>New Supported Student Added</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[#5F5F67] text-[13px]">
              Olanike Adekunle is on board.
            </p>
            <p className="text-[#1A1A1AE5] text-[13px]">20 Sep 2024.</p>
          </div>
        </div>
        <div className="p-4 rounded-md bg-[#F9FAFB] flex flex-col w-[60%]">
          <div className="flex items-center gap-3">
            <div className="bg-[#50B84826] h-10 rounded-md p-2 ">
              <Image src={green} alt="vector" />
            </div>
            <p>Password Successfully Changed</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[#5F5F67] text-[13px]">
            Your password is successfully changed to new one            </p>
            <p className="text-[#1A1A1AE5] text-[13px]">20 Sep 2024.</p>
          </div>
        </div>
        <div className="p-4 rounded-md bg-[#F9FAFB] flex flex-col w-[60%]">
          <div className="flex items-center gap-3">
            <div className="bg-[#50B84826] h-10 rounded-md p-2 ">
              <Image src={green} alt="vector" />
            </div>
            <p>Donation Payment Successfully</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[#5F5F67] text-[13px]">
            Dr. Kolade Adepoju successfully donated ₦50,000.00 to Olabisi Adekunle            </p>
            <p className="text-[#1A1A1AE5] text-[13px]">20 Sep 2024.</p>
          </div>
        </div>
        <div className="p-4 rounded-md bg-[#F9FAFB] flex flex-col w-[60%]">
          <div className="flex items-center gap-3">
            <div className="bg-[#50B84826] h-10 rounded-md p-2 ">
              <Image src={red} alt="vector" />
            </div>
            <p>Donation Payment Failed</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[#5F5F67] text-[13px]">
            Dr. Kolade Adepoju failed donating ₦50,000.00 to Olabisi Adekunle            </p>
            <p className="text-[#1A1A1AE5] text-[13px]">20 Sep 2024.</p>
          </div>
        </div>
        <div className="p-4 rounded-md bg-[#F9FAFB] flex flex-col w-[60%]">
          <div className="flex items-center gap-3">
            <div className="bg-[#50B84826] h-10 rounded-md p-2 ">
              <Image src={green} alt="vector" />
            </div>
            <p>Random Donation Payment Successfully</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[#5F5F67] text-[13px]">
            Dr. Kolade Adepoju successfully donated ₦50,000.00 to Lagos Preparatory            </p>
            <p className="text-[#1A1A1AE5] text-[13px]">20 Sep 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
