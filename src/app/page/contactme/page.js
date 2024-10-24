"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  // ユーザーが入力フィールド内に入力を開始するとそのアクションによって更新がトリガーされる実装
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputText({
      ...inputText,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setInputText({ ...inputText, phoneNumber: numericValue });
  };

  const clearState = () => {
    setInputText({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...inputText,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          clearState();
          toast(response.message);
        } else {
          clearState();
          toast("something went wrong");
        }
      })
      .catch((e) => {
        setLoading(false);
        clearState();
        toast("something went wrong");
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div
        className="
        flex flex-col items-center justify-center w-full pt-[80px] lg:pb-[80px] mt-4"
      >
        <div
          className='
        flex flex-col items-center justify-center bg-[url("/offices.jpg")] 
        bg-cover bg-center w-full h-[400px]'
        >
          <div
            className="flex flex-col items-center justify-center w-full h-full
          bg-[#223740]/70 background-brigntess-50"
          >
            <div
              className="
              text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide 
              uppercase font-semibold text-[20px] text-white rounded-lg"
            >
              <a href="#contact" className="cursor-pointer">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1
                className="
                recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide"
              >
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-white font-[300] text-center text-xl">
                Are you looking for a responsible, professinal full-stack
                developer and designer for your website or your web application
                projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
          </div>
        </div>

        <div className="px-[20px] lg:px-0">
          <div className="sm:flex gap-[20px] xl:gap-0 mt-[50px] max-w-[1105px] w-full h-full">
            <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[300px] md:w-full h-full lg:mb-0 xl:flex-row 
            gap-[20px] md:gap-7 xl:gap-6">
              <div
                className="grid justify-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer
                transition-all transform duration-300 hover:bg-[#223740] hover:text-white
                hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Location...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Visit Us At:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">65th Street, Los Angeles</p>
                </div>
                <div>
                  <p className="text-[#666666]">65th Street, Los Angeles</p>
                </div>
              </div>

              <div
                className="grid justify-center py-[35px] px-[45px] rounded-lg shadow-lg
                cursor-pointer transition-all transform duration-300 hover:bg-[#223740]
                hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FiPhoneCall size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>24*7 Service..</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Call Us On</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Tel: +3258723591</p>
                </div>
                <div>
                  <p className="text-[#666666]">Mob: +2372084620</p>
                </div>
              </div>

              <div
                className="
                grid justify-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer 
                transition-all transform duration-300 hover:bg-[#223740]
              hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiFillMail size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Drop A Line</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Maill Address</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">ehizextech@gmail.com</p>
                </div>
                <div>
                  <p className="text-[#666666]">edubaba@gmail.com</p>
                </div>
              </div>

              <div
                className="
                grid justify-center py-[35px] px-[45px] rounded-lg shadow-lg 
                cursor-pointer transition-all transform duration-300
              hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiOutlineFieldTime size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Office Hours..</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Opening Time</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Mon - Fri : 9am - 6pm</p>
                </div>
                <div>
                  <p className="text-[#666666]">Sunday (Closed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="#contact"
        className="
        flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] 
        px-[30px] max-w-[1105px] m-auto p-10 mb-[-160px]
      "
      >
        <div
          className="
          hidden xl:block relative w-[50%] xl:w-[50%] h-[550px] rounded-xl 
          md:w-full lg:w-[50%] bg-center bg-cover"
          style={{
            backgroundImage: `url("/customer-service.jpeg")`,
          }}
        >
          <div
            className="
            absolute h-full w-full bg-gradient-to-t from-[#223740]
          via-[#223740] shadow-inner opacity-70"
          >
            <div
              className="
              absolute inset-0 flex flex-col gap-[20px]
              items-center justify-center text-white 
              shadow-lg p-6"
            >
              <div
                className="
                text-4xl xl:mt-[150px] mt-0 rounded-full
                px-[15px] py-[15px] bg-[#48AFDE] text-white"
              >
                <FaHeadphones />
              </div>
              <div className="font-semibold text-[24px]">Chat With Live!</div>
              <div className="">
                <p className="text-center mt-5 font-[200] text-xl">
                  Are you looking for a responsible, professinal full-stack
                  developer and designer for your website or your web
                  application projects? Just leave me a message and tell me how
                  I can help.
                </p>
              </div>
              <div>
                <button
                  className="
                bg-[#48AFDE] text-white mb-[30px] px-4 py-2 hover:bg-[#223740]
                  transition-colors rounded-xl"
                >
                  Let chat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div
            className="
          text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase
          font-300 font-sans text-[14px] text-white rounded-lg
          "
          >
            Contact Us
          </div>
          <div className="">
            <p className="text-[30px] text-[#48AFDE]">
              Request A Call Back ! Feel Free To Reach & Contact Us.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] ">
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name.."
                required
                value={inputText.name}
                onChange={handleChange}
                className="
              px-[12px] py-[12px] outline-none rounded-md flex-1 
            bg-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email.."
                required
                value={inputText.email}
                onChange={handleChange}
                className="
              px-[12px] py-[12px] outline-none rounded-md flex-1 
            bg-gray-200"
              />
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="phoneNumber"
                placeholder="Your Number.."
                required
                value={inputText.phoneNumber}
                onChange={handlePhoneChange}
                className="
              px-[12px] py-[12px] outline-none rounded-md flex-1 
            bg-gray-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject.."
                required
                value={inputText.subject}
                onChange={handleChange}
                className="
              px-[12px] py-[12px] outline-none rounded-md flex-1 
            bg-gray-200"
              />
            </div>
            <div className={`${hind.className}`}>
              <textarea
                required
                name="message"
                placeholder="Your Message.."
                value={inputText.message}
                onChange={handleChange}
                className="
                px-[12px] py-[12px] outline-none h-[180px] w-full rounded-md flex-1 
              bg-gray-200"
              />
            </div>
            <div>
              {loading && (
                <div
                  className="mb-3 text-center ml-5 w-6 h-6 rounded-full
                border-t-2 border-blue-600 border-solid animate-spin"
                ></div>
              )}
              <button
                className="
              bg-[#48AFDE] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#223740] 
              transition-colors duration-300 font-semibold rounded-lg text-white
              "
              >
                Send Us ,Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
