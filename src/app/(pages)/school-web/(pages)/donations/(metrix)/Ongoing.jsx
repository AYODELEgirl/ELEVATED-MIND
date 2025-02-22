import Image from "next/image";
import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import goldBadge from "../../../../../../assets/icons/overview/goldBadge.png";
import maleAvatar from "../../../../../../assets/icons/overview/maleAvatar.png";
function Ongoing() {
  const headers = [
    {
      id: 1,
      headerOne: "TRANSACTION ID",
    },
    {
      id: 2,
      headerOne: "DONOR NAME",
    },
    {
      id: 3,
      headerOne: "STUDENT NAME",
    },
    {
      id: 4,
      headerOne: "DONATION AMOUNT",
    },
    {
      id: 5,
      headerOne: "DATE OF DONATION",
    },
    {
      id: 6,
      headerOne: "DONATION TYPE",
    },
  ];
  const table = [
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
    {
      id: "0017",
      gold: goldBadge,
      avartar: maleAvatar,
      name: "Mayowa Kingsley",
      donationAmount: "#26,700",
      dateOfDonation: "19 - 05 - 2011",
      type: "one time donation"
    },
  ];
  return (
    <div className="w-full">
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
        <thead>
          <tr className="bg-gray-200 w-full">
            {headers.map((e, i) => (
              <th
                key={i}
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
              <td className="px-2">{e.id}</td>
              <td className="flex items-center gap-3 py-1">
                <div className="flex gap-2 mt-2">
                  <div className="rounded-full bg-[#EBF3FF] w-10 h-10 flex items-center justify-center">
                    <Image
                      src={e.avartar}
                      alt="avatar"
                      width={40}
                      height={30}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[11px]">{e.name}</p>
                    <div className="flex gap-3 items-center">
                      <div className="flex">
                        <div className="flex gap-1">

                        </div>
                        <Image
                          src={e.gold}
                          alt="badge"
                          width={20}
                          height={20}
                        />
                        <p className="text-[#70707A] text-[11px]">Gold</p>
                        <p className="text-[11px]">{e.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
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
                          <p className="text-[11px]">{e.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </td>
              <td className="text-[#344054] text-[14px]">{e.donationAmount}</td>
              <td className="text-[#344054] text-[14px]">{e.dateOfDonation}</td>
              <td> <div className="bg-[#F5105C1A] text-[#F5105C] p-2 rounded-lg w-fit"> {e.type}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ongoing;
