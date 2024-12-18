"use client";

import axiosFetch from "@lib/axiosFetch";
import cookie from 'cookie-cutter';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePicker from "react-multi-date-picker";

const PopupAdd = ({ isOpen, onClose, addTask }) => {
    if (!isOpen) return null;

    const textareaRef = useRef(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [taskInput, setTaskInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleInput = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const handleDateClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDayClick = (day) => {
        setTempDate(day);
    };

    const confirmDate = () => {
        if (tempDate) {
            setSelectedDate(tempDate);
        }
        setShowCalendar(false);
    };

    const cancelDate = () => {
        setTempDate(null);
        setShowCalendar(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const calendarElement = document.getElementById("calendar");
            const dateDiv = document.getElementById("date-div");
            if (calendarElement && !calendarElement.contains(event.target) && !dateDiv.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleStartChange = (newTime) => {
        setStartTime(newTime);

        if (endTime && newTime && newTime >= endTime) {
            setEndTime(null);
        }
    };

    const handleEndChange = (newTime) => {
        if (startTime && newTime && newTime > startTime) {
            setEndTime(newTime);
        }
    };

    const handleSave = async () => {

        const formattedSelectedDate = selectedDate ? selectedDate.toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' }) : null;
        //KUMPUL DATA
        const taskData = {
            id: cookie.get('user_id'),
            nama: taskInput,
            jenis: selectedOption,
            date: formattedSelectedDate,
            startTime: startTime.format('HH:mm:ss'),
            endTime: endTime.format('HH:mm:ss'),
            note: textareaRef.current.value,
        };

        try {
            const response = axiosFetch.post('/api/jadwal/add', taskData);
            const result = response.data;
            alert(result.message);
        } catch (error) {
            console.log(error)
        }



        // addTask(taskData); // BALEK KE PARENT
        // onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white rounded-lg pt-10 px-5 max-w-1/3 relative z-60 border shadow-lg">
                <div>
                    <Image
                        src="/assets/images/task/close.svg"
                        width={30}
                        height={30}
                        className="absolute top-4 right-5 cursor-pointer"
                        onClick={onClose}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Add Task"
                    className="border-b border-[#00B4BE] text-[#2B3030] text-xl p-2 w-4/6 font-bold focus:outline-none mb-2"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <div className="grid grid-cols-12 gap-x-1">
                    {["work", "daily", "execise"].map((option) => {
                        const styles = {
                            "work": {
                                backgroundColor: selectedOption === option ? "rgba(0, 180, 190, 0.15)" : "rgba(0, 180, 190, 0.15)",
                                textColor: selectedOption === option ? "#00B4BE" : "#00B4BE",
                                borderColor: selectedOption === option ? "#00B4BE" : "transparent",
                                borderWidth: selectedOption === option ? "1px" : "1px"
                            },
                            "daily": {
                                backgroundColor: selectedOption === option ? "rgba(235, 106, 75, 0.15)" : "rgba(235, 106, 75, 0.15)",
                                textColor: selectedOption === option ? "#EB6A4B" : "#EB6A4B",
                                borderColor: selectedOption === option ? "#EB6A4B" : "transparent",
                                borderWidth: selectedOption === option ? "1px" : "1px"
                            },
                            "execise": {
                                backgroundColor: selectedOption === option ? "rgba(0, 186, 52, 0.15)" : "rgba(0, 186, 52, 0.15)",
                                textColor: selectedOption === option ? "#00BA34" : "#00BA34",
                                borderColor: selectedOption === option ? "#00BA34" : "transparent",
                                borderWidth: selectedOption === option ? "1px" : "1px"
                            }
                        };

                        return (
                            <label
                                key={option}
                                className={`col-span-2 rounded px-2 py-1 cursor-pointer text-center border`}
                                style={{
                                    backgroundColor: styles[option].backgroundColor,
                                    borderColor: styles[option].borderColor,
                                    borderWidth: styles[option].borderWidth
                                }}
                            >
                                <input
                                    type="radio"
                                    name="taskType"
                                    value={option}
                                    className="hidden"
                                    onChange={() => setSelectedOption(option)}
                                />
                                <p className={`text-sm font-bold`} style={{ color: styles[option].textColor }}>
                                    {option}
                                </p>
                            </label>
                        );
                    })}
                </div>
                {/* DATE */}
                <div
                    id="date-div"
                    className="flex items-center w-7/12 gap-x-2 mt-3 border rounded-lg border-[#A8A8A880] px-2 py-3 cursor-pointer"
                    onClick={handleDateClick}
                >
                    <Image src="/assets/images/task/mincal.svg" width={20} height={20} />
                    <p className="text-sm font-medium flex items-center">
                        {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                    </p>
                </div>
                {showCalendar && (
                    <div
                        id="calendar"
                        className="absolute z-50 flex flex-col items-center"
                        style={{ top: "80px", backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                    >
                        <DayPicker
                            onDayClick={handleDayClick}
                            modifiers={{
                                selected: (day) => selectedDate && day.getTime() === selectedDate.getTime(),
                                temp: (day) => tempDate && day.getTime() === tempDate.getTime(),
                            }}
                            modifiersClassNames={{
                                selected: 'bg-[#00B4BE] text-white',
                                temp: 'bg-[#EB6A4B] text-white',
                            }}
                        />
                        <div className="flex w-full mt-2">
                            <button onClick={confirmDate} className="bg-[#00B4BE] text-white py-2 px-6 rounded text-sm">OK</button>
                            <button onClick={cancelDate} className="bg-red-500 text-white py-2 px-3 rounded text-sm ml-2">Cancel</button>
                        </div>
                    </div>
                )}
                {/* JAM */}
                <div className="flex items-center w-7/12 gap-x-1 mt-3">
                    {/* START */}
                    <div className="border flex rounded-lg px-3 py-3 gap-x-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <DatePicker
                            style={{
                                backgroundColor: "white",
                                height: "24px",
                                width: "100%",
                                border: "none",
                                fontSize: "14px",
                                color: "black",
                                fontWeight: "500"
                            }}
                            value={startTime}
                            onChange={handleStartChange}
                            disableDayPicker
                            format="hh:mm a"
                            placeholder="Start"
                            plugins={[<TimePicker hideSeconds />]}
                        />
                    </div>
                    <div className="">
                        <Image src="/assets/images/task/arrow.svg" width={20} height={20} />
                    </div>
                    {/* END */}
                    <div className="border flex rounded-lg px-3 py-3 gap-x-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <DatePicker
                            style={{
                                backgroundColor: "white",
                                height: "24px",
                                width: "100%",
                                border: "none",
                                fontSize: "14px",
                                color: "black",
                                fontWeight: "500"
                            }}
                            value={endTime}
                            onChange={handleEndChange}
                            disableDayPicker
                            format="hh:mm a"
                            placeholder="End"
                            plugins={[<TimePicker hideSeconds />]}
                        />
                    </div>
                </div>
                {/* DESCRIPTION */}
                <textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    placeholder="Description"
                    className="border rounded-lg p-2 mt-5 w-full"
                    rows={1}
                />
                {/* SAVE BUTTON */}
                <div className="flex justify-end mt-4 mb-3">
                    <button
                        className="bg-[#00B4BE] text-white py-2 px-6 rounded text-sm font-bold"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAdd;
