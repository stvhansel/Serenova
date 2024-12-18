"use client";

import Image from "next/image";

const Quotes = ({ hasBeenViewed }) => {
  const bgClass = hasBeenViewed ? "bg-white" : "bg-[#00B4BE0C]";

  return (
    <div className={`border-y py-3 ${bgClass}`}>
      <div className="grid grid-cols-12 gap-1 mx-2">
        <div className="col-span-2 flex justify-center relative">
          <Image src="/assets/images/dashboard/checkNotif.svg" width={40} height={40} className="absolute top-0" />
        </div>

        <div className="col-span-10">
          <h1 className="font-semibold">You’re doing well today!</h1>
          <p className="font-medium text-[#505050] text-xs">
            Keep up the good work! Your stress level is within a healthy range.
            Don't forget to take short breaks to maintain balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
