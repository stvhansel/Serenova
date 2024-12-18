"use client";

import React, { useState } from "react";
import Image from "next/image";
import Wallpaper from "./Wallpaper";
import Music from "./Music";
import Ambient from "./Ambient";

const MenuRelax = React.forwardRef(({ onClose, onBackgroundChange, currentBackgroundImage }, ref) => {
    const [volume, setVolume] = useState(40);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    return (
        <div className="bg-bgButton absolute right-0 top-0 h-full p-5" ref={ref}>
            {/* STICKY CLOSE BUTTON */}
            <div className="sticky top-0 z-10 bg-bgButton">
                <button onClick={onClose}>
                    <Image src="/assets/images/relax/close.svg" width={25} height={25} alt="close menu" />
                </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="mt-7 overflow-y-auto h-[calc(100%-60px)] scrollbar-hide">
                <div className="places" id="gallery">
                    <Wallpaper onBackgroundChange={onBackgroundChange} currentBackgroundImage={currentBackgroundImage} />
                </div>
                <div className="music mt-7" id="music">
                    <Music />
                </div>
                <div className="ambient mt-7" id="ambient">
                    <Ambient volume={volume}/>
                </div>

                {/* VOLUME CONTROL */}
                <div className="flex volume px-3 py-2 mt-7 items-center justify-center bg-white rounded-lg">
                    <Image src="/assets/images/relax/vol_down.svg" width={20} height={20} alt="volume down" />
                    <input
                        id="volume-slider"
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="slider mx-2 w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none"
                        style={{
                            background: `linear-gradient(to right, #02055A ${volume}%, #e0e0e0 ${volume}%)`
                        }}
                    />
                    <Image src="/assets/images/relax/vol_up.svg" width={20} height={20} alt="volume up" />
                </div>
            </div>
        </div>
    );
});

export default MenuRelax;
