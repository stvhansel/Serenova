"use client";

import Image from "next/image";

const TaskDesc = ({ isOpen, onClose, selectedTask }) => {
    if (!isOpen || !selectedTask) return null;

    const { nama, jenis, tanggal, start_time, end_time, note } = selectedTask;

    const borderColorMap = {
        work: '#00B4BE',
        daily: '#EB6A4B',
        exercise: '#00BA34',
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-5 max-w-sm mx-auto relative flex gap-x-2">
                <div className="border-4 mt-3" style={{ borderColor: borderColorMap[jenis] || '#000', height: '2px', width: '2%' }}></div>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold mb-2 mr-5" id="task">{nama}</h2> {/* Task Head */}
                        <button onClick={onClose}>
                            <Image src="/assets/images/task/close.svg" width={20} height={20} />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/images/task/mincal.svg" width={20} height={20} />
                        <p className="ml-2 text-[#747474] text-xs" id="tanggal">{new Date(tanggal).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p> {/* Day of the week */}
                    </div>
                    <div className="flex items-center mt-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <p className="ml-2 text-[#747474] text-xs" id="jam">{start_time.slice(0, -3)} - {end_time.slice(0, -3)}</p> {/* Time */}
                    </div>
                    <p className="font-semibold mt-3">Description</p>
                    <p className="text-[#747474] text-xs break-words overflow-wrap break-all">{note}</p> {/* Description */}
                    {/* REMOVE */}
                    <div className="justify-end flex">
                        <button className="bg-[#F8ECF1] text-[#CD000A] font-bold flex rounded py-1 px-3 text-sm items-center mt-2">
                            {/* INI TOMBOL HAPUS */}
                            <p className="">Remove</p> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDesc;
