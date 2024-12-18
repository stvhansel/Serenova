"use client";

import Image from "next/image";

const NoSchedule = () => {
    return (
        <div className="grid justify-center place-items-center bg-white rounded-xl p-5 mt-2">
            <Image
                src="/assets/images/dashboard/noTask.svg"
                width={100}
                height={100}
                className="w-44" h-auto />
            <h1 className="font-bold text-bgButton">You Have No Task Today ~</h1>
            <p className="text-xs">Enjoy your free time!</p>
        </div>
    )
}

export default NoSchedule
