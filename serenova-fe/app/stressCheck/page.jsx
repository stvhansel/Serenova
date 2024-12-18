"use client";

// import NavbarKiri from '@components/NavbarKiri';
import IntensityBar from '@components/dashboard/IntensityBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NavAtas from '@components/NavAtas';
import StressHistoryBar from '@components/dashboard/StressHistoryBar';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const NavbarKiri = dynamic(() => import('@components/NavbarKiri'), {
    ssr: false,
});

const page = () => {
    const router = useRouter();
    const [hasData, setHasData] = useState(false);

    const handleQuestion = () => {
        router.push('/stressQuestion');
    };

    useEffect(() => {
        const checkData = async () => {
            try {
                const response = await fetch('/api/historycheck');
                const data = await response.json();
                setHasData(data.length > 0); // Set hasData to true if there's data
            } catch (error) {
                console.error("Error fetching history data:", error);
                setHasData(false); // If there's an error, no data is available
            }
        };

        checkData();
    }, []);

    return (
        <div className="flex h-screen flex-col md:flex-row">
            {/* NAVBAR ATAS FOR SMALL SCREENS */}
            <div className="block md:hidden">
                <NavAtas />
            </div>

            {/* NAVBAR KIRI FOR MEDIUM AND ABOVE */}
            <div className="hidden md:block md:w-64 h-full py-7">
                <NavbarKiri />
            </div>
            {/* MAIN */}
            <div
                className="flex-1 h-full p-4 overflow-y-auto"
                style={{
                    background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
                }}>
                <h1 className="text-bgButton font-semibold text-2xl mt-3">
                    Stress Checker
                </h1>
                {/* KANAN */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 bg-white p-7 rounded-lg gap-4">
                    <div className="grid justify-center px-4 lg:border-r-2">
                        <h1 className="text-bgButton font-semibold text-2xl text-center mb-7">Your Stress Level History</h1>
                        {hasData ? (
                            <StressHistoryBar />
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <Image src="/assets/images/dashboard/first.svg" width={200} height={200} alt="No activities yet" />
                                <p className="font-bold text-bgButton text-center mt-3">
                                    No Data Available
                                </p>
                                <p className="font-medium text-[#505050] text-xs text-center mt-2">Let's check your stress level!</p>
                            </div>
                        )}
                        {hasData && (
                            <p className="text-[#505050] text-xs mt-3 text-justify px-2 overflow-hidden">
                                The graph above shows the history of your stress checker.
                                You can see the history of your stress levels going up and down.
                                It is hoped that you will understand the situation better and
                                always get enough rest.
                            </p>
                        )}
                    </div>
                    {/* KANAN */}
                    <div className="grid justify-center px-4 border-t-2 pt-7 lg:border-0 lg:pt-0">
                        <h1 className="text-bgButton font-semibold text-2xl text-center">Check Your Stress Level</h1>
                        <div className="grid justify-center p-7">
                            <div className="flex justify-center">
                                <Image
                                    src="/assets/images/stress/symbol.svg"
                                    width={100}
                                    height={50}
                                    className="w-28 h-auto min-w-28"
                                />
                            </div>
                            <p className="text-xs mt-3 text-justify px-2 overflow-hidden">
                                The Stress Checker feature is designed to help you regularly
                                monitor your stress levels and provide recommendations to maintain
                                your mental balance. By answering a few short questions, you will
                                receive an analysis of your stress levels along with suggestions on
                                how to manage them effectively.
                            </p>

                            <button
                                className="text-white font-bold text-xs bg-[#02055A] py-2 mt-3 rounded-lg"
                                onClick={handleQuestion}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
