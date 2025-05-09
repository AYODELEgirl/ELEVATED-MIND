"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Chart, ArcElement} from 'chart.js'
import { Doughnut } from "react-chartjs-2";
import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import Header from "@/components/Templates/Header";
import date from "../../../assets/icons/overview/date.png";
import Image from "next/image";
import Supported from "./(metrix)/Supported";
import Certificate from "./(metrix)/Certificate";
import Impact from "./(metrix)/Impact";
import ImpactChart from "@/app/components/Charts/ImpactChart";

function Page() {
  const tabs = [
    { name: "Students Supported" },
    { name: "Certificate Of Achievment" },
    { name: "Impact Reflection" },
  ];
  Chart.register(ArcElement);
  const piData = {
    labels: ["Primary", "Secondary"],
    datasets: [
      {
        data: [21, 33],
        backgroundColor: ["#000080", "#FF1493"],
        hoverBackgroundColor: ["#000080", "#FF1493"],
      },
    ],
  };
  const options = {
    cutoutPercentage: 70,
    rotation: -Math.PI,
    circumference: Math.PI,
    plugins: { legend: { display: false } },
  };
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  const Calenderdate = [
    {
      text: "Showing for next:",
      img: date,
      textTwo: "May 6 2024 - May 17 2024",
    },
  ];

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

  const data = [
    { name: "May 6", x: 30, y: 70, m: "0" },
    { name: "May 7", x: 12, y: 88, m: "1H" },
    { name: "May 8", x: 15, y: 85, m: "2H" },
    { name: "May 9", x: 35, y: 65, m: "3H" },
    { name: "May 10", x: 54, y: 46, m: "4h" },
    { name: "May 11", x: 72, y: 28, m: "5H" },
    { name: "May 12", x: 32, y: 68, m: "1k" },
    { name: "May 13", x: 32, y: 68, m: "2k" },
    { name: "May 14", x: 32, y: 68 },
    { name: "May 15", x: 32, y: 68 },
    { name: "May 16", x: 32, y: 68 },
    { name: "May 17", x: 32, y: 68 },
  ];

  return (
    <div>
      <SecondLayout ShowBack={true}>
        <div className="flex justify-between items-center min-h-[160px]">
          <Header
            header={"Impact"}
            text={
              "Discover how your donations fund education and change lives."
            }
          />

          <div className="bg-primary text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem] cursor-pointer">
            Make a donation
          </div>
        </div>
      </SecondLayout>

      <div className="bg-[#F5F5F5] mx-4 p-4">
        <section className="bg-white rounded-md p-4 mt-3">
          <p className="font-normal text-xl text-primary">
            My Impacts<span className="text-[#F5105C]">*</span>
          </p>
          <div className="border border-t-gray-50 mt-3 w-full"></div>
          <div className="border-t border-t-gray-50 border-l border-r border-b border-[#1A1A1A26] mt-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_4px_-1px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between mt-4 mx-4 mb-4">
              {reportsDonations.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border border-[#EAECF0] p-6 rounded-md w-[23%]"
                  >
                    <p className="text-[#667085] text-[12px]">{e.text}</p>
                    <p className="text-black font-semibold text-[20px]">
                      {e.amount}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between gap-5 mb-4">
              <div className="border border-gray-300 mx-4 rounded-md w-[65%] p-4">
                <p className="text-[13px] font-semibold">Total Donations</p>
                <p className="text-[#667085] text-[12px]">
                  See how your donations conducted during reporting period
                </p>
                <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
                <div className="flex-col">
                  <div className="flex justify-between mt-2 mb-4">
                    <div className="border px-2 text-11px rounded-md text-[#667085]">
                      Analysis of donation conducted over time
                    </div>

                    <div className="border rounded-md px-4 py-1">
                      {Calenderdate.map((e, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center gap-2"
                        >
                          <p className="text-[12px] text-[#344054]">{e.text}</p>
                          <Image src={e.img} className="w-[.7rem]" alt="" />
                          <p className="text-[12px] text-[#344054]">
                            {e.textTwo}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <BarChart width={800} height={250} data={data} barSize={6}>
                      <CartesianGrid horizontal={false} />{" "}
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="x"
                        stackId="a"
                        fill="#043259"
                        radius={[10, 0, 0, 10]}
                      />
                      <Bar
                        dataKey="y"
                        stackId="a"
                        fill="#E5E5EF"
                        radius={[10, 0, 0, 10]}
                      />
                    </BarChart>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 mx-4 rounded-md w-[35%] p-4">
                <p className="text-[13px] font-semibold">Supported students</p>
                <p className="text-[#667085] text-[12px]">
                  See the distribution of students by school level
                </p>
                <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
                {/* <div>
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <Doughnut data={piData} options={options} />{" "}
                    <div style={{ position: "relative", top: "-140px" }}>
                      {" "}
                      <h2>Total Students Supported</h2> <h1>54</h1>{" "}
                    </div>{" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      {" "}
                      <div style={{ marginRight: "20px", textAlign: "center" }}>
                        {" "}
                        <div
                          style={{
                            backgroundColor: "#000080",
                            width: "10px",
                            height: "10px",
                            display: "inline-block",
                            marginRight: "5px",
                          }}
                        ></div>{" "}
                        <span>Primary</span> <h3>21</h3>{" "}
                      </div>{" "}
                      <div style={{ textAlign: "center" }}>
                        {" "}
                        <div
                          style={{
                            backgroundColor: "#FF1493",
                            width: "10px",
                            height: "10px",
                            display: "inline-block",
                            marginRight: "5px",
                          }}
                        ></div>{" "}
                        <span>Secondary</span> <h3>33</h3>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div> */}
                <ImpactChart />
              </div>
            </div>

            <div className="flex items-center gap-[2rem] pt-6 mx-4">
              {tabs?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                      currentTab === e?.name
                        ? "border-b-[2px] border-[#F5105C] text-[#F5105C] font-[800]"
                        : "border-b-[2px] border-transparent"
                    }`}
                    onClick={() => setCurrentTab(e?.name)}
                  >
                    <div>{e?.name}</div>
                  </div>
                );
              })}
            </div>

            <section className="mt-3 mx-4">
              {currentTab === "Students Supported" ? (
                <Supported />
              ) : currentTab === "Certificate Of Achievment" ? (
                <Certificate />
              ) : (
                <Impact />
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
