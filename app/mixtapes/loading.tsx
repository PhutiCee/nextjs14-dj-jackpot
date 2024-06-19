import React from 'react'
import LoadingSkeleton from '../components/mixtape/LoadingSkeleton'

export default function Loading() {
    return (
        <div className='max-w-6xl mx-auto px-2'>
            <h2 className='w-full text-center p-4 font-mono text-2xl'>Mixtapes</h2>
            <hr className='border border-gray-800 my-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2'>
                {/* Add animation that mimic actual mixtape page */}
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>

        </div>
    )
}
