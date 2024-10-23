"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "@/app/components/Header/DiagonalDrawer";
import "@/app/components/Header/DiagonalDrawer.css";

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // 次はスクロールを削除して関数をクリーンアップ
    // 削除イベントリスナーをウィンドウ化する
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // 空の依存関係配列を適用して、使用効果を簡単に条件付ける
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      {/* isScrolledがtrueで設定されている場合はヘッダー表示を実行する */}
      {/* アプリケーションをスクロールするときは常にヘッダー上部に固定されたままにする */}
      <header
        className={`
          ${isScrolled ? "headerShow" : ""}
          fixed top-0 left-0 w-full z-50 transition-all duration-500
        `}
        // 条件付きで背景色を指定
        // isScrolledがtrueの時に実行する
        // スクロールしたときに背景色を白に設定する
        // isScrolledがtrueの場合はボックスシャドウを条件付きで指定する
        // 上にスクロールするとページYのアプリケーションのオフセットが0より大きくなる
        // style={{
        //   backgroundColor: isScrolled ? "#fff" : "transparent",
        //   boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        // }}
      >
        <div className="relative">
          <div
            onClick={openDrawer}
            className="
            z-30 absolute cursor-pointer w-14 h-14 
            lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center
            items-center rounded-br-3xl"
          >
            <div
              className="
              relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center"
            >
              <img
                src="/drawer.png"
                alt="drawer item"
                className="w-[150px] h-10"
              />
            </div>
          </div>
        </div>

        {/* invisibleで非表示にする */}
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 1 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 2 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex1(2)}
              >
                AboutMe
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 3 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/page/contactme"
                onClick={() => setSelectedIndex1(3)}
              >
                Hire me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
