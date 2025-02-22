import React from "react";

function Family() {
  return (
    <div className="px-2">
      <div className="flex flex-col w-[50%]">
        <div className="bg-[#D6EAFB80] p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#043259] text-[16px]">Family Background</p>
              <p className="text-[12px] text-[#043259]">
                Explore family dynamics influencing student needs
              </p>
            </div>
            <div className="bg-white p-2 rounded-md text-[#043259] text-[13px] cursor-pointer hover:bg-[#f0f0f0]">
              Edit
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-0 border border-gray-200 w-[50%] rounded-sm p-3">
         <p className="text-[12px] text-[#043259] mt-2">Olayinka is a 13-year-old in JSS 3 from a low-income family. After losing her father to illness two years ago, her mother became the sole provider for Olayinka and her two younger siblings. Her mother works as a petty trader, but her earnings barely cover basic needs like food, rent, and healthcare.</p>
      </div>
    </div>
  );
}

export default Family;
