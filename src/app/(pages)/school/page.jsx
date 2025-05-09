"use client";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import SecondInputs from "@/app/components/Reuseables/SecondInputs";
import Header from "@/components/Templates/Header";
import lagosPrep from "../../../assets/images/lagosPrep.png";
import lePoshe from "../../../assets/images/lePoshe.png";
import pacific from "../../../assets/images/pacific.png";
import treasure from "../../../assets/images/treasure.png";
import loyola from "../../../assets/images/loyola.png";
import { TiArrowUnsorted } from "react-icons/ti";
import { Progress } from "@arco-design/web-react";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
function SchoolPage() {
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
      completed : "completed",
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
      completed : "completed",

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
      completed : "completed",

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
  const [donationStatusValue, setDonationStatusValue] = useState("");
  const [schoolTypeValue, setSchoolTypeValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [studentSupportedValue, setStudentSupportedValue] = useState("");
  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="py-6">
          <div className="flex justify-between items-center">
            <Header
              header={"School"}
              count={6}
              text={"Empower Education: Support Schools and Students in Need"}
            />
<Link href="/donations" className="z-50 bg-primary  cursor-pointer text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem]">
          Make a donation
          </Link>
          </div>
          <div className="pt-4">
            <SecondInputs
              setDonationStatusValue={setDonationStatusValue}
              setSchoolTypeValue={setSchoolTypeValue}
              setSearchValue={setSearchValue}
              setStudentSupportedValue={setStudentSupportedValue}
            />
          </div>
        </div>
      </SecondLayout>
      <div className="bg-[#F5F5F5] mx-4 p-4">
        <section className="bg-white rounded-md p-4 mt-3">
          <p
            style={{ fontWeight: "400", fontSize: "18px" }}
            className="text-primary"
          >
            Supported Schools<span className="text-[#F5105C]">*</span>
          </p>
          <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
          <table className="w-full">
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
                    <td className="py-6 text-[#344054] w-[18%]">{e.Number}</td>

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
                      <p className="bg-[#043259] w-fit px-3 py-2 text-[11px] rounded-md text-white">
                        View
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>{" "}
      </div>
    </div>
  );
}
export default SchoolPage;
