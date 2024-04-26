'use client'
import { Mixtape } from '@/types';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'

type Params = {
    params: {
        id: number;
    };
};

export default function Page({ params: { id } }: Params) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const [mixtape, setMixtape] = useState<Mixtape | null>(null);

    useEffect(() => {
        const fetchMixtapes = async (id: number) => {
            try {
                const response = await axios.post("/api/get_song", { id: id });
                const mixtapeData: Mixtape = response.data;
                setMixtape(mixtapeData);
            } catch (error) {
                console.error("Error fetching mixtapes:", error);
            }
        };

        fetchMixtapes(id);
    }, [id])


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

    const handleDownload = () => {
        if (mixtape) {
            axios({
                url: mixtape.link,
                method: 'GET',
                responseType: 'blob', // Important
            })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'audio/mp3' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${mixtape.name}.mp3`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                })
                .catch(error => {
                    console.error("Error downloading mixtape:", error);
                });
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
                        className='h-full w-full rounded-xl'
                    />
                </div>
            </Link>
            <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-grow mx-4'>
                {mixtape && (
                    <div className='p-2 flex flex-col items-center gap-4 h-full max-w-2xl'>
                        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>{mixtape.name}</h2>
                        <Link href={'/profile'}>
                            <p className='font-mono text-gray-400 hover:text-blue-400'>DJ Jackpot</p>
                        </Link>
                        {/* <p className='font-mono text-gray-400'>16 February 2024</p> */}
                        <div className='flex flex-col justify-between items-center gap-2 w-full h-full'>
                            <div className='flex items-center gap-4'>
                                <button>- 30</button>
                                <button onClick={togglePlayButton} className='text-lg border border-gray-500 p-3 rounded-full text-center'>
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </button>
                                <button>30 +</button>
                            </div>
                            <audio
                                ref={audioPlayer}
                                src={mixtape.link}
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                            ></audio>
                            <div className='flex justify-between items-center w-full gap-4 mt-2'>
                                <span className="text-gray-500">{formatTime(currentTime)}</span>
                                <input
                                    type="range"
                                    className='w-full h-4 bg-gray-300 dark:bg-gray-800 rounded-lg appearance-none outline-none'
                                    value={(currentTime / duration) * 100 || 0}
                                    onChange={(e) => {
                                        const newTime = parseInt(e.target.value) / 100 * duration;
                                        setCurrentTime(newTime);
                                        if (audioPlayer.current) {
                                            audioPlayer.current.currentTime = newTime;
                                        }
                                    }}
                                />
                                <span className="text-gray-500">{formatTime(duration)}</span>
                            </div>

                            <button className='flex items-center gap-4' onClick={handleDownload}><FaDownload /> <span>Download</span></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
