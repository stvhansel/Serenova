"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleLogin = () => {
        router.push('/login');
    };

    const handleChange = (index, event) => {
        const newValue = event.target.value.replace(/\D/g, ''); // Hanya ambil angka
        const newOtp = [...otp];
        newOtp[index] = newValue.substring(0, 1); // Hanya ambil 1 karakter
        setOtp(newOtp);

        // Pindahkan fokus ke input berikutnya jika ada dan bukan penghapusan
        if (newValue && index < 3) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        // Jika tombol Backspace ditekan dan input kosong, fokuskan ke input sebelumnya
        if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const isOtpComplete = otp.every((digit) => digit !== '');

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
                        <div className="grid w-full max-w-lg">
                            <div className="mb-5">
                                <h1 className="font-bold text-3xl 2xl:text-5xl text-[#1D2222] mb-1">Password Reset</h1>
                                <p className="text-[#969696] text-sm 2xl:text-xl">We’ve sent a code to 
                                    <span className="font-bold text-[#2B3030]"> alfredwltn@gmail.com</span>
                                </p>
                            </div>
                            <div className="form">
                                {/* FORM OTP */}
                                <div className="flex space-x-4 mt-4 mb-3">
                                    {otp.map((value, index) => (
                                        <input
                                            key={index}
                                            id={`otp-input-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={value}
                                            onChange={(event) => handleChange(index, event)}
                                            onKeyDown={(event) => handleKeyDown(index, event)}
                                            className={`w-16 h-16 text-center border ${
                                                value ? 'border-[#02055A]' : 'border-greyBorder'
                                            } rounded-md text-2xl focus:outline-none`}
                                        />
                                    ))}
                                </div>

                                {/* BUTTON */}
                                <button
                                    className={`text-sm 2xl:text-base text-center border w-full py-3 rounded-lg bg-bgButton text-white font-bold mt-6 ${
                                        !isOtpComplete ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    disabled={!isOtpComplete}
                                >
                                    Continue
                                </button>

                                <div className="text-center mt-6">
                                    <p className="text-[#969696] font-medium text-sm 2xl:text-base">Didn’t receive the email?
                                        <button className="text-[#02055A] font-extrabold ml-2 2xl:text-base">
                                            Resend
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
