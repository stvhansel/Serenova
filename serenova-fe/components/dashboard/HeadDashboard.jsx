"use client";

import { useState } from "react";
import Image from "next/image";

const HeadDashboard = ({ toggleNotification, notificationCount, resetNotificationCount, onProfileClick }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-bgButton">
          <span className="time">Welcome to Serenova</span>
        </h1>
      </div>
      <div className="flex items-center flex-row gap-x-3">
        <div className="relative">
          <button
            onClick={() => {
              toggleNotification();
              resetNotificationCount(); 
            }}
            className="border bg-white rounded-full p-2"
          >
            <Image
              src="/assets/images/dashboard/notif.svg"
              width={20}
              height={20}
              alt="Notification"
            />
          </button>
          
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
          )}
        </div>
        <div className="bg-white overflow-hidden rounded-full w-9 h-9 profile" onClick={onProfileClick}>
          <Image
            src="/assets/images/landingPage/default.jpg"
            width={80}
            height={80}
            className="object-cover w-full h-full cursor-pointer"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadDashboard;
