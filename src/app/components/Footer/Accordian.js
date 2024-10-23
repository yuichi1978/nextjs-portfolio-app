"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Accordian({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#393939] mb-4 py-2">
      <div
        className="flex justify-between items-center p-2 sm:p-4 w-full bg-[#223740]"
        onClick={toggleAccordian}
      >
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <div className="bg-[#393939] w-8 h-8 flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-white ${isOpen ? "" : "-rotate-90"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className="p-4 bg-[#223740]">
            {content.map((item, index) => (
              <p className="p-1 text-gray-400 font-sans" key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
}
