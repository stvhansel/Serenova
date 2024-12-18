"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login');
    }

    return (
        <div>
            <section className="login w-full h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* KIRI */}
                    <div className="flex justify-center items-center bg-gradient-to-br from-gradient1 to-gradient2 h-full p-6">
                        <h1 className="font-bold tracking-tighter text-white text-7xl text-center md:text-7xl lg:text-7xl 2xl:text-8xl">
                            serenova
                        </h1>
                    </div>
                    {/* KANAN */}
                    <div className="flex justify-center items-center bg-bgWhite h-full p-6">
                        <div className="grid w-full max-w-lg justify-center place-items-center">
                            <Image src="/assets/images/login-signin/success.svg" width={150} height={150} alt="Success Image" />
                            <h1 className="font-bold text-3xl 2xl:text-5xl text-[#2B3030]">You're All Set!</h1>
                            <p className="font-medium text-sm 2xl:text-xl text-[#969696]">Your password has been reset</p>
                            <button
                                className="bg-bgButton text-white font-bold py-3 px-6 rounded-lg text-sm 2xl:text-xl w-full mt-6"
                                onClick={handleLogin}
                                >
                                Back to Login
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
