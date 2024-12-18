"use client";
import Image from "next/image";
import { useState } from "react";
import TaskDesc from "./TaskDesc";

const TaskList = ({ selectedDate, tasks }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const taskTypeColors = {
        work: "#00B4BE",
        exercise: "#00BA34",
        daily: "#EB6A4B"
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const handleCardClick = (task) => {
        setSelectedTask(task);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedTask(null);
    };

    // Function to filter tasks based on the selected date
    const getTasksForSelectedDate = (date) => {
        return tasks.filter(task => {
            const taskDate = new Date( new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(task.tanggal))); // Assuming task.date is a Date object
            return taskDate.toDateString() === date.toDateString();
        });
    };

    const taskTypeImages = {
        Working: "/assets/images/dashboard/working.svg",
        Workout: "/assets/images/dashboard/work.svg",
        Daily: "/assets/images/dashboard/daily.svg",
    };
    const filteredTasks = getTasksForSelectedDate(selectedDate);

    return (
        <div className="m-4 relative overflow-y-auto min-h-96">
            <div className="flex my-5">
                {isToday(selectedDate) && (
                    <p className="text-bgButton font-bold mr-2">Today</p>
                )}
                <p className="text-[#747474] font-bold">{formatDate(selectedDate)}</p>
            </div>

            {/* TASK CARDS */}
            {filteredTasks.map((task, index) => (
                <div
                    key={index}
                    className="flex border-t border-b py-3 cursor-pointer"
                    onClick={() => handleCardClick(task)}
                >
                    <div
                        className={`border-2 rounded`}
                        style={{ borderColor: taskTypeColors[task.jenis] || "#00B4BE" }}
                    >
                    </div>
                    {/* Ganti gambar berdasarkan tipe task */}
                    <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mx-3">
                        <Image
                            src={taskTypeImages[task.type] || "/assets/images/tasks/daily.svg"} // Gambar default jika tipe tidak ditemukan
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                            alt={`${task.type} task image`} 
                        />
                    </div>
                    <div className="text-start">
                        <p className="font-semibold text-[#2B3030] text-sm" id="task">{task.nama}</p>
                        <p className="font-semibold text-[#747474] text-xs">
                            <span id="start">{task.start_time.slice(0, -3)}</span> - <span id="end">{task.end_time.slice(0, -3)}</span>
                        </p>
                    </div>
                </div>
            ))}

            <TaskDesc isOpen={isPopupOpen} onClose={handleClosePopup} selectedTask={selectedTask} />
        </div>
    );
}

export default TaskList;
