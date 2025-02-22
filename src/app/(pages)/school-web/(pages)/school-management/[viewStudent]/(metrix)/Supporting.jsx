import Image from "next/image";
import React from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

function Supporting() {
  return (
    <div className="w-[60%] mt-3">
      <p className="text-[#333B4A]">Letter of Recommendation</p>
      <div className="border border-gray-200 p-5 mt-4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="bg-[#F0F2F5] rounded-full w-12 h-12 flex items-center justify-center">
              <RiUploadCloud2Line size={24} />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-black text-[12px]">
                Upload Student Recommendation Letter
              </p>
              <p className="text-[#98A2B3] text-[12px]">
                PDF format . Max. 5MB
              </p>
            </div>
          </div>
          <div className="bg-[#043259] rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-[#035F84]">
            Upload
          </div>
        </div>
      </div>


      <p className="text-[#333B4A] mt-3">Student Personal Letter</p>

      <div className="border border-gray-200 p-5 mt-4 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="bg-[#F0F2F5] rounded-full w-12 h-12 flex items-center justify-center">
              <RiUploadCloud2Line size={24} />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-black text-[12px]">
              Upload Student’s Personal Letter
              </p>
              <p className="text-[#98A2B3] text-[12px]">
                PDF format . Max. 5MB
              </p>
            </div>
          </div>
          <div className="bg-[#043259] rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-[#035F84]">
            Upload
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supporting;
