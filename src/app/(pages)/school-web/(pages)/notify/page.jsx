"use client"
import React from 'react'
import Navbars from '../Navbars'
import notifyBell from "../../../../../assets/icons/overview/notifyBell.png"
import All from './(metrix)/All';
import Update from './(metrix)/Update';
import Transaction from './(metrix)/Transaction';
import { useState } from 'react';
function page() {
   const tabs = [
      { name: "All" },
      { name: "Update" },
      { name: "Transactions" },
    ];
    const [currentTab, setCurrentTab] = useState(tabs[0]?.name);
  return (
    <div>
        <Navbars  text={"Notification"} img={notifyBell} />
        <div className='flex flex-col gap-1 mt-3'>
        <p className='text-[18px]'>Notifications</p>
        <p className='text-[13px] text-[#848D87]'>Keep updated on the school donation, update and transactions</p>
        </div>
        
        <div className="border border-gray-200 p-1 mt-3">
        <div className="flex gap-4 ">
        {tabs?.map((e, i) => {
          return (
            <div
              key={i}
              className={`text-[#667185] flex items-center gap-3 h-[43px] transition-all cursor-pointer px-2  ${
                currentTab === e?.name
                  ? "border-b-[2px] border-[#F5105C] text-[#F5105C]  font-[800]"
                  : "border-b-[2px] border-transparent"
              }`}
              onClick={() => setCurrentTab(e?.name)}
            >
              <div>{e.name}</div>
            </div>
          );
        })}
      </div>
      <section className="mt-3 ">
        {currentTab === "All" ? (
          <All />
        ) : currentTab === "Update" ? (
          <Update />
        ) : currentTab === "Transactions" ? (
          <Transaction />
        ) : (
          <div>No content available for this tab</div>
        )}
      </section>
      </div>
    </div>
  )
}

export default page