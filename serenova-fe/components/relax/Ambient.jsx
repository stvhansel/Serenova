"use client";

import ReactHowler from "react-howler";
import Image from "next/image";
import { useState } from "react";

const Ambient = (volume) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [thisvolume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVolumeChange = (e) => {
        setVolume(volume / 100);
    };

    const handleTogglePlayback = () => {
     setIsPlaying(!isPlaying);
    }


    const ambientImages = [
        { src: "/assets/images/relax/rain.svg", alt: "Rain", url: "/assets/ambient/Rain sounds.mp3" },
        { src: "/assets/images/relax/wind.svg", alt: "Wind", url: "/assets/ambient/Wind Sounds.mp3"},
        { src: "/assets/images/relax/bonfire.svg", alt: "Bonfire", url: "/assets/ambient/Fire Sounds.mp3" },
    ];

    return (
        <div>
            <div className="places">
                <h1 className="text-white font-bold text-2xl mb-3">Ambient</h1>
                <div className="grid grid-cols-2 gap-3">
                    {ambientImages.map((image, index) => (
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
                                    volume={thisvolume}
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

export default Ambient;
