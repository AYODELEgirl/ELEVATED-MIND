import React from "react";

const Header = ({ text, header, classNames, count }) => {
  return (
    <div className="">
      <div
        className={` leading-6 flex items-center ${classNames}`}
      >
        <div className="font-bold text-[1.5rem] mb-2 text-gray-800">{header}</div>
        {count && (
          <div className="bg-primary text-white flex justify-center items-center tex-[1.1rem] font-[500] rounded-full h-[28px] w-[28px] mx-[.5rem]">
            {count}
          </div>
        )}
      </div>
      <div className="text-[1rem] text-gray-600 pt-2">{text}</div>
    </div>
  );
};

export default Header;
