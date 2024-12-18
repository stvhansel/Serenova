"use client";

import Image from "next/image"

const IntensityFirst = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src="/assets/images/dashboard/first.svg" width={200} height={200} alt="No activities yet" />
            <p className="font-bold text-bgButton text-center mt-3">
                No activities yet?<br />Let's get started!
            </p>
            <p className="font-medium text-[#505050] text-xs text-center mt-2">Add your first task in the Task section to begin tracking your productivity!</p>
        </div>

    )
}

export default IntensityFirst
