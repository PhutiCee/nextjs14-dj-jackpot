import React from 'react'

export default function LoadingSkeleton() {
    return (
        <div className="flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden mx-auto mb-8 w-full max-w-lg animate-pulse">
            <div className="relative h-48 w-48 rounded-l-xl bg-gray-500"></div>
            <div className="p-4 md:p-6 flex-1">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 bg-gray-500 h-6 w-2/3 rounded"></h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 bg-gray-500 h-4 w-1/2 rounded"></p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 bg-gray-500 h-4 w-1/4 rounded"></p>
                </div>
                <div className="font-semibold py-2 px-4 rounded-xl  bg-gray-500 w-32 h-10 "></div>
            </div>
        </div>
    )
}
