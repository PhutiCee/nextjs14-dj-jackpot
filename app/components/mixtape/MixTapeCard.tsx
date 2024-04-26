import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/dj_jackpot_2.jpg';
import { Mixtape } from '@/types';

interface MixtapeCardProps {
    mixtape: Mixtape;
}

export default function MixTapeCard({ mixtape }: MixtapeCardProps) {

    return (
        <div className='flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden mx-auto mb-8 w-full max-w-lg'>
            <div className='relative h-48 w-48'>
                <Image
                    src={img}
                    alt="Mixtape cover"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-l-xl'
                />
            </div>
            <div className='p-4 md:p-6 flex-1'>
                <div>
                    <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-2'>{mixtape.name}</h2>
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>DJ Jackpot</p>
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-2'>Release Date: 16 February 2024</p>
                </div>
                <Link href={`/mixtapes/${mixtape.id}`}>
                    <button className='bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300'>Play Mixtape</button>
                </Link>
            </div>
        </div>
    );
}
