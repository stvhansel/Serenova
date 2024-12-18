"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TestResult = () => {
    const router = useRouter();

    const [stressLevel, setStressLevel] = useState(0);
    const [stressText, setStressText] = useState("low");
    const [stressImage, setStressImage] = useState("/assets/images/dashboard/low.svg");
    const [stressColor, setStressColor] = useState("#50C878");

    useEffect(() => {
        const fetchStressData = async () => {
            try {
                const response = await fetch('/api/stressapi');
                const data = await response.json();
                const { score } = data; 
    
                setStressLevel(score);
    
                if (score <= 33) {
                    setStressText("low");
                    setStressImage("/assets/images/dashboard/low.svg");
                    setStressColor("#50C878"); 
                } else if (score <= 66) {
                    setStressText("medium");
                    setStressImage("/assets/images/dashboard/medium.svg");
                    setStressColor("#FFC107"); 
                } else {
                    setStressText("high");
                    setStressImage("/assets/images/dashboard/high.svg");
                    setStressColor("#C62828"); 
                }
            } catch (error) {
                console.error("Error fetching stress data:", error);
            }
        };
    
        fetchStressData();
    }, []);    

    const handleCheck = () => {
        router.push('/stressCheck');
    }

    return (
        <div className="">
            <div className="grid justify-center p-7 items-center">
                <div className="flex justify-center">
                    <div className="grid justify-center text-center">
                        <div className="flex mb-1 justify-center items-center">
                            <Image src={stressImage} width={70} height={70} alt="Stress Level Icon" className="mr-2" />
                            <div>
                                <h1 className="text-[#969696] font-semibold text-sm">Your Stress Level is</h1>
                                <h1 className="font-extrabold text-3xl uppercase" style={{ color: stressColor }} id="stress-level">
                                    {stressText}
                                </h1>
                            </div>
                        </div>
                        <p>
                            <span className="point font-extrabold text-5xl" style={{ color: stressColor }} id="stress-poin">{stressLevel}</span>
                            <span className="font-extrabold text-[#969696]">/100</span>
                        </p>
                    </div>
                </div>
                <p className="text-xs mt-2 text-justify" id="stress-desc">
                    Your stress score of <span className="stress-poin-text">{stressLevel}</span> indicates <span className="stress-level-text">{stressText}</span> stress.
                    Consider taking short breaks, practicing deep breathing, and doing light physical activity to relieve tension. Prioritize tasks to avoid overwhelm.
                </p>
                <p className="text-xs font-bold text-[#505050] mt-1">Last Check: <span className="date">28/09/2024</span></p>

                <button
                    className="text-white font-bold text-xs bg-bgButton py-2 mt-3 rounded-lg"
                    onClick={handleCheck}>
                    Check Stress Level
                </button>
            </div>
        </div>
    );
};

export default TestResult;
