// pages/page.jsx

"use client";

import { useState } from "react";
import DaySoFar from "@components/dashboard/DaySoFar";
import HeadDashboard from "@components/dashboard/HeadDashboard";
import IntensityStress from "@components/dashboard/IntensityStress";
import ListSchedule from "@components/dashboard/ListSchedule";
// import NavbarKiri from "@components/NavbarKiri";
import NavAtas from "@components/NavAtas";
import Notification from "@components/dashboard/Notification";
import ProfilePopup from "@components/dashboard/ProfilePopup";
import dynamic from "next/dynamic";

const NavbarKiri = dynamic(() => import('@components/NavbarKiri'), {
    ssr: false,
});

const Page = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [hasNotificationBeenViewed, setNotificationViewed] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen((prev) => !prev);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
    setNotificationViewed(true);
  };

  const resetNotificationCount = () => {
    setNotificationCount(0);
  };

  const toggleProfilePopup = () => {
    setProfilePopupOpen((prev) => !prev);
  };

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

      {/* MAIN CONTENT */}
      <div
        className={`flex-1 h-full p-4 overflow-y-auto ${
          isProfilePopupOpen ? "bg-black bg-opacity-50" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
        }}
      >
        <div className="w-full h-full p-4">
          {/* HEADER */}
          <HeadDashboard
            toggleNotification={toggleNotification}
            notificationCount={notificationCount}
            resetNotificationCount={resetNotificationCount}
            onProfileClick={toggleProfilePopup}
          />
          {/* DASHBOARD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 gap-5">
            {/* DASH KIRI */}
            <div className="col-span-1 lg:col-span-8">
              <DaySoFar />
              <IntensityStress />
            </div>
            {/* DASH KANAN */}
            <div className="col-span-1 lg:col-span-4">
              <ListSchedule />
            </div>
          </div>

          {/* Notifications and Profile Popup */}
          {isNotificationOpen && (
            <Notification
              onClose={closeNotification}
              hasBeenViewed={hasNotificationBeenViewed}
            />
          )}
          {isProfilePopupOpen && <ProfilePopup onClose={toggleProfilePopup} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
