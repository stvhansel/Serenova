"use client";

import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const SignPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSuccess = () => {
        if (isFormValid()) {
            router.push('/success');
        }
    };

    const isFormValid = () => {
        return password.length >= 8 && confirmPassword.length >= 8 && password === confirmPassword;
    };

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
                                <h1 className="font-bold text-3xl 2xl:text-5xl text-[#1D2222] mb-1">Set a New Password</h1>
                                <p className="text-[#969696] text-sm 2xl:text-xl">Must be at least 8 characters</p>
                            </div>
                            <div className="form">
                                
                                {/* FORM PASSWORD BARU */}
                                <label className="font-semibold text-sm 2xl:text-base">Password</label>
                                <div className="flex border rounded-lg overflow-hidden border-greyBorder mt-1 mb-3 w-full relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="text-sm 2xl:text-base px-3 py-2 w-full font-semibold rounded-none bg-white focus:outline-none"
                                        placeholder="********"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-600" />
                                    </button>
                                </div>
                                {password.length > 0 && password.length < 8 && (
                                    <p className="text-red-500 text-xs">Password must be at least 8 characters long.</p>
                                )}

                                {/* FORM PASSWORD CONFIRM */}
                                <label className="font-semibold text-sm 2xl:text-base">Confirm Password</label>
                                <div className="flex border rounded-lg overflow-hidden border-greyBorder mt-1 mb-3 w-full relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="text-sm 2xl:text-base px-3 py-2 w-full font-semibold rounded-none bg-white focus:outline-none"
                                        placeholder="********"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-600" />
                                    </button>
                                </div>
                                {confirmPassword && confirmPassword !== password && (
                                    <p className="text-red-500 text-xs">Passwords do not match.</p>
                                )}

                                {/* BUTTON RESET */}
                                <button
                                    className={`text-sm 2xl:text-base text-center border w-full py-3 rounded-lg bg-bgButton text-white font-bold mt-6 ${
                                        !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    onClick={handleSuccess}
                                    disabled={!isFormValid()}
                                >
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignPage;
