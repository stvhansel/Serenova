"use client";

import Image from "next/image";

const Reminder = () => {
    return (
        <div className="border-y py-3 bg-[#00B4BE0C]">
            <div className="grid grid-cols-12 gap-1 mx-2">
                <div className="col-span-2 flex justify-center relative">
                    <Image src="/assets/images/dashboard/warningNotif.svg" width={40} height={40} className="absolute top-0" />
                </div>

                <div className="col-span-10">
                    <h1 className="font-semibold">Take a Break!</h1>
                    <p className="font-medium text-[#505050] text-xs">
                        Signs of fatigue are starting to show. Make sure to rest soon 
                        and manage your activities to prevent burnout.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reminder;
