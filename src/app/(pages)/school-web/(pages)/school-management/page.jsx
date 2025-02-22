"use client";
import React, { useState } from "react";
import Navbars from "../Navbars";
import { FiCalendar } from "react-icons/fi";
import studentIcon from "../../../../../assets/icons/overview/studentIcon.png";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { useRouter } from "next/navigation";

function Page() {
  const headers = [
    {
      id: 1,
      headerOne: "SCHOOL NAME",
    },
    {
      id: 2,
      headerOne: "CLASS",
    },
    {
      id: 3,
      headerOne: "GENDER",
    },
    {
      id: 4,
      headerOne: "AGE",
    },
    {
      id: 5,
      headerOne: "DATE OF BIRTH",
    },
    {
      id: 6,
      headerOne: "",
    },
  ];
  const studentTable = [
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
    {
      Initials: "OA",
      studentName: "Olabisi Adekunle",
      studentClass: "J.s.s 3",
      Gender: "Female",
      age: "13",
      dob: "19 - 05 - 2011",
    },
  ];

  const [gender, setGender] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState("");

  const router = useRouter();

  const handleViewClick = (item) => {
    router.push(`/school-web/school-management/${item}`);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSelectedAgeRange = (e) => {
    setSelectedAgeRange(e.target.value);
  };

  return (
    <div className="w-full">
      <Navbars text={"Student Management"} img={studentIcon} />
      <div className="flex justify-between mt-3 w-full p-2">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <p className="text-[20px]">School Management</p>
            <p className="bg-[#0432591A] text-[#043259] text-[12px] rounded-lg py-1 px-2">
              72 students
            </p>
          </div>
          <p className="text-[13px] text-[#848D87]">
            Manage and view all students registered.
          </p>
        </div>

        <div className="bg-[#043259] flex items-center gap-2 text-white rounded-md py-2 px-4 cursor-pointer">
          <LuPlus size={20} />
          <p className="text-[12px] font-medium">Add student</p>
        </div>
      </div>
      <div className="flex justify-between mt-5 px-2">
        <div className="flex gap-3">
          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-lg max-w-52 w-full">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for student name"
              className="text-[12px] text-[#667085] flex-grow outline-none"
            />
          </div>

          <div className="flex gap-1 border border-gray-200 p-2 rounded-lg max-w-44 w-full relative">
            <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            <select
              value={gender}
              onChange={handleGenderChange}
              className="text-[12px] text-[#667085] bg-transparent outline-none pl-2 pr-8 py-1 w-full"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Class Dropdown */}
          <div className="flex gap-1 border border-gray-200 p-2 rounded-lg max-w-40 w-full relative">
            <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            <select
              value={selectedClass}
              onChange={handleClassChange}
              className="text-[12px] text-[#667085] bg-transparent outline-none pl-2 pr-8 py-1 w-full"
            >
              <option value="" disabled>
                Select Class
              </option>
              <option value="jss1">JSS1</option>
              <option value="jss2">JSS2</option>
              <option value="jss3">JSS3</option>
              <option value="ss1">SS1</option>
              <option value="ss2">SS2</option>
              <option value="ss3">SS3</option>
            </select>
          </div>

          <div className="flex gap-1 border border-gray-200 p-2 rounded-lg max-w-40 w-full relative">
            <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            <select
              value={selectedAgeRange}
              onChange={handleSelectedAgeRange}
              className="text-[12px] text-[#667085] bg-transparent outline-none pl-2 pr-8 py-1 w-full"
            >
              <option value="" disabled>
                Student Age
              </option>
              <option value="1-10">1-10</option>
              <option value="11-15">11-15</option>
              <option value="16-20">16-20</option>
            </select>
          </div>
        </div>
        <div className="bg-[#1018280D] p-2 rounded-md flex gap-2">
          <FiCalendar size={15} className="text-[#888888] mt-1" />
          <p className="text-[#888888]">custom</p>
        </div>
      </div>
      <table className="mt-5 border border-[#1A1A1A26] w-full rounded-lg px-4">
        <thead>
          <tr className="bg-gray-200 w-full ">
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
          {studentTable.map((e, i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="gap-3 py-3 w-[18%] whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <div className="rounded-full text-[13px] text-[#043259] bg-[#E4E4E4] p-2 w-10 h-10 flex justify-center items-center">
                    {e.Initials}
                  </div>
                  <p className="text-black text-[13px]">{e.studentName}</p>
                </div>
              </td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">
                {e.studentClass}
              </td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">
                {e.Gender}
              </td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">
                {e.age}
              </td>
              <td className="py-3 text-[#344054] w-[13%] text-[13px]">
                <p className="bg-[#04325926] rounded-md p-2 w-fit">{e.dob}</p>
              </td>
              <td className="py-3 text-[#344054] w-[15%] text-[13px] text-center">
                <p
                  onClick={() => handleViewClick(e.studentName)}
                  className="bg-[#043259] w-fit px-4 py-2 text-[11px] rounded-md text-white cursor-pointer"
                >
                  View
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
