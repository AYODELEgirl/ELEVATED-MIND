import React from "react";

function Family() {
  return (
    <div className="px-2">
      <div className="flex flex-col w-[50%]">
        <div className="bg-[#D6EAFB80] p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-[#043259] text-[16px]">Hobbies And Interest</p>
              <p className="text-[12px] text-[#043259]">
              Describe student hobbies and interests.              </p>
            </div>
            <div className="bg-white p-2 rounded-md text-[#043259] text-[13px] cursor-pointer hover:bg-[#f0f0f0]">
              Edit
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-0 border border-gray-200 w-[50%] rounded-sm p-3">
         <p className="text-[12px] text-[#043259] mt-2">Olayinka is a dedicated student with a passion for science, aspiring to become a doctor. She participates in her school’s debate club, volunteers to help younger students, and enjoys playing football and reading adventure novels in her free time.</p>
      </div>
    </div>
  );
}

export default Family;
