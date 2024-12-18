"use client";

import axiosFetch from "@lib/axiosFetch";
import { useEffect, useRef, useState } from "react";
import Quotes from "@components/notiftype/Quotes";
import Reminder from "@components/notiftype/Reminder";
import Warning from "@components/notiftype/Warning";

const Notification = ({ onClose, hasBeenViewed }) => {
    const notificationRef = useRef(null);
    const [showWarning, setShowWarning] = useState(localStorage.getItem('showWarning'));

    const handleWarningNotif = async () => {
        try {
            const response = await axiosFetch.get('/api/warningNotif');
            const result = response.data.result;

            if(result){
                localStorage.setItem('showWarning', true);
            }else{
                localStorage.removeItem('showWarning');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleWarningNotif();
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={notificationRef}
            className="absolute top-20 right-24 bg-white border rounded-lg shadow-lg max-w-96 z-50"
        >
            <h3 className="font-bold mb-2 p-3">Notifications</h3>
            <div className="grid">
                <Quotes hasBeenViewed={hasBeenViewed} />
                <div className="hidden">
                    <Reminder/>
                </div>
                {showWarning && <div id="warning">
                    <Warning hasBeenViewed={hasBeenViewed}/>
                </div>}
            </div>
        </div>
    );
};

export default Notification;
