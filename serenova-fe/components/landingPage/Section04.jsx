"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Section04 = () => {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Set to true when the section is visible
            } else {
                setIsVisible(false); // Set to false when the section is not visible
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

    const handleSignin = () => {
        router.push('/signin');
    };

    return (
        <div className="grid place-items-center my-36 relative" ref={sectionRef}>
            <div className={`relative flex justify-center items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src="/assets/images/landingPage/blur.png"
                    width={500}
                    height={500}
                    className="absolute z-0"
                />

                <div className="relative z-10 text-center w-full">
                    <h1 className="text-bgButton font-bold text-3xl px-7 sm:text-4xl sm:px-0">Take Control of Your Day</h1>
                    <p className="text-[#606060] text-center mt-2 text-sm sm:text-base">
                        Unlock a balanced and productive lifestyle<br />
                        with<span className="font-bold"> Serenova</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <button 
                            className="border bg-bgButton rounded-lg text-white text-base sm:text-lg font-bold py-3 px-5"
                            onClick={handleSignin}
                        >
                            Get Started with Serenova
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section04;
