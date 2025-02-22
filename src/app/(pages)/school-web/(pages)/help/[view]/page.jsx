import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import Navbars from "../../Navbars";
import helpIcon from "../../../../../../assets/icons/overview/helpIcon.png";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import pdf from "../../../../../../assets/icons/overview/pdf.png";
function page() {
  return (
    <div>
      <Navbars text={"Help and support"} img={helpIcon} />
      <div className="flex justify-between mt-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <BsArrowLeft className="text-[#043259]" />
            <p className="text-[#043259] text-[14px]">
              Back to Help & Support{" "}
            </p>
          </div>
          <div>
            <p className="text-[18px] text-[#090814] ml-6">Ticket ID: 0017</p>
          </div>
        </div>
        <div className="bg-[#043259] flex items-center gap-2 text-white rounded-md py-1 px-4 cursor-pointer">
          <LuPlus size={20} />
          <p className="text-[12px] font-medium">Add student</p>
        </div>
      </div>
      <div className="border border-t-gray-50 w-[100%] mt-3"></div>
      <div className="border border-gray-200 p-3 rounded-xl mt-2 p-4">
        <p className="text-[13px] text-[#10182880]">
          issue : <span className="text-black">Payment</span>
        </p>
        <div className="flex gap-2">
          <p className="bg-[#FEF3F2] text-[#B42318] rounded-2xl px-2 py-1 text-[10px]">
            High
          </p>
          <p className="bg-[#F2F4F7] text-[#344054] rounded-2xl px-2 py-1 text-[10px]">
            Pending
          </p>
        </div>
        <div className="border border-t-gray-50 w-[100%] mt-3 "></div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#909090] mb-3 mt-2 ">STUDENT</p>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-2 bg-[#E4E4E4] text-[#043259] text-[12px] w-12 h-12 flex items-center justify-center">
                OA
              </div>

              <div className="flex flex-col">
                <p>
                  Olabisi Adekunle{" "}
                  <span className="text-[#5A6376] text-[12px]"> (J.s.s 1)</span>
                </p>
                <p className="text-[#5A6376] text-[13px]">
                  {" "}
                  12th of October, 09:11am
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#464F60] text-[16px] mt-9 mb-5">
                Subject: Urgent: Payment Processing Issue
              </p>
              <p className="text-[#464F60] mb-4">Hi Support,</p>
              <p className="text-[#464F60] text-[13px]">
                {" "}
                I need help with a payment processing issue. The Ticket ID is
                000253 - VISA <br /> card transaction is returning a failed
                payment after charging the donor. I need to <br /> resolve this
                quickly, as I plan to send out this student donation today.
              </p>
              <p className="text-[#464F60] text-[13px] mt-2 mb-1">
                Can you please look into it ASAP?
              </p>
              <p className="text-[#464F60] mt-3 ">Thanks,</p>
              <p className="text-[#464F60] ">Lagos Preparatory School</p>
            </div>
            <div>
              <p className="text-[#464F60] mb-3 mt-4 ">2 Attachments</p>
              <div className="flex justify-between gap-4">
                <div className="border border-[#807CEA] rounded-lg p-4 bg-[#F2F4F7] w-[100%]">
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <Image src={pdf} alt={"icon"} />
                      <div className="flex flex-col gap-1">
                        <p className="text-[12px]">Transaction Receipt.pdf</p>
                        <p className="text-[#667085] text-[13px]">200 KB</p>
                      </div>
                    </div>
                    <div>
                      <BsDownload size={23} />
                    </div>
                  </div>
                </div>

                <div className="border border-[#807CEA] rounded-lg p-4 bg-[#F2F4F7] w-[100%]">
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <Image src={pdf} alt={"icon"} />
                      <div className="flex flex-col gap-1">
                        <p className="text-[12px]">Transaction Receipt.pdf</p>
                        <p className="text-[#667085] text-[13px]">200 KB</p>
                      </div>
                    </div>
                    <div>
                      <BsDownload size={23} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 border-l pl-24 border-gray-300">
            <div className="flex gap-2 items-center mt-2">
              <p>Search for:</p>
              <input
                type="text"
                className="border border-gray-200 rounded-3xl p-3 text-black text-[13px] "
                placeholder="Admin(Elevated minds)"
              />
            </div>
            <div className="border border-b-gray-50 w-[100%] mt-3 mb-2"></div>
            <div className="mt-3">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="9"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page;
