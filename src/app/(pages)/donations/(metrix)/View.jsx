import Image from "next/image";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import lagosPrep from "../../../../assets/images/lagosPrep.png";
export default function View() {
  const lagosPrepSupportedSchools = [
    {
      text: "Total Number of Students Supported",
      amount: "48",
    },
    {
      text: "Total Donations Received",
      amount: "₦ 1,200,175.00 ",
    },
    {
      text: "Completed Donations",
      amount: "17",
    },
    {
      text: "Ongoing Donations",
      amount: "21",
    },
  ];
  const tabs = [
    {name: "Underprivileged Students",   num: "36"},
    {name: "School profile"},
    {name: "Donations"}
  ];
  return ( 
    <div className="text-[#F5F5F5]">
      <div className="bg-white rounded-md mt-4 mx-4  p-4">
        <div className="flex justify-between">
          <div>
            <p
              style={{ fontWeight: "400", fontSize: "18px" }}
              className="text-primary"
            >
              Student Donation<span className="text-[#F5105C]">*</span>
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <LiaLongArrowAltLeftSolid className="text-[#043259]" />
            <p className="text-[#043259] text-[13px]">
              Back to Supported Schools
            </p>
          </div>
        </div>
        <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
        <div className="bg-[#D6EAFB80] p-4 rounded-md mt-3">
          <div className="flex flex-col gap-3">
            <Image src={lagosPrep} width={40} />
            <p className="text-[20px] font-semibold text-[#101828]">
              Lagos Preparatory
            </p>
            <p className="bg-[#F5105C26] text-[#F5105C] p-1 rounded-xl text-[12px] w-fit">
              {" "}
              . Secondary
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          {lagosPrepSupportedSchools.map((e, i) => {
            return (
              <div className="border border-[#EAECF0] rounded-lg p-3 w-[20%] ">
                <p className="text-[#667085] text-[12px]">{e.text}</p>
                <p className="text-[#141414] font-semibold text-[17px]">
                  {e.amount}
                </p>
              </div>
            );
          })}
        </div>
       <div>
        
       </div>
      </div>
    </div>
  );
}
