// サーバー側レンダリングからクライアント側レンダリングへ
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Index({ data, id, DataArray }) {
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const router = useRouter();

  useEffect(() => {
    // json.parseのIDの場合
    if (JSON.parse(id) === DataArray.length - 1) {
      setNext(0);
    } else {
      setNext(JSON.parse(id) + 1);
    }
    if (JSON.parse(id) === DataArray.length - 1) {
      setPrev(0);
    } else {
      setPrev(JSON.parse(id) - 1);
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className="overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-gray-300
      
      "
      ></div>
      <div className="relative">
        <Image
          src={data?.images[0]}
          alt="bg photo"
          className="h-[400px] lg:mt-24 sm:mt-0 object-fill"
          width={0}
          height={20}
          size="100vw"
          style={{
            width: "100%",
            backgroundSize: "cover",
          }}
        />
      </div>

      <div
        className="absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px]
        justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 
        sm:px-0 sm:text-left 
      "
      >
        <div className="container m-auto">
          <div className="max-w-[650px] w-[100%] m-auto">
            <p
              className="opacity-3 sm:text-left text-center font-sans
             text-[#223740] mb-3"
            >
              Project Sample
            </p>
            <h1
              className="opacity-3 text-[#223740] sm:text-left text-center
              w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl
              xl:text-4xl"
            >
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-12 relative space-x-0 lg:space-x-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%",
        }}
      >
        <div className="col-span-12 lg:col-span-8 mb-20 scrol lg:px-0 sm:px-20">
          {data?.images.map((item) => (
            <div
              key={item}
              className="flex justify-center items-center lg:justify-end"
            >
              <Image
                src={item}
                alt="portfolio photos"
                width={800}
                height={100}
                className="mt-20 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4 lg:px-0 sm:px-20">
          <div
            className="mt-10 sm:mt-24 w-full lg:max-w-[300px]
            lg:px-1 px-3 sticky top-36 pb-14
            "
          >
            <h1 className="text-3xl mb-4 text-[#48AFDE]">{data?.name}</h1>
            <p className="text-[14px] font-sans mb-4 text-[#223740]">
              {data?.des}
            </p>
            <p id="highlight" className="my-2 text-dark text-[20px] font-sans">
              Project Descriptions
            </p>
            <p className="text-[14px] font-sans mb-4 text-[#223740]">
              {data?.des1}
            </p>
            <div className="flex flex-wrap">
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                UI/US Design
              </h1>
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                React.js
              </h1>
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                Next.js
              </h1>
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                Node.js
              </h1>
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                Express
              </h1>
              <h1
                className="mr-5 text-[14px] bg-[#6365F1] lg:bg-[#EEF7FB]
                px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#68787D]"
              >
                UI/US Design
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex bg-accent-color h-48 text-white">
        <div
          className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
          style={{
            backgroundImage: `url(${DataArray[prev]?.images[0]})`,
          }}
        >
          <a
            className="flex justify-center group:hover:bg-[#223740] cursor-pointer 
            transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center
            w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${prev}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            Previous Project
          </a>
        </div>

        <div
          className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
          style={{
            backgroundImage: `url(${DataArray[next]?.images[0]})`,
          }}
        >
          <a
            className="flex justify-center group:hover:bg-[#223740] cursor-pointer 
            transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center
            w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${next}`)}
          >
            Next Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
