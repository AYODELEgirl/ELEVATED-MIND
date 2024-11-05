import React from "react";
import lagosPrep from "../../../../assets/images/lagosPrep.png";
import loyola from "../../../../assets/images/loyola.png";
import pacific from "../../../../assets/images/pacific.png";
import treasure from "../../../../assets/images/treasure.png";
import lePoshe from "../../../../assets/images/lePoshe.png";
import { TiArrowUnsorted } from "react-icons/ti";
import Image from "next/image";

function Completed() {
  const completed = [
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      studentName: "Badmus Kolade",
      yourDonation: "₦629,000.00",
      donationAmount: "₦40,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: pacific,
      SchoolName: "pacific",
      studentName: "All",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "2nd term school fees",
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "Random donation",
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      studentName: "All",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: pacific,
      SchoolName: "pacific",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "2nd term school fees",
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      studentName: "Badmus Kolade",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      studentName: "All",
      yourDonation: "₦40,000.00",
      donationAmount: "₦629,000.00",
      donationType: "",
      purpose: "1st term school fees",
    },
  ];
  const headers = [
    {
      id: 1,
      headerOne: "SCHOOL NAME",
    },
    {
      id: 2,
      headerOne: "STUDENT NAME",
    },
    {
      id: 3,
      headerOne: "YOUR DONATION",
    },
    {
      id: 4,
      headerOne: "DONATION AMOUNT",
    },
    {
      id: 5,
      headerOne: "DONATION TYPE",
    },
    {
      id: 6,
      headerOne: "PURPOSE",
    },
  ];

  return (
    <div className="text-black  p-4 bg-white rounded-md">
      <p
        style={{ fontWeight: "400", fontSize: "18px" }}
        className="text-primary"
      >
        Completed Donation<span className="text-[#F5105C]">*</span>
      </p>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg ">
        <thead>
          <tr className="bg-gray-200 w-full ">
            {headers.map((e, i) => {
              return (
                <th
                  className={`${
                    i === 0 ? "px-3" : "px-0"
                  }  py-[.4rem] text-[11px]  text-[#687182] font-normal`}
                  key={i}
                >
                  <div className="flex items-center">
                    <div> {e.headerOne}</div>

                    {e?.headerOne && (
                      <div>
                        <TiArrowUnsorted size={11} />
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {completed.map((e, i) => {
            return (
              <tr key={i} className="border-b border-gray-200">
                <td className=" gap-3 py-6 w-[18%] whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <Image
                      src={e.img}
                      alt=""
                      className="w-10 h-10 font-semibold  "
                    />
                    {e.SchoolName}
                  </div>
                </td>

                <td className=" py-6 text-[#344054] text-[13px] w-[18%]">
                  {e.studentName}
                </td>
                <td className=" py-6 text-[#344054] text-[13px] w-[18%]">
                  {e.yourDonation}
                </td>
                <td className=" py-6 text-[#344054] text-[13px] w-[18%]">
                  {e.donationAmount}
                </td>

                <td className=" py-6 text-[#344054] text-[13px] w-[18%]">
                  <p className="bg-[#F5105C1A] text-[#F5105C] w-fit text-[11px] p-2 rounded-md">
                    One-time donation
                  </p>
                </td>

                <td className=" py-6 text-[#344054] w-[18%] text-[13px]">
                  {e.purpose}
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
