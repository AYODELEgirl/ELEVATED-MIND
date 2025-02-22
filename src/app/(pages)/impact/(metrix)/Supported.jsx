// import { Progress } from '@arco-design/web-react';
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import lagosPrep from "../../../../assets/images/lagosPrep.png";
import loyola from "../../../../assets/images/loyola.png";
import pacific from "../../../../assets/images/pacific.png";
import lePoshe from "../../../../assets/images/lePoshe.png";
import treasure from "../../../../assets/images/treasure.png";
import React from "react";
import Image from "next/image";

function Supported() {
  const headers = [
    { id: 1, headerOne: "SCHOOL NAME" },
    { id: 2, headerOne: "STUDENT NAME" },
    { id: 2, headerOne: "STUDENT CLASS" },
    { id: 3, headerOne: "YOUR DONATION AMOUNT" },
    { id: 4, headerOne: "TOTAL DONATION AMOUNT" },
  ];

  const SupportedSchools = [
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: pacific,
      SchoolName: "Pacific",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: pacific,
      SchoolName: "Pacific",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      YourDonationAmount: "₦87,000.00",
      studentClass: "J.s.s 3",
      TotalDonationAmount: "₦629,000.00",
    },
  ];

  return (
    <div>
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg">
        <thead>
          <tr className="bg-gray-200 w-full">
            {headers.map((e, i) => (
              <th
                className={`${
                  i === 0 ? "px-3" : "px-0"
                } py-[.4rem] text-[11px] text-[#687182] font-normal`}
                key={i}
              >
                <div className="flex items-center">
                  <div>{e.headerOne}</div>
                  {e.headerOne && (
                    <div>
                      <TiArrowUnsorted size={11} />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SupportedSchools.map((e, i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className=" gap-3  w-[18%] whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <div className="rounded-full text-[13px] text-[#043259] bg-[#E4E4E4] p-2 w-10 h-10 flex justify-center items-center">
                    {e.Initials}
                  </div>
                  <p className="text-black text-[13px] ">{e.studentName}</p>
                </div>
              </td>
              <td className="gap-3 py-4 w-[18%] whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <Image
                    src={e.img}
                    alt=""
                    className="w-10 h-10 font-semibold"
                  />
                  {e.SchoolName}
                </div>
              </td>

              <td className=" text-[#344054] w-[15%]">{e.studentClass}</td>
              <td className=" text-[#344054] w-[18%]">
                {e.YourDonationAmount}
              </td>
              <td className=" text-[#344054] w-[18%]">
                {" "}
                <p className="bg-[#04325926] text-[#043259] w-fit rounded-md p-1 font-semibold">
                  #352,000.00
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 items-center justify-center mt-8 mb-10">
  <p className="text-[#043259] text-[15px] text-center font-semibold">Load More</p>
  <IoIosArrowDown className="text-[#043259] text-[15px]" />
</div>

    </div>
  );
}

export default Supported;
