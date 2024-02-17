'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'

export default function Page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioPlayer = useRef<HTMLAudioElement>(null);

    const togglePlayButton = () => {
        setIsPlaying(!isPlaying);
        if (audioPlayer.current) {
            if (!isPlaying) {
                audioPlayer.current.play();
            } else {
                audioPlayer.current.pause();
            }
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleTimeUpdate = () => {
        if (audioPlayer.current) {
            setCurrentTime(audioPlayer.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioPlayer.current) {
            setDuration(audioPlayer.current.duration);
        }
    };

    return (
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row mt-4 gap-4'>
            <Link href={'/profile'}>
                <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-shrink-0 mx-auto'>
                    <Image
                        src="/dj_jackpot_2.jpg"
                        alt="background image"
                        width={400}
                        height={400}
                        layout="intrinsic"
                        className='rounded-xl'
                    />
                </div>
            </Link>
            <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-grow mx-4'>
                <div className='p-2 flex flex-col items-center gap-4 h-full max-w-2xl'>
                    <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>MIX-21-DJ-JACKPOT-SPRING-DAYS-28-SEPTEMBER-2019</h2>
                    <Link href={'/profile'}>
                        <p className='font-mono text-gray-400 hover:text-blue-400'>DJ Jackpot</p>
                    </Link>
                    <p className='font-mono text-gray-400'>16 February 2024</p>
                    <div className='flex flex-col justify-between items-center gap-2 w-full h-full'>
                        <div className='flex items-center gap-4'>
                            <button>- 30</button>
                            <button onClick={togglePlayButton} className='text-lg border border-gray-500 p-3 rounded-full text-center'>{isPlaying ? <FaPause /> : <FaPlay className='relative left-auto right-auto' />}</button>
                            <button>30 +</button>
                        </div>
                        <audio
                            ref={audioPlayer}
                            src={'/MIX-21-DJ-JACKPOT-SPRING-DAYS-28-SEPTEMBER-2019.mp3'}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                        ></audio>
                        <div className='flex justify-between w-full gap-4 mt-2'>
                            <span>{formatTime(currentTime)}</span>
                            <input
                                type="range"
                                className='w-full appearance-none rounded-lg relative outline-none before:absolute before:top-0 before:left-0 before:w-11 before:bg-red-300 z-[2] cursor-pointer'
                                value={(currentTime / duration) * 100 || 0}
                                onChange={(e) => {
                                    const newTime = parseInt(e.target.value) / 100 * duration;
                                    setCurrentTime(newTime);
                                    if (audioPlayer.current) {
                                        audioPlayer.current.currentTime = newTime;
                                    }
                                }}
                            />
                            <span>{formatTime(duration)}</span>
                        </div>
                        <button className='flex items-center gap-4'><FaDownload /> <span>Download</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
