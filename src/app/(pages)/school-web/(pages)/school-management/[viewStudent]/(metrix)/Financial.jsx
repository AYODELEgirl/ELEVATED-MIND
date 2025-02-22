import React from "react";

function Financial() {
  return (
    <div className="w-[40%] mt-3">
      <div className="flex justify-between">
        <p className="text-[#333B4A] text-[]16px">Financial Needs</p>
        <p className="bg-[#333B4A] px-4 py-1 rounded-md text-white">
          Save Changes
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="text-[#475367] text-[14px]">
          Total Amount of School Fee Donations
        </label>
        <input
          htmlFor=""
          className="border border-gray-200 rounded-md py-3 text-[16px] px-2"
          placeholder="#"
        ></input>
      </div>
      <div className="border border-t-gray-50  mt-4"></div>
      <div className="flex gap-10 mt-5">
        <div className="flex flex-col gap-2">
          <p className="text-[#858585]">Raised</p>
          <p><span className="text-[#858585]">#</span>0.00</p>
        </div>
        <div className="border border-r-gray-50"></div>
        <div className="flex flex-col gap-2">
          <p className="text-[#858585]">Goals</p>
          <p><span className="text-[#858585]">#</span>0.00</p>
        </div>
        <div className="border border-r-gray-50"></div>

        <div className="flex flex-col gap-2">
          <p className="text-[#858585]">Left</p>
          <p><span className="text-[#858585]">#</span>0.00</p>
        </div>
      </div>
    </div>
  );
}

export default Financial;
