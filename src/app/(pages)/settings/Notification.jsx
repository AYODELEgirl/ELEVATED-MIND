import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Notification() {
  const [enabled, setEnabled] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <>
      <div>
        <p
          style={{ fontWeight: "400", fontSize: "20px" }}
          className="text-black mb-4"
        >
          Notification settings
        </p>
        <div className="border border-t-gray-50 mt-3 w-[100%] mb-4"></div>
        <div className="flex gap-5 mb-10">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] text-black">General Notifications</p>
            <p className="text-[12px] text-[#667185] w-[70%]">
              Notifications about requests, transactions and exclusive offers
            </p>
          </div>
          <div className={"flex flex-col gap-5"}>
            <div className={"flex gap-3"}>
              <div>
                {" "}
                <Switch
                  checked={enabled.first}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>Upcoming donations</p>
                <p className={"text-[#667185] text-[12px] "}>
                  Receive notifications for every upcoming donation
                </p>
              </div>
            </div>
            <div className={"flex gap-3"}>
              <div>
                {" "} 
                <Switch
                  checked={enabled.second}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>Upcoming donations</p>
                <p className={"text-[#667185] text-[12px]"}>
                  Receive notifications for every upcoming donation
                </p>
              </div>
            </div>
            <div className={"flex gap-3"}>
              <div>
                {" "}
                <Switch
                  checked={enabled.third}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>Upcoming donations</p>
                <p className={"text-[#667185] text-[12px]"}>
                  Receive notifications for every upcoming donation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-t-gray-50 mt-9 w-[100%] mb-4 "></div>

        <div className="flex gap-[5.8rem] mb-10">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] text-black">Notification methods</p>
            <p className="text-[12px] text-[#667185]">
              Choose how you prefer to receive notifications.{" "}
            </p>
          </div>
          <div className={"flex flex-col gap-5"}>
            <div className={"flex gap-3"}>
              <div>
                {" "}
                <Switch
                  checked={enabled.first}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>Email notifications</p>
                <p className={"text-[#667185] text-[12px] "}>
                  Receive notifications via email{" "}
                </p>
              </div>
            </div>
            <div className={"flex gap-3"}>
              <div>
                {" "}
                <Switch
                  checked={enabled.second}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >   
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>Push notification</p>
                <p className={"text-[#667185] text-[12px]"}>
                  Get real-time updates and alerts directly on your phone{""}
                </p>
              </div>
            </div>
            <div className={"flex gap-3"}>
              <div>
                <Switch
                  checked={enabled.third}
                  onChange={(e) => handleChange(e)}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-[#4CAF50]"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
              </div>
              <div className="flex flex-col gap-1">
                <p>SMS notification</p>
                <p className={"text-[#667185] text-[12px]"}>
                  Receive notification via SMS{" "}
                </p>
              </div>
                    
            </div>
            {/* <p className="text-white bg-[#043259] p-3 rounded-md text-[12px] w-fit">
                 Save Changes
              </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
