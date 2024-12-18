"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DashStressCheck = () => {
    const router = useRouter();

    const handleCheck = () => {
        router.push('/stressCheck');
    }

    return (
        <div className="">

            <div className="grid justify-center p-7">
                <div className="flex justify-center">
                    <Image
                        src="/assets/images/dashboard/stressCheck.svg"
                        width={100}
                        height={50}
                        className="w-52 h-auto min-w-52"
                    />
                </div>
                <p className="text-xs mt-2 text-justify">Regularly monitor your stress levels. Powered by AI,
                    it provides personalized analysis based on your daily
                    activities, helping you manage stress more effectively.
                </p>

                <button 
                className="text-white font-bold text-xs bg-bgButton py-2 mt-3 rounded-lg"
                onClick={handleCheck}>
                    Check Stress Level
                </button>
            </div>

        </div>
    )
}

export default DashStressCheck
