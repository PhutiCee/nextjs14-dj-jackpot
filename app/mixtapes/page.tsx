import React from 'react'
import MixTapeCard from '../components/mixtape/MixTapeCard'
import axios from 'axios';
import { Mixtape } from '@/types';

const fetchMixtapes = async () => {
    try {
        const response = await axios.get("https://djjacjpot.onrender.com/get_songs");
        const mixtapesData = response.data;

        return mixtapesData;
    } catch (error) {
        console.error("Error fetching mixtapes:", error);
        return [];
    }
};

export default async function page() {
    const mixtapes: Mixtape[] = await fetchMixtapes();

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='w-full text-center p-4 font-mono text-2xl'>Mixtapes</h2>
            <hr className='border border-gray-800 my-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 px-2 md:px-0'>
                {mixtapes.map(mixtape => (
                    <MixTapeCard key={mixtape.id} mixtape={mixtape} />
                ))}
            </div>

        </div>
    )
}
