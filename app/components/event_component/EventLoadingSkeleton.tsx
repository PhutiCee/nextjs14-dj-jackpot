import React from 'react'

export default function EventLoadingSkeleton() {
    return (
        <div className="relative w-80 h-80 mx-auto rounded-md mt-4 animate-pulse">
            <div className="absolute w-full h-full">
                <div className="absolute w-full h-full bg-gray-100 shadow-md rounded-lg">
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex justify-center items-center">
                        <div className="h-80 w-80 rounded-lg bg-gray-400"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
