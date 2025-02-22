import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";

function Pending() {
  const headers = [
    { id: 1, headerOne: "TICKET ID" },
    { id: 2, headerOne: "TICKET ISSUE" },
    { id: 3, headerOne: "DONOR & STUDENT NAME" },
    { id: 4, headerOne: "PRIORITY" },
    { id: 5, headerOne: "DATE SUBMITTED" },
    { id: 6, headerOne: "STATUS" },
    { id: 7, headerOne: "" },
  ];
  const table = [
    {
      id: "00017",
      issue: "Donor",
      name: "Tope Alabi",
      priority: "high",
      date: "19 - 05 - 2011",
      staus: "Resolved",
    },
    {
        id: "00017",
        issue: "Donor",
        name: "Olabisi Adekunle",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "Segun Johnson",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "Olabisi Adekunle",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "kingsley Albert",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "Olabisi Adekunle",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "Olabisi Adekunle",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
      {
        id: "00017",
        issue: "Donor",
        name: "Olabisi Adekunle",
        priority: "high",
        date: "19 - 05 - 2011",
        staus: "Resolved",
      },
  ];
  return (
    <div>
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
        <thead>
          <tr className="bg-gray-200 w-full">
            {headers.map((e, i) => (
              <th
                key={e.id}
                className={`${
                  i === 0 ? "px-3" : "px-0"
                } py-[.4rem] text-[11px] text-[#687182] font-normal`}
              >
                <div className="flex items-center">
                  <div>{e.headerOne}</div>
                  {e?.headerOne && (
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
          {table?.map((e, i) => {
            return (
                <tr key={i} className="border-b border-gray-300">
                <td className="px-2 py-6">{e.id}</td>
                <td className="text-[#F5105C] text-[13px]">
                  <div className="border border-gray-200 px-2 py-1 w-fit rounded-md">
                    {e.issue}
                  </div>
                </td>
                <td className="flex items-center gap-3">
                  <div className="flex gap-2 mt-2">
                    <div className="rounded-full bg-[#E4E4E4] w-10 h-10 flex items-center justify-center">
                      OA
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-[11px]">{e.name}</p>
                      <div className="flex gap-3 items-center">
                        <div className="flex gap-3">
                          <p className="text-[#70707A] text-[11px]">j.s.s.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-[#B42318] text-[10px] bg-[#FEF3F2] px-2 py-1 rounded-lg w-fit">
                    High
                  </div>
                </td>
                <td className="text-[#344054] text-[13px]">{e.date}</td>
                <td>
                  <div className="text-[#027A48] text-[12px] w-fit rounded-md px-2 py-1 bg-[#ECFDF3]">
                    {e.staus}
                  </div>{" "}
                </td>
                <td> 
                    <div className="text-white text-[13px] bg-[#043259] w-fit px-3 py-2 rounded-lg">
                        View
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Pending;
