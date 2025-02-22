import React from "react";

export default function Profile() {
  return (
    <div>
      <p>Profile Settings</p>
      <div className="border border-t-gray-50 mt-3 w-full mb-4"></div>

      <label htmlFor="full-name" className="rounded-md w-full block">
        Full Name
      </label>
      <input
        type="text"
        id="full-name"
        placeholder="Mayowa Babatunde"
        className="text-[13px] text-[#5F5F67] border-[#043259] w-full p-2 pr-40 border rounded-md mt-2 mb-4"
      />

      <label htmlFor="email-address" className="rounded-md w-full block">
        Email Address
      </label>
      <input
        type="text"
        id="email-address"
        placeholder="mayowababatunde@gmail.com"
        className="text-[13px] text-[#5F5F67] border-[#043259] w-full p-2 border rounded-md mt-2 mb-4"
      />

      <label
        htmlFor="phone-number"
        className="border-[#043259] rounded-md w-full block"
      >
        Phone Number
      </label>
      <input
        type="text"
        id="phone-number"
        placeholder="+234 8108513963"
        className="text-[13px] text-[#5F5F67] border-[#043259] w-full p-2 border rounded-md mt-2 block"
      />
<p className="text-white bg-[#043259] text-[12px] rounded-md p-3 w-[30%] ml-auto mt-5 text-center">
  Edit Profile
</p>
    </div>
  );
}
