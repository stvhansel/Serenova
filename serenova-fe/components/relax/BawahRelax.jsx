import React from 'react';
import Image from 'next/image';

const BawahRelax = ({ onImageClick }) => {
  return (
    <div className="absolute bottom-10 inset-x-10">
      <div className="flex justify-between items-center">
        <div className="random-quotes w-32 sm:w-72">
          <p
            className="text-white font-semibold sm:text-base text-xs"
            style={{ textShadow: '1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.3)' }}
          >
            “Success is the sum of small efforts, repeated day in and day out”
          </p>
        </div>
        <div className="rounded-lg bg-white grid grid-cols-3 p-2 gap-x-3">
          <button onClick={() => onImageClick('ambient')} className="border bg-transparent rounded-md grid place-items-center p-1">
            <Image src="/assets/images/relax/ambient.svg" width={20} height={20} alt="ambient" />
          </button>
          <button onClick={() => onImageClick('music')} className="border bg-transparent rounded-md grid place-items-center">
            <Image src="/assets/images/relax/music.svg" width={20} height={20} alt="music" />
          </button>
          <button onClick={() => onImageClick('gallery')} className="border bg-transparent rounded-md grid place-items-center">
            <Image src="/assets/images/relax/gallery.svg" width={20} height={20} alt="gallery" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BawahRelax;
