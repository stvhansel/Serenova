"use client";

import axiosFetch from "@lib/axiosFetch";

// import NavbarKiri from "@components/NavbarKiri";
import Calendar from "@components/task/Calendar";
import TaskList from "@components/task/TaskList";
import { useEffect, useState } from "react";
import PopupAdd from "@components/task/PopupAdd";
import MiniCalender from "@components/dashboard/MiniCalender";
import dynamic from "next/dynamic";
import NavAtas from "@components/NavAtas";

const NavbarKiri = dynamic(() => import('@components/NavbarKiri'), {
    ssr: false,
});

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleNewTaskClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const getTask = async () => {
    try {
      const response = await axiosFetch.get('/api/jadwal');
      const result = response.data;
      setTasks(result.map((task, index) => ({ ...task, index })));
    } catch (error) {
      console.log(error);
      setTasks([]);
    }
  }

  useEffect(() => {
    getTask();
  }, []);

  //   const addTask = (taskData) => {
  //     setTasks((prevTasks) => [...prevTasks, taskData]);
  //   };

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

      {/* TASK */}
      <div
        className="flex-1 h-full p-4 overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
        }}
      >
        <div className="w-full h-full p-4">
          {/* HEADER */}
          <h1 className="text-3xl font-semibold text-[#02055A] mb-4">Task</h1>
          {/* TABLE AND CALENDAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-5">
            <div className="col-span-1 lg:col-span-4 bg-white rounded-xl border relative">
              <TaskList selectedDate={selectedDate} tasks={tasks} />
              <button
                className="absolute bottom-4 inset-x-0 text-sm bg-bgButton mx-4 p-2 text-white rounded-lg font-bold"
                onClick={handleNewTaskClick}
              >
                + New Task
              </button>
            </div>
            <div className="col-span-8 rounded-lg">
              <Calendar setSelectedDate={setSelectedDate} tasks={tasks} />
            </div>
          </div>
        </div>
      </div>

      {/* NEW TASK */}
      <PopupAdd isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Page;
