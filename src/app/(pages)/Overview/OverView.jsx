"use client";
import React, { useState, useEffect } from "react";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import hero from "../../../assets/overview/hero.png";
import goldImg from "../../../assets/icons/overview/gold.png";
import donated from "../../../assets/icons/overview/donated.png";
import student from "../../../assets/icons/overview/student.png";
import palm from "../../../assets/icons/overview/palm.png";
import date from "../../../assets/icons/overview/date.png";
import Image from "next/image";
import Header from "@/components/Templates/Header";
import Cards from "@/app/components/Reuseables/Cards";
import { TiArrowUnsorted } from "react-icons/ti";
import { Progress } from "@arco-design/web-react";
import CardsTwo from "@/app/components/Reuseables/cardsTwo";
import lagosPrep from "../../../assets/images/lagosPrep.png";
import pacific from "../../../assets/images/pacific.png";
import treasure from "../../../assets/images/treasure.png";
import lePoshe from "../../../assets/images/lePoshe.png";
import loyola from "../../../assets/images/loyola.png";
import ToggleImage from "@/app/components/Reuseables/Toggle";
import Link from "next/link";

function OverView() {
  const navData = [
    { img: goldImg, header: "Badge", name: "Gold" },
    { img: donated, header: "Total Amount Donated", name: "₦823,000.00" },
    { img: student, header: "Students Supported", name: "12" },
  ];
  const heroData = [
    {
      firstText: "Mayowa Babatunde",
      secondText: "Welcome back our Hero",
      img: palm,
    },
  ];
  const Calenderdate = [
    {
      text: "Showing for next:",
      img: date,
      textTwo: "7 day",
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
  const overviewCards = [
    {
      month: "Aug",
      date: "21",
      studentName: "Olayinka Akindele",
      term: "1st term school fees",
      donation: "Donation progress",
      amountDonated: "₦47,250.00 Donated",
      amountDonatedTwo: "from ₦150,000.00 Donation",
      school: "School",
      SchoolName: "Lagos Preparatory",
      dueDate: "Due Date",
      due: "17th Nov 2024",
      donationAmount: "Donation Amount",
      donationPrice: "17th Nov 2024",
      payment: "Payment Method",
      debit: "Debit - **5689",
      frequency: "Frequency",
      weekly: "Mon - Weekly",
      impact: "Donation Impact",
      percentage: "39%",
    },
    {
      month: "Aug",
      date: "21",
      studentName: "Olayinka Akindele",
      term: "1st term school fees",
      donation: "Donation progress",
      amountDonated: "₦47,250.00 Donated",
      amountDonatedTwo: "from ₦150,000.00 Donation",
      school: "School",
      SchoolName: "Lagos Preparatory",
      dueDate: "Due Date",
      due: "17th Nov 2024",
      donationAmount: "Donation Amount",
      donationPrice: "17th Nov 2024",
      payment: "Payment Method",
      debit: "Debit - **5689",
      frequency: "Frequency",
      weekly: "Mon - Weekly",
      impact: "Donation Impact",
      percentage: "39%",
    },
  ];

  return (
    <div>
      <SecondLayout>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 py-6">
          <aside>
            <div className="flex items-center gap-4">
              <div>
                <Image src={hero} alt="logo" width={140} height={140} />
              </div>
              <div>
                <Header
                  header="Be a Hero: Empowering Futures, More Students at a Time"
                  text="Your Generosity Transforms Lives: Thank You for Being a Hero to Students in Need"
                  classNames="text-[1.5rem] w-[70%]"
                />
              </div>
            </div>
          </aside>

          {/* Second Column */}
          <aside className="flex justify-between items-center border-l ps-4">
            {navData?.map((e, i) => (
              <div key={i} className="flex items-center gap-2 p-2">
                <div>
                  <Image src={e.img} alt={e.header} width={40} height={40} />
                </div>
                <div>
                  <div className=" text-[1rem] text-[#777777]">{e.header}</div>
                  <div className="font-[900] text-[23.88px] text-[#1A1A1ACC]">
                    {e.name}
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </section>
      </SecondLayout>

      <section className="bg-gray-200 p-4  mx-4">
        <div className="flex justify-between">
          <div>
            {heroData?.map((e, i) => (
              <div key={i}>
                <p
                  className="text-[17px]"
                  style={{ fontWeight: "500", fontSize: "20px" }}
                >
                  {e.firstText}
                </p>
                <div className="flex">
                  <p className="text-[#696969CC] font-thin text-[12px]">
                    {e.secondText}
                  </p>
                  <Image src={e.img} alt="" />
                </div>
              </div>
            ))}
          </div>
          <Link href="/donations" className="z-40 bg-primary  cursor-pointer text-white w-fit font-[700] text-[.9rem] px-4 py-3 rounded-[.4rem]">
          Make a donation
          </Link>
        </div>

        <section className="bg-white rounded-md p-4 mt-3">
          <div className="flex justify-between">
            <p
              style={{ fontWeight: "400", fontSize: "18px" }}
              className="text-primary"
            >
              Upcoming Donation<span className="text-[#F5105C]">*</span>
            </p>

            <div className="border rounded-md px-4 py-1">
              {Calenderdate.map((e, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <p className="text-[12px] text-[#344054]">{e.text}</p>
                  <Image src={e.img} className="w-[.7rem]" />
                  <p className="text-[12px] text-[#344054]">{e.textTwo}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
          <section className="mt-3 flex justify-between">
            <div className="flex flex-row gap-5">
              <div className="grid grid-cols-2  gap-2">
                {overviewCards.map((e, i) => {
                  return <Cards {...e} />;
                })}
              </div>
            </div>

            <ToggleImage />
          </section>
        </section>
        <section className="bg-white rounded-md p-4 mt-3">
          <div className="flex justify-between">
            <p
              style={{ fontWeight: "400", fontSize: "18px" }}
              className="text-primary"
            >
              Supported Schools<span className="text-[#F5105C]">*</span>
            </p>
            <p className="border border-[#D0D5DD] rounded-md text-[#344054] px-2 py-1 text-[13px]">
              View all
            </p>
          </div>
          <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
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
        </section>
      </section>
    </div>
  );
}

export default OverView;
