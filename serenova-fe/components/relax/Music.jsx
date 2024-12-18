"use client";

import ReactHowler from "react-howler";
import Image from "next/image";
import { useState } from "react";

const Music = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlayback = () => {
        setIsPlaying(!isPlaying);
    }

    const musicImages = [
        { src: "/assets/images/relax/forest.svg", alt: "River in The Forest", url: '/assets/music/Lofi Beats.mp3' },
    ];

    return (
        <div>
            <div className="places">
                <h1 className="text-white font-bold text-2xl mb-3">Music</h1>
                <div className="grid grid-cols-2 gap-3">
                    {musicImages.map((image, index) => (
                        <div key={index} className="rounded-lg">
                            <p className="text-white font-semibold text-xs mb-2">{image.alt}</p>
                            <button onClick={() => {setSelectedImage(image.src), handleTogglePlayback()}} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={image.src}
                                    width={175}
                                    height={113}
                                    className={`w-36 h-auto rounded-lg ${selectedImage === image.src ? 'border-4 border-yellow-400' : ''}`} // Add border if selected
                                    alt={image.alt}
                                />
                                <ReactHowler
                                    src={image.url}
                                    playing={isPlaying}
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Music;
