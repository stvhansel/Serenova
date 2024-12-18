"use client";

import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login');
    }

    const handleReset = async (e) => {
        e.preventDefault();

        const data = {
            email : document.getElementById('email').value
        }

        try {
            const response = await axios.post('http://localhost:8000/api/resetEmail', data);
            const result = response.data;

            alert(result)
        } catch (error) {
            console.log(error);
        }
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
                        <div className="grid w-full max-w-lg">
                            <div className="mb-5">
                                <h1 className="font-bold text-3xl 2xl:text-5xl text-[#1D2222] mb-1">Forgot Password?</h1>
                                <p className="text-[#969696] text-sm 2xl:text-xl">No worries, we’ll help to reset your password</p>
                            </div>
                            <div className="form">
                                {/* FORM EMAIL */}
                                <label className="font-semibold text-sm 2xl:text-base">Email</label>
                                <div className="border rounded-lg overflow-hidden border-greyBorder mt-1 mb-3 w-full">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="text-sm 2xl:text-base  px-3 py-2 w-full font-semibold rounded-none bg-white focus:outline-none"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                {/* BUTTON */}
                                <button
                                    onClick={handleReset}
                                    className="text-sm 2xl:text-base text-center border w-full py-3 rounded-lg bg-bgButton text-white font-bold mt-6"
                                >
                                    Reset Password
                                </button>

                                <div className="text-center mt-6">
                                    <p className="text-[#969696] font-medium text-sm 2xl:text-base">Suddenly remember your password?
                                        <button onClick={handleLogin} className="text-[#02055A] font-extrabold ml-2 2xl:text-base">
                                            Back to Login
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page;
