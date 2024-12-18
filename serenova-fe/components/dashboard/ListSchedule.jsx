"use client";

import axiosFetch from "@lib/axiosFetch";

import { useEffect, useState } from "react";
import Image from "next/image";
import CardSchedule from "./CardSchedule";
import MiniCalender from "./MiniCalender";
import NoSchedule from "./NoSchedule";
import { useRouter } from "next/navigation";

const ListSchedule = () => {

    const [schedules, setSchedules] = useState([])

    const handleSchedule = async () => {
        const response = await axiosFetch.get('/api/todayTask');
        const result = response.data

        setSchedules(result)
    }

    useEffect(() => {
        handleSchedule();
    }, [])

    const router = useRouter();

    const handleTask = () => {
        router.push('/task');
    }

    return (
        <div className="grid justify-center">
            <h1 className="font-bold text-bgButton">List Of Schedules</h1>
            {/* CALENDAR */}
            <div className="relative z-0">
                <MiniCalender />
            </div>
            {/* ALL SCHEDULE */}
            <div className="mt-2">
                <div className="flex justify-end items-center">
                    <button className="text-[2B3030] text-xs my-2" onClick={handleTask}>
                        Today's Schedule
                    </button>
                    <Image
                        src="/assets/images/dashboard/arrow.svg"
                        width={20}
                        height={20}
                        className=""
                    />
                </div>
                {/* CARD */}
                <div>
                    {schedules.length > 0 ? schedules.map((schedule, index) => <CardSchedule key={index} schedule={schedule} />) : <NoSchedule />}
                </div>
            </div>
        </div>
    )
}

export default ListSchedule;
