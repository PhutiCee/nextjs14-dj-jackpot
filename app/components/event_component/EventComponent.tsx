import Image from 'next/image'
import React from 'react'

export default function EventComponent() {
    return (
        <div className="relative w-80 h-80 mx-auto rounded-md mt-4">
            <div className="group absolute w-full h-full perspective-1000">
                <div className="absolute w-full h-full transition-transform preserve-3d duration-600 bg-gray-100 shadow-md rounded-lg group-hover:rotate-y-180">
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex justify-center items-center backface-hidden">
                        <Image
                            src="/dj_jackpot_2.jpg"
                            alt="background image"
                            width={400}
                            height={400}
                            layout="intrinsic"
                        />
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                        <h1 className="text-2xl font-bold">DJ Jackpot</h1>
                        <p className="text-lg">Jackpot Music Industry</p>
                        <p>Let's meet there and enjoy, shitaaa!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
