"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
function Navbars({ img, text }) {
  const router = useRouter();
  const handleSchoolWebNotify = () => {
    router.push('/school-web/notify');
  };
  return (
    <div className="mt-4 px-2 w-full">
      <div className="flex justify-between ">
        <div className="flex justify-between">
          <div className="flex mt-3  gap-2">
            <p className="text-[15px] text-[#999999]">
              Pages <span className="ml-4">/</span>{" "}
            </p>
            <div className="flex gap-2 items-center ">
              <Image src={img} alt="img" />
              <p className="text-[16px] text-[#212121]">{text}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between  gap-5 items-center mt-1">
          <GoBell  onClick={handleSchoolWebNotify}  size={30} className="cursor-pointer" />
          <div className="bg-[#0432591A] p-2 w-10 h-10 text-[17px] rounded-full flex items-center justify-center">
            LP
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#121212]">Lagos Preparatory</p>
            <p className="text-[#12121299] text-[12px]">School</p>
          </div>
          <IoIosArrowDown size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbars;

// "use client"; // Add this to specify that the component should run on the client side

// // import { useRouter } from 'next/router';
// import React from "react";

// function Navbars() {
//   const pathname = window.location.pathname;

//   const segments = pathname.split("/");

//   const overview = segments[segments.length - 1];

//   console.log(overview);

//   return <div>Navbars / {overview}</div>;
// }

// export default Navbars;
