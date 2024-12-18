"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavAtas = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogin = () => {
        router.push("/login");
    };

    const handleLanding = () => {
        router.push("/");
    };

    const handleDashboardClick = () => {
        router.push("/dashboard");
    };

    const handleTaskClick = () => {
        router.push("/task");
    };

    const handleStressCheckerClick = () => {
        router.push("/stressCheck");
    };

    const handleRelax = () => {
        router.push("/relaxation")
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="relative z-50">
            <div
                className={`grid grid-cols-12 py-5 items-center w-full mx-auto ${isMenuOpen ? "bg-[#02055A]" : "bg-white shadow-lg"
                    }`}
            >
                {/* LOGO */}
                <div className="logo col-span-3 flex justify-center items-center">
                    <p className={`text-4xl 2xl:text-5xl font-bold tracking-tighter pb-2 md:pl-0 pl-24 ${isMenuOpen ? "text-white" : "text-[#02055A]"}`}>
                        serenova
                    </p>
                </div>

                {/* BURGER MENU - Displayed only on small screens */}
                <div className="col-span-9 md:hidden flex justify-between items-center pr-7">
                    <p className={`text-4xl font-bold tracking-tighter ${isMenuOpen ? "text-white" : "text-[#02055A]"}`}></p>
                    <Image
                        src="/assets/images/landingPage/burger.svg"
                        width={20}
                        height={20}
                        onClick={toggleMenu}
                        className="cursor-pointer"
                    />
                    {isMenuOpen && (
                        <Image
                            src="/assets/images/landingPage/close.svg"
                            width={30}
                            height={30}
                            onClick={closeMenu}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            </div>

            {/* MENU DROPDOWN - Displayed when burger menu is clicked */}
            <div
                ref={menuRef}
                className={`py-7 absolute top-full left-0 w-full bg-[#02055A] text-white pb-10 flex flex-col items-center space-y-4 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <button onClick={handleDashboardClick} className="text-lg font-medium">
                    Dashboard
                </button>
                <button onClick={handleTaskClick} className="text-lg font-medium">
                    Task
                </button>
                <button onClick={handleStressCheckerClick} className="text-lg font-medium">
                    Stress Checker
                </button>
                <button
                    className="flex justify-center items-center text-bgButton border-2 border-white font-bold bg-white rounded-xl py-2 px-4 w-40"
                    onClick={handleRelax}
                >
                    <Image
                        src="/assets/images/navbarKiri/relax-dark.svg"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    Relaxation
                </button>

                <div className="grid justify-center text-center border-t w-full pt-4">
                    <button
                        className="text-white font-bold bg-[#C62828] rounded-xl py-2 px-4 w-40 flex justify-center items-center mt-2"
                        onClick={handleLanding}
                    >
                        <Image
                            src="/assets/images/navbarKiri/log-red.svg"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavAtas;
