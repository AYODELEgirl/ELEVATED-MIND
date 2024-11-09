"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

function Navbar() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening and closing of the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Close the modal if clicked outside
  const closeModal = (e) => {
    // If the modal was clicked, prevent closing
    if (e.target.closest(".modal-content")) return;
    setIsModalOpen(false);
  };

  const tabs = [
    { name: "Overview", link: "/" },
    { name: "My Donation", link: "/my-donation" },
    { name: "School", link: "/school" },
    { name: "Impact", link: "/impact" },
    { name: "Report", link: "/report" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center py-4 px-[1rem] h-[70px] sticky top-0 bg-primary z-50">
      <div>
        <Image src={logo} alt="logo" width={200} />
      </div>

      <div className="text-white flex gap-[1rem]">
        {tabs?.map((e, i) => (
          <Link key={i} href={e?.link}>
            <div
              className={`link px-4 py-1 rounded-[2rem] ${
                pathname === e?.link ? "bg-white active text-primary" : ""
              } transition duration-500 ease-in-out`}
            >
              {e?.name}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-white flex items-center gap-8 p-4 relative">
        <div className="cursor-pointer">
          <FaRegBell size={25} />
        </div>

        {/* Arrow Down Icon that triggers the modal */}
        <div
          className="flex items-center gap-1 cursor-pointer relative  "
          onClick={toggleModal} // Now the modal is toggled by clicking on the arrow down icon
        >
          <div className="text-primary p-[.4rem] rounded-full bg-white">MB</div>
          <div>
            <IoIosArrowDown size={18} />
          </div>
          {isModalOpen && (
            <div
            style={{zIndex:"999888"}}
              className="absolute right-0 top-12 bg-red-500 text-white p-6 rounded-md shadow-lg w-64" // Set z-10 here
              onClick={closeModal} // Close modal when clicking outside
            >
              <div className="modal-content">
                <h2 className="font-semibold text-lg mb-4">Settings</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Notification Preferences</span>
                    <button className="text-xs text-white bg-gray-700 hover:bg-gray-600 p-1 rounded">
                      Edit
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Privacy Settings</span>
                    <button className="text-xs text-white bg-gray-700 hover:bg-gray-600 p-1 rounded">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-content mt-4">
                <h2 className="font-semibold text-lg mb-4">Contents</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Account Details</span>
                    <Link  href= "/settings"className="text-xs text-white bg-gray-700 hover:bg-gray-600 p-1 rounded">
                     Settings
                    </Link>
                  </div>

                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  className="text-xs text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
      </div>
    </div>
  );
}

export default Navbar;
