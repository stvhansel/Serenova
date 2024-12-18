"use client";

import axiosFetch from "@lib/axiosFetch";
import cookie from "cookie-cutter";


import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavbarKiri = () => {
    const [activeItem, setActiveItem] = useState("dashboard");
    const pathname = usePathname();
    const router = useRouter();

    const token = cookie.get('token');

    const handleRelax = () => {
        router.push('/relaxation');
    }

    const handleLogout = async () => {
        try {
            const response = axiosFetch.post('/api/logout');
            const result = response.data;
            if(result.success){
                cookie.set('token', '', {expires: new Date(0)});
                cookie.set('user_id', '', {expires: new Date(0)});
                router.push('/login');
            }else {
                alert(result.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!token && pathname !== '/forgot'){
            router.push('/login');
        }

        // const Reminder = localStorage.getItem('Reminder');
        // if(!Reminder){
        //     // handleReminder();
        //     // localStorage.setItem('Reminder', true);
        // }
    }, []);


    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (isActive) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                        fill={isActive ? "#02055A" : "#747474"}
                    />
                </svg>
            ),
            link: "/dashboard"
        },
        {
            id: "task",
            label: "Task",
            icon: (isActive) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 6.25C3 5.38805 3.34241 4.5614 3.9519 3.9519C4.5614 3.34241 5.38805 3 6.25 3H17.75C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V6.25ZM12.5 9.25C12.5 9.664 12.836 10 13.25 10H16.75C16.9489 10 17.1397 9.92098 17.2803 9.78033C17.421 9.63968 17.5 9.44891 17.5 9.25C17.5 9.05109 17.421 8.86032 17.2803 8.71967C17.1397 8.57902 16.9489 8.5 16.75 8.5H13.25C13.0511 8.5 12.8603 8.57902 12.7197 8.71967C12.579 8.86032 12.5 9.05109 12.5 9.25ZM13.25 14C13.0511 14 12.8603 14.079 12.7197 14.2197C12.579 14.3603 12.5 14.5511 12.5 14.75C12.5 14.9489 12.579 15.1397 12.7197 15.2803C12.8603 15.421 13.0511 15.5 13.25 15.5H16.75C16.9489 15.5 17.1397 15.421 17.2803 15.2803C17.421 15.1397 17.5 14.9489 17.5 14.75C17.5 14.5511 17.421 14.3603 17.2803 14.2197C17.1397 14.079 16.9489 14 16.75 14H13.25ZM10.78 8.78C10.8537 8.71134 10.9128 8.62854 10.9538 8.53654C10.9948 8.44454 11.0168 8.34522 11.0186 8.24452C11.0204 8.14382 11.0018 8.04379 10.9641 7.9504C10.9264 7.85701 10.8703 7.77218 10.799 7.70096C10.7278 7.62974 10.643 7.5736 10.5496 7.53588C10.4562 7.49816 10.3562 7.47963 10.2555 7.48141C10.1548 7.48319 10.0555 7.50523 9.96346 7.54622C9.87146 7.58721 9.78866 7.64631 9.72 7.72L8.25 9.19L7.78 8.72C7.63783 8.58752 7.44978 8.5154 7.25548 8.51882C7.06118 8.52225 6.87579 8.60097 6.73838 8.73838C6.60097 8.87579 6.52225 9.06118 6.51883 9.25548C6.5154 9.44978 6.58752 9.63783 6.72 9.78L7.72 10.78C7.86063 10.9205 8.05125 10.9993 8.25 10.9993C8.44875 10.9993 8.63937 10.9205 8.78 10.78L10.78 8.78ZM10.78 13.22C10.6394 13.0795 10.4488 13.0007 10.25 13.0007C10.0512 13.0007 9.86063 13.0795 9.72 13.22L8.25 14.69L7.78 14.22C7.63783 14.0875 7.44978 14.0154 7.25548 14.0188C7.06118 14.0223 6.87579 14.101 6.73838 14.2384C6.60097 14.3758 6.52225 14.5612 6.51883 14.7555C6.5154 14.9498 6.58752 15.1378 6.72 15.28L7.72 16.28C7.86063 16.4205 8.05125 16.4993 8.25 16.4993C8.44875 16.4993 8.63937 16.4205 8.78 16.28L10.78 14.28C10.9205 14.1394 10.9993 13.9488 10.9993 13.75C10.9993 13.5512 10.9205 13.3606 10.78 13.22Z"
                        fill={isActive ? "#02055A" : "#747474"}
                    />
                </svg>
            ),
            link: "/task"
        },
        {
            id: "stressChecker",
            label: "Stress Checker",
            icon: (isActive) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        fill={isActive ? "#02055A" : "#747474"}
                        stroke={isActive ? "#02055A" : "#747474"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 12H15L13 17L11 7L9 12H7"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            link: "/stressCheck"
        },
    ];

    return (
        <div className="h-full relative">
            {/* LOGO */}
            <div className="flex justify-center">
                <h1 className="tracking-tight font-bold text-bgButton text-3xl">serenova</h1>
            </div>
            {/* LIST NAVBAR */}
            <div className="mt-16">
                <ul>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.link;

                        return (
                            <li
                                key={item.id}
                                className={`p-2 rounded-md flex items-center pl-8 relative cursor-pointer ${isActive ? "text-[#02055A]" : "text-[#2B3030]"
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute left-0 w-2 h-8 bg-[#02055A] rounded-r-md"></div>
                                )}
                                <div className="mr-2">{item.icon(isActive)}</div>
                                <Link href={item.link} className="text-md transition-colors">
                                    <span
                                        className={`${isActive
                                                ? "text-[#02055A] font-bold"
                                                : "text-[#2B3030] font-medium"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* BUTTON RELAX */}
            <div className="flex justify-center items-center mt-10">
                <button
                className="bg-bgButton text-white text-md font-bold flex justify-center items-center py-2 px-7 rounded-xl"
                onClick={handleRelax}>
                    <Image
                        src="/assets/images/navbarKiri/relax.svg"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    Relaxation
                </button>
            </div>
            {/* LOGOUT */}
            <div className="absolute bottom-0">
                <div className="flex pl-6 items-center">
                    <button
                    className="font-medium text-[#C62828] text-md flex items-center"
                    onClick={handleLogout}>
                        <Image
                            src="/assets/images/navbarKiri/logout.svg"
                            width={30}
                            height={30}
                            className="mr-2"
                        />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarKiri;
