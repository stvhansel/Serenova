"use client";

import Image from "next/image";

const ProfilePopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-5 w-[600px] max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button className="w-full flex justify-end mb-5" onClick={onClose}>
                    <Image src="/assets/images/task/close.svg" width={30} height={30} alt="Close" />
                </button>
                
                {/* HEADER PROFILE */}
                <div className="grid sm:mt-0 sm:flex items-center sm:justify-between border p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <div className="bg-white overflow-hidden rounded-full w-16 h-16 profile">
                            <Image
                                src="/assets/images/landingPage/haikal.jpg"
                                width={80}
                                height={80}
                                className="object-cover w-full h-full cursor-pointer"
                                alt="Profile"
                            />
                        </div>
                        <div className="ml-2">
                            <p className="name text-bgButton font-bold text-2xl">Haikal</p>
                            <p className="job font-medium text-[#747474]">Ketua</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2 sm:mt-0 mt-5">
                        <button className="bg-[#CD000A0F] text-[#CD000A] font-semibold rounded-lg flex items-center py-1 px-3 text-xs">
                            Remove Photo
                            <Image src="/assets/images/dashboard/delete.svg" width={20} height={20} className="ml-1" />
                        </button>
                        <button className="bg-bgButton text-white font-semibold rounded-lg flex items-center py-1 px-3 text-xs">
                            Edit
                            <Image src="/assets/images/dashboard/camera.svg" width={20} height={20} className="ml-1" />
                        </button>
                    </div>
                </div>

                {/* PROFILE DESC */}
                <div className="border rounded-lg p-2">
                    <div className="flex justify-between items-center mb-2">
                        <p className="font-bold px-2">Personal Information</p>
                        <button className="bg-bgButton text-white font-semibold rounded-lg flex items-center py-1 px-3 text-xs">
                            Edit
                            <Image src="/assets/images/dashboard/pencil.svg" width={20} height={20} className="ml-1" />
                        </button>
                    </div>

                    {/* Profile Fields */}
                    <div className="grid grid-cols-2 gap-3">
                        {["First Name", "Last Name", "Email", "Phone Number", "Job"].map((label, index) => (
                            <div key={index} className="rounded-md grid col-span-1 p-2">
                                <label className="font-semibold text-sm text-[#747474]">{label}</label>
                                <p className="text-[#2B3030] text-sm font-semibold">Sample Data</p> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;
