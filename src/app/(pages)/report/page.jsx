"use client";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import SecondInputs from "@/app/components/Reuseables/SecondInputs";
import Header from "@/components/Templates/Header";
import { Progress } from "@arco-design/web-react";
import Image from "next/image";
import { useState } from "react";
import lagosPrep from "../../../assets/images/lagosPrep.png";
import pacific from "../../../assets/images/pacific.png";
import treasure from "../../../assets/images/treasure.png";
import lePoshe from "../../../assets/images/lePoshe.png";
import loyola from "../../../assets/images/loyola.png";
import { TiArrowUnsorted } from "react-icons/ti";

function page() {
  const [donationStatusValue, setDonationStatusValue] = useState("");
  const [schoolTypeValue, setSchoolTypeValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [studentSupportedValue, setStudentSupportedValue] = useState("");
  const reportsDonations = [
    {
      text: "Total Donations Received",
      amount: "₦ 850,000,000.00 ",
    },

    {
      text: "Total Number of School Supported",
      amount: "76",
    },
    {
      text: "Total Number of Student Supported",
      amount: "1782",
    },
    {
      text: "Ongoing Donations",
      amount: "967",
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
      headerOne: "DONATION COMPLETED",
    },
    {
      id: 6,
      headerOne: "TOTAL DONATION AMOUNT",
    },
  ];
  const SupportedSchools = [
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      Location: "Townsend Avenue Lekki, Lagos.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      Location: "Salami Bello Avenue, Abuja.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: pacific,
      SchoolName: "pacific",
      Location: "11 Ajao Crescent VI, Lagos.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      Location: "Taiwo Avenue Ogba, Lagos",
      SchoolType: "Primary & Nursery",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Location: "Southgate Estate Maryland, Lagos",
      SchoolType: "Primary & Nursery",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: lagosPrep,
      SchoolName: "Lagos Preparatory",
      Location: "Townsend Avenue Lekki, Lagos.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: loyola,
      SchoolName: "Loyola Jesuit College",
      Location: "Salami Bello Avenue, Abuja.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: pacific,
      SchoolName: "pacific",
      Location: "11 Ajao Crescent VI, Lagos.",
      SchoolType: "Secondary",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: treasure,
      SchoolName: "Treasure Stars ",
      Location: "Taiwo Avenue Ogba, Lagos",
      SchoolType: "Primary & Nursery",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    },
    {
      img: lePoshe,
      SchoolName: "Le Poshe",
      Location: "Southgate Estate Maryland, Lagos",
      SchoolType: "Primary & Nursery",
      NumberOfStudents : "21",
      Donations: "18",
      Total : ""
    }
  ];
  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="py-6">
          <div className="flex justify-between items-center">
            <Header
              header={"Report"}
              text={
                "View a detailed report of all transactions related to student and school donations."
              }
            />

            <div className="bg-primary text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem] cursor-pointer ">
              Make a donation
            </div>
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
      <div className="bg-[#F5F5F5] mx-4 p-4 ">
        <div className="bg-white mx-2 p-2 rounded-md mt-3 shadow-lg ">
          <div className="flex  justify-between mt-4">
            {reportsDonations.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border border-[#EAECF0] p-6 rounded-md w-[23%] "
                >
                  <p className="text-[#667085] text-[12px]">{e.text}</p>
                  <p className="text-black font-semibold text-[20px]">
                    {e.amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white mx-2 p-2 rounded-md mt-3 shadow-lg ">
          <p
            style={{ fontWeight: "400", fontSize: "18px" }}
            className="text-primary"
          >
            Report of Supported Schools<span className="text-[#F5105C]">*</span>
          </p>
          <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
          <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4 overflow-hidden">
            <thead>
              <tr className="bg-gray-200 w-full ">
                {headers.map((e, i) => {
                  return (
                    <th
                      className={`${
                        i === 0 ? "px-3" : "px-0"
                      }  py-[.8rem] text-[11px]  text-[#687182] font-normal`}
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
                    <td className=" py-6 text-[#344054]  text-[13px]">
                      {e.Location}
                    </td>
                    <td className="py-6 text-[#344054] text-[13px] ">
                      {e.SchoolType}
                    </td>
                    <td className="py-6 text-[#344054]  text-[13px]">
                      {e.NumberOfStudents}
                    </td>
                    <td className="py-6 text-[#344054] text-[13px]">
                      {e.Donations}
                    </td>
                    <td className=" py-6 text-[#344054]">
                     <p className = "bg-[#04325926] text-[#043259] w-fit rounded-md p-1 font-semibold">
                       #352,000.00
                     </p>
                   </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
