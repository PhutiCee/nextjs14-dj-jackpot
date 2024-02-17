import Image from 'next/image';
import React from 'react'

export default function ProfileCard() {
    return (
        <div className="max-w-xs md:max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
            <Image
                src="/dj_jackpot_2.jpg"
                alt="background image"
                width={400}
                height={400}
                layout="intrinsic"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-gray-800 text-xl mb-2">Jack Mamabolo</div>
                <p className="text-gray-700 text-base">Deejay and musican</p>
                <p className="text-gray-700 text-base">Jackpot Music University</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-black text-white py-2 px-4 rounded-full w-full">
                    Contact
                </button>
            </div>
        </div>
    );
}
