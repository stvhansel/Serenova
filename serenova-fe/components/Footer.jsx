"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[url('/assets/images/footer/bgfooter.png')] py-14">
            <div className="flex justify-center mb-5">
                <p className="text-white font-bold tracking-tighter text-3xl">serenova</p>
            </div>
            <div className="flex flex-row justify-center">
                <p className="text-white border-r px-2 text-sm font-semibold">Support</p>
                <p className="text-white border-r px-2 text-sm font-semibold">Pricing</p>
                <p className="text-white border-r px-2 text-sm font-semibold">Newsletter</p>
                <p className="text-white border-r px-2 text-sm font-semibold">Terms</p>
                <p className="text-white px-2 text-sm font-semibold">Privacy Policy</p>
            </div>
            <div className="flex flex-row justify-center mt-3">
                <p className="text-[#A8A8A8] text-sm font-semibold">© Serenova Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
