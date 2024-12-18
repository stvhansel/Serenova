"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavbarAtas = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignin = () => {
    router.push("/signin");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-12 py-5 items-center shadow-lg mx-auto">
        {/* LOGO */}
        <div className="logo col-span-3 flex justify-center items-center">
          <p className="text-[#02055A] text-4xl 2xl:text-5xl font-bold tracking-tighter pb-2 md:pl-0 pl-20">
            serenova
          </p>
        </div>

        {/* MENU - Hidden on small screens */}
        <div className="menu col-span-5 items-center hidden md:flex">
          <ul className="nav-list flex space-x-4">
            <li className="flex justify-center items-center">
              <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
                Home
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
                Features
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* BURGER MENU - Displayed only on small screens */}
        <div className="col-span-9 md:hidden flex justify-between items-center pr-7">
          {/* Logo on left, burger on right */}
          <p className="text-[#02055A] text-4xl font-bold tracking-tighter"></p>
          <Image
            src="/assets/images/landingPage/burger.svg"
            width={20}
            height={20}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {/* BUTTONS - Hidden on small screens */}
        <div className="button col-span-4 justify-center items-center gap-x-2 hidden md:flex">
          <button
            className="text-[#02055A] font-bold shadow-lg rounded py-2 px-4 text-xs 2xl:text-sm"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="text-white font-bold shadow-lg bg-bgButton rounded py-2 px-4 text-xs 2xl:text-sm"
            onClick={handleSignin}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* MENU DROPDOWN - Displayed when burger menu is clicked */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#02055A] text-white py-5 flex flex-col items-center space-y-4 z-50">
          <a href="#" className="text-lg font-medium">
            Home
          </a>
          <a href="#" className="text-lg font-medium">
            Features
          </a>
          <a href="#" className="text-lg font-medium">
            About Us
          </a>
          <button
            className="text-[#02055A] font-bold bg-white rounded py-2 px-4 w-40"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="text-white font-bold bg-bgButton rounded py-2 px-4 w-40"
            onClick={handleSignin}
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarAtas;
