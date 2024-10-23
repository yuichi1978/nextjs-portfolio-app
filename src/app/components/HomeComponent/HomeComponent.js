import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto ">
          <div className="grid grid-cols-12 ">
            <div
              className=" bg-white flex flex-col justify-center col-span-12 
              md:col-span-5 md:bg-transparent"
            >
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1
                    class="text-[#223740] font-recoletaBlack text-7xl md:text-6xl lg:text-7xl
                   xl:text-8xl mt-5 md:mt-3"
                  >
                    I'm Ehiz
                  </h1>
                  <h2
                    class={`text-[#223740] py-2 font-bold uppercase text-md md:text-xs lg:text-xl ${hind.className}`}
                  >
                    CEO edubaba Digital &amp; an instructor
                  </h2>

                  <a
                    href="/#portfolio"
                    class={`inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg
                  text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 
                    md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 
                    xl:mt-10 ${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href="ehizcv.pdf"
                    download="Ehiedu Ehizcv.pdf"
                    className={`ml-5 inline-block bg-[#223740] transition-all duration-300 ease-in-out 
                    rounded-lg  text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1
                    py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 
                    xl:mt-10 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 col-span-12 md:pt-[130px] pt-[50px] md:bg-transparent bg-[#d9eef7]">
              <div
                className="m-auto container"
                style={{ width: "100%", height: "100%" }}
              >
                <img src="/ehizeex.png" decoding="async" alt="profile pics" />
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative bottom-[70px] max-w-sm md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 
                overflow-auto mx-auto bg-white rounded-2xl z-20"
                style={{
                  boxShadow: "#48AFDE -10px 25px 50px 10px",
                }}
              >
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    <img src="/mongodb.png" alt="mongodb" className="h-12" />
                    <img src="/reactjs.png" alt="reactjs" className="h-12" />
                    <img src="/nextjs.png" alt="nextjs" className="h-12" />
                    <img src="/docker.png" alt="docker" className="h-12" />
                    <img
                      src="/expressjs.png"
                      alt="expressjs"
                      className="h-12"
                    />
                    <img src="/nodejs.png" alt="nodejs" className="h-12" />
                    <img
                      src="/expressjs.png"
                      alt="expressjs"
                      className="h-12"
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
