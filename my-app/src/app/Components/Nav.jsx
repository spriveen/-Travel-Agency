"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faPhone,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? "bg-white shadow-md py-3" : "py-0"}`}
    >
      {/* TOP BAR */}
      <div
        className={`w-full flex justify-between items-center gap-3
        px-[2%] sm:px-[8%] lg:px-[12%] transition-all duration-500
        ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}`}
      >
        {/* LEFT */}
        <ul className="hidden lg:flex items-center gap-4 text-[#727272]">
          <li className="text-sm flex items-center">
            <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#8192a0]" />
            +9472637338
          </li>
          <li className="text-sm flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-[#8192a0]" />
            Booking@skyfare.com
          </li>
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-6 w-full lg:w-auto justify-between">
          <ul className="flex gap-4">
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faFlickr} /></li>
            <li><FontAwesomeIcon icon={faXTwitter} /></li>
          </ul>

          <ul className="flex gap-4">
            <li className="cursor-pointer text-sm">Login</li>
            <li className="cursor-pointer text-sm flex items-center gap-1">
              <FontAwesomeIcon icon={faUser} /> Sign Up
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`relative flex justify-between lg:justify-center
        px-[2%] sm:px-[8%] lg:px-[12%] transition-all duration-500
        ${isScrolled ? "bg-white" : "bg-transparent"}`}
      >
        {/* MOBILE LOGO */}
        <div className="lg:hidden text-2xl font-semibold">
          <Link href="/">Sky Fare</Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-14 items-center py-5">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Tour">Tour</Link></li>

          <li className="text-3xl font-semibold">
            <Link href="/">Sky Fare</Link>
          </li>

          <li><Link href="/Faq">Faq</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>

        {/* MOBILE TOGGLE */}
        <div
          className="lg:hidden cursor-pointer flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-xl text-[#193555]"
          />
        </div>

        {/* MOBILE MENU Dropdown */}
        <ul className={`lg:hidden flex-col items-start ps-6 gap-6 bg-[#f7f7f7] shadow-md absolute left-0 w-full
          overflow-auto transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-[500px] top-full mt-3 opacity:100 py-6" : "max-h-0 opacity-0 py-0 top-full"}
          `}>
          <li><a href="#" className="font-[500] hover:text-black">Home</a></li>
          <li><a href="#" className="font-[500] hover:text-black">About</a></li>
          <li><a href="#" className="font-[500] hover:text-black">Tour</a></li>
          <li><a href="#" className="font-[500] hover:text-black">Faq</a></li>
          <li><a href="#" className="font-[500] hover:text-black">Blog</a></li>
          <li><a href="#" className="font-[500] hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
