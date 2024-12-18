"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Section03 = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Set isVisible to true when the element is in the viewport
            } else {
                setIsVisible(false); // Set isVisible to false when the element is out of the viewport
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            className="bg-[url('/assets/images/landingPage/comment.png')] bg-no-repeat bg-cover bg-center relative py-11"
            id="about"
            ref={sectionRef}
        >
            <div className="grid place-items-center">
                <h1 className={`text-bgButton font-semibold text-4xl transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 ease-in-out`}>
                    Voices of Serenova
                </h1>
            </div>
            {/* COMMENT SECTION */}
            <div className="z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center max-w-[1300px] mx-auto my-11 px-9">
                    {/* COMMENT 1 */}
                    <div className={`bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto1.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Briana Patton</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">Manager</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                                Serenova streamlines my task management and helps maintain a healthy work-life balance. The Stress Checker and relaxation features are ideal for managing stress during busy days.
                            </p>
                        </div>
                    </div>
                    {/* COMMENT 2 */}
                    <div className={`bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto2.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Imelda Cowen</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">Freelancer</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                                The stress-checking feature is a lifesaver! It helps me stay aware of my mental health while managing my projects efficiently. Highly recommended.
                            </p>
                        </div>
                    </div>
                    {/* COMMENT 3 */}
                    <div className={`bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto3.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Emily Richardson</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">Stay-at-Home Parent</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                                I didn’t realize how much stress was affecting my work until I started using this site. The stress monitor and AI recommendations have helped me stay on top of everything.
                            </p>
                        </div>
                    </div>
                    {/* Add more comments here for larger screens */}
                    {/* COMMENT 4 */}
                    <div className={`hidden sm:block bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto4.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Sophia Jonson</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">HR Specialist</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                                Managing home and family life is tough, but this platform really helps me stay on top of things. The stress level check feature has been a game changer in keeping myself calm.
                            </p>
                        </div>
                    </div>
                    {/* COMMENT 5 */}
                    <div className={`hidden sm:block bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto5.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Dylan Schwartz</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">Student</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                                Serenova is an amazing tool for managing my studies. The Stress Checker is my favorite feature because it reminds me to take breaks when I need them.
                            </p>
                        </div>
                    </div>
                    {/* COMMENT 6 */}
                    <div className={`hidden sm:block bg-white rounded-xl py-9 px-10 transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mr-2">
                                    <Image
                                        src="/assets/images/landingPage/foto6.jpg"
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full" />
                                </div>
                                <div className="text-start">
                                    <p className="font-semibold sm:text-[10px] xl:text-base 2xl:text-lg">Benjamin Hall</p>
                                    <p className="text-[#747474] sm:text-[9px] xl:text-xs 2xl:text-sm">Student</p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/landingPage/petik.png"
                                    width={50}
                                    height={50}
                                    className="sm:h-4 sm:w-auto md:h-7 md:w-auto lg:h-9 lg:w-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="2xl:text-sm xl:text-xs lg:text-xs text-[#606060] text-start sm:text-[9px]">
                            Serenova helps me stay organized while reminding me to relax. The dashboard is clear, and the stress checker ensures I’m not overlooking my well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section03;
