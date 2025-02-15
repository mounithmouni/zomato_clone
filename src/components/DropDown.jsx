import React from "react";
import indiaLogo from "../assets/india.png";
import uaeLogo from "../assets/uae.png";
import { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("India");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative w-[110px]">
        <div
          className="flex items-center justify-between p-2 bg-white border rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center space-x-2">
            {selectedOption === "India" && (
              <img src={indiaLogo} alt="India" className="w-5" />
            )}
            {selectedOption === "UAE" && (
              <img src={uaeLogo} alt="UAE" className="w-5" />
            )}
            <span>{selectedOption}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md">
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => selectOption("India")}
            >
              <img src={indiaLogo} alt="India" className="w-5 mr-2" />
              <span>India</span>
            </div>
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => selectOption("UAE")}
            >
              <img src={uaeLogo} alt="UAE" className="w-5 mr-2" />
              <span>UAE</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
