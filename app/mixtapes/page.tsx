import React from 'react'
import MixTapeCard from '../components/mixtape/MixTapeCard'

export default function page() {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='w-full text-center p-4 font-mono text-2xl'>Mixtapes</h2>
            <hr className='border border-gray-800 my-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2'>
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
                <MixTapeCard />
            </div>

        </div>
    )
}
