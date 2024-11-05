"use client";
import RandomComponent from "@/app/components/Reuseables/RandomComponent";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import card from "../../../../assets/icons/overview/card.png";
import bank from "../../../../assets/icons/overview/bank.png";
import Image from "next/image";
export default function Random() {
  const membership = [
    { rank: "Enty level" },
    { rank: "Mid-Level" },
    { rank: "Top-Tier" },
    { rank: "Executive" },
    { rank: "Just once" },
    { rank: "Patron" },
  ];
  const specifiedAmount = [
    { amount: "₦1,000.00" },
    { amount: "₦2,000.00" },
    { amount: "#3,000.00" },
    { amount: "₦4,000.00" },
    { amount: "₦5,000.00" },
  ];
  const durationTime = [
    { howOften: "Monthly" },
    { howOften: "Weekly" },
    { howOften: "Daily" },
  ];
  const transfer = [
    { icon: card, name: "card" },
    { icon: bank, name: "Bank Transfer" },
  ];
  const dedicationType = [
    { dedicate: "No dedication" },
    { dedicate: "In Memory of" },
    { dedicate: "In Honor of" },
  ];
  const [member, setMember] = useState(membership[0]?.rank);
  const [amount, setAmount] = useState(specifiedAmount[0]?.amount);
  const [duration, setDuration] = useState(durationTime[0]?.howOften);
  const [dedicating, setDedicating] = useState(dedicationType[0]?.dedicate);
  const [payment, setPayment] = useState(transfer[0]?.name);

  return (
    <div>
      <div className="bg-[#F5F5F5] mx-4 p-4 rounded-md ">
        <p
          style={{ fontWeight: "400", fontSize: "18px" }}
          className="text-primary"
        >
          Random Donation<span className="text-[#F5105C]">*</span>
        </p>
        <div className="border border-t-gray-50 mt-3 w-[100%]"></div>

        <section className="mt-4">
          <RandomComponent
            first={"Become a Member"}
            second={"Start making a a difference today."}
            step={"1"}
            number={"6"}
          />
        </section>
        <div className="bg-white p-4 shadow-lg rounded-b-lg">
          <p className="text-[#1A1A1ACC] text-[14px]">Select a membership:</p>
          <div className="flex gap-4 mt-2 mb-10">
            {membership.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`py-2 px-5 mt-4 cursor-pointer ${
                    member === e?.rank
                      ? "bg-[#043259] rounded-md text-white text-[13px]"
                      : "border border-[#F5105C]  text-[#F5105C] rounded-lg"
                  }`}
                  onClick={() => setMember(e?.rank)}
                >
                  {e.rank}
                </div>
              );
            })}
          </div>
        </div>
        <section className="mt-4">
          <RandomComponent
            first={"Donation details"}
            second={"Specify your donation preference."}
            step={"2"}
            number={"6"}
          />
        </section>
        <div className="bg-white p-4 shadow-lg rounded-b-lg">
          <p> Amount to donate :</p>
          <div className="flex gap-4 mt-2 mb-10">
            {specifiedAmount.map((e, i) => {
              return (
                <div
                  key={i}
                  className={` py-2 px-5 cursor-pointer mt-4  rounded-md  ${
                    amount === e?.amount
                      ? "bg-[#04325980] text-white"
                      : "bg-white text-[#F5105C80] border border-[#F5105C80]"
                  }`}
                  onClick={() => setAmount(e?.amount)}
                >
                  {e?.amount}
                </div>
              );
            })}
          </div>
          <div>
            <p>How often:</p>
            <div className="flex gap-4 mt-2 mb-10">
              {durationTime.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={` py-2 px-5 cursor-pointer mt-4  rounded-md ${
                      duration === e?.howOften
                        ? "bg-[#043259] text-white"
                        : "border border-[#F5105C]  text-[#F5105C] rounded-lg"
                    }`}
                    onClick={() => setDuration(e?.howOften)}
                  >
                    {e.howOften}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-7">
            <div>
              <p className="mb-3 text-[#1A1A1ACC]">Select a time</p>
              <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input type="text" placeholder="Please select" />
                <IoIosArrowDown />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[#1A1A1ACC]">Day of the week</p>
              <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input type="text" placeholder="Please select" />
                <IoIosArrowDown />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[#1A1A1ACC]">Choose supported school</p>
              <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input type="text" placeholder="Please select" />
                <IoIosArrowDown />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[#1A1A1ACC]">
                Private message{" "}
                <span className="text-[#1A1A1A66] text-[13px]">
                  {" "}
                  (optional){" "}
                </span>{" "}
              </p>
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="message"
                  placeholder="Feel free to send us a personal message."
                  style={{
                    width: "300px",
                    height: "150px",
                    // padding: "2px",
                    fontSize: "13px",
                    textAlign: "start",
                    textAlign: "start",
                    verticalAlign: "top",
                    resize: "none",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="bg-[#D0D5DD] text-[#344054]" />
              <p className="text-[#344054]">
                Dedicate my donation in honor or in memory of someone
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg">
        <section className="mt-4">
            <RandomComponent
              first={"Hero & Tax Receipt Information"}
              second={
                "Input your details correctly to process your donation immediately."
              }
              step={"3"}
              number={"6"}
            />
          </section>
          <div className="bg-white p-4 shadow-lg rounded-b-lg">
            <div>
              <p className="mb-3 text-[#1A1A1ACC]">Email Address</p>
              <div className=" justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input type="email" placeholder="Enter email address" />
              </div>
              <p className="text-[11px] text-[#1A1A1A80] mt-2 mb-7 ">
                Your receipt will be email here
              </p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="bg-[#D0D5DD] text-[#344054]" />
              <p className="text-[#344054]">
                {" "}
                This is a corporate or group donation
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-1 text-[#1A1A1ACC]">Phone Number</p>
              <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-4">
          <RandomComponent
            first={"Dedication Information"}
            second={"Honor a loved one with your gift."}
            step={"4"}
            number={"6"}
          />
        </section>
        <div className="bg-white p-4 shadow-lg rounded-b-lg pb-16">
          <p>Select a dedication:</p>
          <div className="flex gap-4 mt-2 mb-10">
            {dedicationType.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`py-2 px-5 mt-4 cursor-pointer ${
                    dedicating === e?.dedicate
                      ? "bg-[#043259] rounded-md text-white text-[13px]"
                      : "border border-[#F5105C]  text-[#F5105C] rounded-lg"
                  }`}
                  onClick={() => setDedicating(e?.dedicate)}
                >
                  {e?.dedicate}
                </div>
              );
            })}
          </div>

          <div className=" flex flex-col gap-7">
            <div>
              <p
                style={{ fontWeight: "200", fontSize: "16px" }}
                className="text-[#1A1A1ACC]"
              >
                In Memory of<span className="text-[#F5105C]">*</span>
              </p>{" "}
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="text-[13px]"
                />
              </div>
            </div>

            <div>
              <p
                style={{ fontWeight: "200", fontSize: "16px" }}
                className="text-[#1A1A1ACC]"
              >
                Recipient Email Address<span className="text-[#F5105C]">*</span>
              </p>{" "}
              <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="text-[13px]"
                />
              </div>
            </div>

            <div>
              <p
                style={{ fontWeight: "200", fontSize: "16px" }}
                className="text-[#1A1A1ACC]"
              >
                Recipient message<span className="text-[#F5105C]">*</span>
              </p>{" "}
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="text-[13px]"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[#1A1A1ACC]">
                Private message{" "}
                <span className="text-[#1A1A1A66] text-[13px]">
                  {" "}
                  (optional){" "}
                </span>{" "}
              </p>
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="message"
                  placeholder="Feel free to send us a personal message."
                  style={{
                    width: "300px",
                    height: "150px",
                    fontSize: "13px",
                    textAlign: "start",
                    textAlign: "start",
                    verticalAlign: "top",
                    resize: "none",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border border-t-gray-50 mt-5 mb-7 w-[30%]"></div>
          <div className="flex flex-col gap-7">
            <div>
              <p
                style={{ fontWeight: "200", fontSize: "16px" }}
                className="text-[#1A1A1ACC]"
              >
                Sender Name<span className="text-[#F5105C]">*</span>
              </p>{" "}
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="text-[13px]"
                />
              </div>
            </div>
            <div>
              <p
                style={{ fontWeight: "200", fontSize: "16px" }}
                className="text-[#1A1A1ACC]"
              >
                Sender Email Address<span className="text-[#F5105C]">*</span>
              </p>{" "}
              <div className="border border-[#D0D5DD] p-2 rounded-lg w-[30%]">
                <input
                  type="text"
                  placeholder="Enter email mail"
                  className="text-[13px]"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="mt-4">
          <RandomComponent
            first={"Anonymity"}
            second={"Make your donation anonymous"}
            step={"5"}
            number={"6"}
          />
        </section>
        <div className="bg-white p-4 shadow-lg rounded-b-lg pb-10">
          <div className="flex gap-3">
            <input type="checkbox" className="bg-[#D0D5DD] text-[#344054]" />
            <p className="text-[#344054] text-[16px]">
              {" "}
              Make my donation anonymous{" "}
            </p>
          </div>
        </div>
        <section className="mt-4">
          <RandomComponent
            first={"Payment Information"}
            second={
              "Input your details correctly to process your donation immediately."
            }
            step={"6"}
            number={"6"}
          />
        </section>
        <div className="bg-white p-4 shadow-lg rounded-b-lg pb-10">
          <div className=" w-[35%]">
            <p className="text-[#1A1A1ACC] text-[14px]">
              Select payment option:
            </p>
            <div className="flex gap-4 mt-5">
              {transfer.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`flex gap-3 py-2 px-4 rounded-md ${
                      payment === e?.icon
                        ? "bg-[#043259] rounded-md text-white text-[13px]"
                        : "border border-[#F5105C]  text-[#F5105C] rounded-lg"
                    }`}
                    onClick={() => setPayment(e?.icon)}
                  >
                    <Image src={e.icon} />
                    <p> {e.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="border border-t-gray-50 mt-5 mb-3 "></div>
            <p
              style={{
                display: "flex",
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                textAlign: "center", // Center text within the paragraph
              }}
              className="text-[#454545] text-[14px] w-[50%] ml-24 mb-8 mt-4"
            >
              Enter your card details to donate
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <div>
                <p className="mb-1 text-[#1A1A1ACC] text-[11px]">CARD NUMBER</p>
                <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg ">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 ">
                <div className="w-full">
                  <p className="mb-1 text-[#1A1A1ACC] text-[11px]">
                    EXPIRY DATE
                  </p>
                  <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <p className="mb-1 text-[#1A1A1ACC] text-[11px]">CVV</p>
                  <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg">
                    <input
                      type="text"
                      placeholder="123"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-1 text-[#1A1A1ACC] text-[11px]">
                  NAME ON THE CARD
                </p>
                <div className="flex justify-between border border-[#D0D5DD] p-2 rounded-lg ">
                  <input
                    type="text"
                    placeholder="Enter name"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="bg-[#D0D5DD] text-[#344054]"
                />
                <p className="text-[#344054] text-[14px]">
                  {" "}
                  Make my donation anonymous{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="bg-[#043259] py-2 px-28 rounded-md text-white text-[15px] mt-9 mb-5 w-fit ">
            Complete Donation Now
          </p>
        </div>
        <div className="flex justify-center ">
          <p className="text-[#1A1A1A80] text-[13px]">
            By completing this donation you agree to the Terms of
            Service and Privacy Policy. Powered by Elevationmind, a registered
            charity.
          </p>
        </div>
      </div>
    </div>
  );
}
