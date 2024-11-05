import RandomComponent from "@/app/components/Reuseables/RandomComponent";
import React from "react";
import lagosPrep from "../../../../assets/images/lagosPrep.png";
import loyola from "../../../../assets/images/loyola.png";
import treasure from "../../../../assets/images/treasure.png";
import lePoshe from "../../../../assets/images/lePoshe.png";
import pacific from "../../../../assets/images/pacific.png";
import { Progress } from "@arco-design/web-react";

import { TiArrowUnsorted } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

export default function Students({ setCurrentTab }) {
  const SupportedSchools = [
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      Location: "Townsend Avenue Lekki, Lagos.",
      SchoolType: "Secondary",
      Number: "23",
      progress: 30,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      Location: "Salami Bello Avenue, Abuja.",
      SchoolType: "Secondary",
      Number: "51",
      progress: 45,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
    },
    {
      img: pacific,
      SchoolName: "pacific",
      Location: "11 Ajao Crescent VI, Lagos.",
      SchoolType: "Secondary",
      Number: "11",
      progress: 50,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      Location: "Taiwo Avenue Ogba, Lagos",
      SchoolType: "Primary & Nursery",
      Number: "7",
      progress: 50,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Location: "Southgate Estate Maryland, Lagos",
      SchoolType: "Primary & Nursery",
      Number: "35",
      progress: 40,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      Location: "Townsend Avenue Lekki, Lagos.",
      SchoolType: "Secondary",
      Number: "23",
      progress: 30,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      Location: "Salami Bello Avenue, Abuja.",
      SchoolType: "Secondary",
      Number: "51",
      progress: 45,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
    },
    {
      img: pacific,
      SchoolName: "pacific",
      Location: "11 Ajao Crescent VI, Lagos.",
      SchoolType: "Secondary",
      Number: "11",
      progress: 50,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      Location: "Taiwo Avenue Ogba, Lagos",
      SchoolType: "Primary & Nursery",
      Number: "7",
      progress: 50,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Location: "Southgate Estate Maryland, Lagos",
      SchoolType: "Primary & Nursery",
      Number: "35",
      progress: 40,
      minimum: "₦243,000.00 ",
      maximum: "₦800,000.00",
      view: "",
    },
  ];
  const headers = [
    {
      id: 1,
      headerOne: "SCHOOL NAME",
    },
    {
      id: 2,
      headerOne: "LOCATION",
    },
    {
      id: 3,
      headerOne: "SCHOOL TYPE",
    },
    {
      id: 4,
      headerOne: "NUMBER OF STUDENTS SUPPORTED",
    },
    {
      id: 5,
      headerOne: "DONATION PROGRESS",
    },
    {
      id: 6,
      headerOne: "",
    },
  ];
  return (
    <div>
      <div className="bg-[#F5F5F5] mx-4 p-4 rounded-md ">
        <p
          style={{ fontWeight: "400", fontSize: "18px" }}
          className="text-primary"
        >
          Student Donation<span className="text-[#F5105C]">*</span>
        </p>
        <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
        <div className="border border-[#1A1A1A26] rounded-md">
          <section>
            <RandomComponent
              first={"Become a Member"}
              second={"Start making a a difference today."}
              step={"1"}
              number={"6"}
            />
          </section>
          <section className="py-3 px-5">
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
                {SupportedSchools.map((e, i) => {
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
                      <td className=" py-6 text-[#344054] w-[20%]">
                        {e.Location}
                      </td>
                      <td className="py-6 text-[#344054] w-[15%]">
                        {e.SchoolType}
                      </td>
                      <td className="py-6 text-[#344054] w-[18%]">
                        {e.Number}
                      </td>

                      <td className="w-[23%] mr-5">
                        <div>
                          <p className="text-[10px] whitespace-nowrap">
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
                      <td className="">
                        <p
                          className="bg-[#043259] w-fit px-3 py-2 text-[11px] rounded-md text-white"
                          onClick={() => setCurrentTab("view")}
                        >
                          View
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}
