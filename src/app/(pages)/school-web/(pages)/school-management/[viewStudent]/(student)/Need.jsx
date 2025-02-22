import React from "react";

function Need() {
  return (
    <div className="px-2">
      <div className="flex flex-col w-[50%]">
        <div className="bg-[#D6EAFB80] p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#043259] text-[16px]">Need For Financial Assistance</p>
              <p className="text-[12px] text-[#043259]">
              Explain student need for financial assistance
              </p>
            </div>
            <div className="bg-white p-2 rounded-md text-[#043259] text-[13px] cursor-pointer hover:bg-[#f0f0f0]">
              Edit
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-0 border border-gray-200 w-[50%] rounded-sm p-3">
         <p className="text-[12px] text-[#043259] mt-2">With rising expenses and her mother's limited income, Olayinka's family is struggling to afford her school fees. Her younger brother also needs medical care, adding financial pressure. Without assistance, Sarah risks dropping out of school.</p>
      </div>
    </div>
  );
}

export default Need;
