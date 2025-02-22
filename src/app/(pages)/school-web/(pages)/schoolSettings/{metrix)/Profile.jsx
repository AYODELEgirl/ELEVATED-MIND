import Image from "next/image";
import React, { useState } from "react";
import profilPic from "../../../../../../assets/images/profilPic.png";
import profileLogo from "../../../../../../assets/images/profileLogo.png";
function Profile() {
  const [currentTab, setCurrentTab] = useState(false);
  return (
    <div>
      <p className="text-[#1A1A1AE5]">School Profile</p>
      <div className="border border-t-gray-50 w-[100%] mt-2 mb-2"></div>
      <Image src={profilPic} alt="profilepic" />
      <div className="flex flex-col gap-3 items-center">
        <Image src={profileLogo} alt="profilelogo" width={70} height={70} />
        <p>Lagos Preparatory</p>
        <p className="text-[12px] text-[#848D87]">Secondary</p>
        <div className="flex gap-2">
          <p className="bg-[#04325926] text-[12px] text-[#043259] rounded-md px-2 py-1">
            Total Student: <span className="text-[13px]">1276</span>
          </p>
          <p className="bg-[#F5105C26] text-[#F5105C] text-[12px] rounded-md px-2 py-1">
            Total supported student: <span className="text-[13px]">64</span>
          </p>
        </div>
      </div>

      <div>
        {currentTab ? (
          <div>
            {" "}
            <div className="flex gap-5 mt-7 px-2">
              <div className="w-[50%] flex flex-col text-[13px] gap-6">
                <p>School Name</p>
                <p>Address</p>
                <p>School Level</p>
                <p>School Type</p>
                <p>Principal/Administrator Name</p>
                <p>Email Address</p>
                <p>Phone Number</p>
                <p>School Grades</p>
                <p>School Performance</p>
                <p>School Acheivements</p>
                <p>Total Students Supported</p>
                <p>Additional school programs</p>
              </div>
              <div className="w-[50%] flex flex-col text-[13px] gap-6">
                <p>Lagos Preparatory School</p>
                <p>Salami Bello Avenue, Abuja.</p>
                <p>Secondary</p>
                <p>Public</p>
                <p>Mr Dosumu Adetunde</p>
                <p>school@Lagospreparatory.com</p>
                <p>+234 707 890 1891</p>
                <p>J.s.s 1 - J.s.s 3 & S.s.s 1 - S.s.s 3</p>
                <p>Excellent</p>
                <p>
                  2024 Winner Principal’s Cup, 2022 Winner Cowbellpedia
                  Mathematics Competition
                </p>
                <p className="bg-[#ECFDF3] text-[#027A48] text-[12px] px-2 py-1 rounded-lg w-fit">
                  Completed{" "}
                  <span className="text-[#027A48] text-[13px]">28</span>
                </p>
                <p>
                  Sports teams, Quiz contests, Math initiatives, Art Programs,
                  Inclusive Learning
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex justify-center items-center min-h-screen">
              <div className="space-y-4 w-full max-w-md">
                <div>
                  <label
                    htmlFor="schoolName1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School Name
                  </label>
                  <input
                    id="Lagos Preparatory"
                    type="text"
                    placeholder="Enter School Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="schoolName2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School level
                  </label>
                  <input
                    id="Secondary"
                    type="text"
                    placeholder="Enter School Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School Type
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Enter School Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total student
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Enter School Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="67"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total student Supported
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Enter School Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Completed Supoorted Students{" "}
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="45"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Principal/Administrator Name{" "}
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Mr/Mrs"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address{" "}
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Enter Email Address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number{" "}
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="schoolName3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School Level{" "}
                  </label>
                  <input
                    id="Public"
                    type="text"
                    placeholder="J.s.s 1 - J.s.s 3 & S.s.s 1 - S.s.s 3"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="performance"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Performance
                  </label>
                  <select
                    id="performance"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="" disabled selected>
                      Select Performance Level
                    </option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="schoolAchievements"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School Achievements
                  </label>
                  <textarea
                    id="Enter School Acheivements"
                    placeholder="Enter School Acheivements"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="schoolAchievements"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Additional School Progam{" "}
                  </label>
                  <textarea
                    id="Enter Additional School Program"
                    placeholder="Enter Additional School Progra"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="5"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border border-t-gray-50 w-[100%] mt-2 mb-2"></div>
      <div className="flex justify-end mt-6 mb-3">
        <p
          onClick={() => setCurrentTab(!currentTab)}
          className="bg-[#043259] text-[13px] rounded-lg text-white w-fit px-2 py-2"
        >
          Edit Profile
        </p>
      </div>
    </div>
  );
}

export default Profile;
