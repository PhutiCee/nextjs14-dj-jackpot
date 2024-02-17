import React from 'react'

export default function SingleTapeSkeleton() {
    return (
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row mt-4 gap-4'>
            <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-shrink-0 mx-auto animate-pulse'>
                <div className='h-96 w-96 rounded-xl bg-gray-400'></div>
            </div>
            <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-grow mx-4 animate-pulse'>
                <div className='p-2 flex flex-col items-center gap-4 h-full max-w-2xl'>
                    <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 bg-gray-400 h-8 w-5/6 rounded'></h2>
                    <p className='font-mono text-gray-400 bg-gray-400 h-5 w-1/2 rounded'></p>
                    <p className='font-mono text-gray-400 bg-gray-400 h-5 w-1/4 rounded'></p>
                    <div className='flex flex-col justify-between items-center gap-2 w-full h-full'>
                        <div className='flex items-center gap-4'>
                            <button className='bg-gray-400 h-8 w-8 rounded'></button>
                            <button className='bg-gray-400 h-12 w-12 rounded-full'></button>
                            <button className='bg-gray-400 h-8 w-8 rounded'></button>
                        </div>
                        <div className='bg-gray-400 h-8 w-full rounded-lg'></div>
                        <div className='flex justify-between w-full gap-4 mt-2'>
                            <span className='bg-gray-400 h-5 w-12 rounded'></span>
                            <input
                                type="range"
                                className='w-full appearance-none rounded-lg relative outline-none before:absolute before:top-0 before:left-0 before:w-11 before:bg-red-300 z-[2] cursor-pointer bg-gray-400'
                            />
                            <span className='bg-gray-400 h-5 w-12 rounded'></span>
                        </div>
                        <button className='flex items-center gap-4 bg-gray-400 h-10 w-full rounded-lg'></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
