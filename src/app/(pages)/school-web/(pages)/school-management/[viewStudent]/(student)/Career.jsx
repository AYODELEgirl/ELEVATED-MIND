import React from "react";

function Family() {
  return (
    <div className="px-2">
      <div className="flex flex-col w-[50%]">
        <div className="bg-[#D6EAFB80] p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#043259] text-[16px]">Career Aspirations</p>
              <p className="text-[12px] text-[#043259]">
              Describe student career aspirations and interests              </p>
            </div>
            <div className="bg-white p-2 rounded-md text-[#043259] text-[13px] cursor-pointer hover:bg-[#f0f0f0]">
              Edit
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-0 border border-gray-200 w-[50%] rounded-sm p-3">
         <p className="text-[12px] text-[#043259] mt-2">Olayinka dreams of becoming a doctor so she can provide medical care to those in need, especially in her community where access to healthcare is limited. Inspired by the doctors who helped her family, she hopes to one day make a difference in the lives of others facing similar challenges.</p>
      </div>
    </div>
  );
}

export default Family;
