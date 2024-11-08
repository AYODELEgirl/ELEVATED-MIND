import React from 'react'
import { TiArrowUnsorted } from "react-icons/ti";
import { Progress } from "@arco-design/web-react";
export default function CompletedDonations() {
    const headers = [
        {
          id: 1,
          headerOne: "STUDENT NAME",
        },
        {
          id: 2,
          headerOne: "STUDENT CLASS",
        },
        {
          id: 3,
          headerOne: "NUMBER OF DONOR",
        },
        {
          id: 4,
          headerOne: "DONATION AMOUNT",
        },
        {
          id: 5,
          headerOne: "START DATE",
        },
        {
          id: 6,
          headerOne: "DONATION PROGRESS",
        }

      ];
      const OngoingDonation = [
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
            impactDetails : "Improved academic"
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
        {
            Initials : "OA",
            studentName : "Olabisi Adekunle",
            studentClass : "J.s.s 3",
            numberOfDonor : "23",
            donationAmount : "₦629,000.00",
            startDate : "28th Aug 2024",
            Number: "23",
            progress: 30,
            minimum: "₦243,000.00 ",
            maximum: "₦800,000.00",
        },
      ]
  return (
    <div>
         <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
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
                          // line 345 code means the icons is only going to display where there is header, withoutt this code the icon is also displaying for the "view" column, meanwhile the view column has no header
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {OngoingDonation.map((e, i) => {
                return (
                  <tr key={i} className="border-b border-gray-200">
                    <td className=" gap-3 py-6 w-[18%] whitespace-nowrap">
                      <div className="flex items-center gap-4">
                      <div className="rounded-full text-[13px] text-[#043259] bg-[#E4E4E4] p-2 w-10 h-10 flex justify-center items-center">
                        {e.Initials}
                       </div>
                       <p className='text-black text-[13px] '>{e.studentName}</p> 
                      </div>
                    </td>
                    <td className=" py-6 text-[#344054] w-[13%] text-[13px]">
                      {e.studentClass}
                    </td>
                    <td className="py-6 text-[#344054] w-[13%] text-[13px]">
                      {e.numberOfDonor}
                    </td>
                    <td className="py-6 text-[#344054] w-[13%] text-[13px]">
                      {e.donationAmount}
                    </td>
                    <td className="py-6 text-[#344054] w-[13%] text-[13px]">{e.startDate}</td>
                    <td className="w-[23%] mr-5">
                      <div>
                        <p className="text-[10px] text-black whitespace-nowrap">
                          {" "}
                          {e.minimum} Donated{" "}
                          <span className="text-[#838383] text-[8px]">
                            from
                          </span>{" "}
                          {e.maximum}{" "}
                          <span className="text-[#838383] text-[8px]">
                            Donation
                          </span>{" "}
                        </p>
                      </div>
                      <Progress
                        percent={e?.progress}
                        showText={false}
                        color="#00984C"
                        style={{
                          marginBottom: "15px",
                          width: "90%",
                          marginTop: "0px",
                        }}
                      />
                    </td>


                    

                  </tr> 
                );
              })}
            </tbody>
          </table>
    </div>
  )
}
