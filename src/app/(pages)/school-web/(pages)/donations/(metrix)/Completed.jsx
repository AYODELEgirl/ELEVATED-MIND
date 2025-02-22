import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";

function Completed() {
  const headers = [
    { id: 1, headerOne: "DONATION ID" },
    { id: 2, headerOne: "STUDENT NAME" },
    { id: 3, headerOne: "DONATION AMOUNT" },
    { id: 4, headerOne: "DATE OF DONATION" },
    { id: 5, headerOne: "DONATION TYPE" },
    { id: 6, headerOne: "PAYMENT METHOD" },
  ];

  const table = [
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
    },
    {
      id: "0026",
      donationAmount: "#24,000.00",
      date: "19 - 05 - 2011",
      type: "Recurring donation",
      payment: "Card",
      name: "Taiwo Alabi",
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
          {table.map((e, i) => (
            <tr key={i} className="border-b border-gray-300">
              <td className="px-2 py-6">{e.id}</td>
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
                        {/* <p className="text-[11px]">{e.price}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-[#344054] text-[13px]">{e.donationAmount}</td>
              <td className="text-[#344054] text-[13px]">{e.date}</td>
              <td>
                <div className="bg-[#04325926] text-[#344054] rounded-lg px-3 py-1 w-fit">
                  {e.type}
                </div>
              </td>
              <td className="text-[#568FED] text-[13px]">{e.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
