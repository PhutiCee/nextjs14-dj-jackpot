"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaDownload, FaPause, FaPlay } from 'react-icons/fa';
import axios from 'axios'
import { Mixtape } from '@/types';
import Link from 'next/link';
import EventComponent from '@/app/components/event_component/EventComponent';

type Params = {
    params: {
        id: number;
    };
};

export default function Page({ params: { id } }: Params) {
    // State hooks
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [mixtape, setMixtape] = useState<Mixtape | null>(null);

    // Ref for audio player
    const audioPlayer = useRef<HTMLAudioElement>(null);

    // Fetch mixtape data on component mount
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
    }, [id]);

    // Toggle play/pause functionality
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

    // Format time in MM:SS format
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Update current time as audio plays
    const handleTimeUpdate = () => {
        if (audioPlayer.current) {
            setCurrentTime(audioPlayer.current.currentTime);
        }
    };

    // Set duration on audio loaded metadata event
    const handleLoadedMetadata = () => {
        if (audioPlayer.current) {
            setDuration(audioPlayer.current.duration);
        }
    };

    // Handle download functionality
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
        <>
            <div className='max-w-5xl mx-auto flex flex-col md:flex-row mt-4 gap-4'>
                {/* Left column */}
                <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-shrink-0 mx-auto'>
                    <Image
                        src="/dj_jackpot_2.jpg"
                        alt="DJ Jackpot"
                        width={400}
                        height={400}
                        className='h-full w-full rounded-xl'
                    />
                </div>

                {/* Right column */}
                <div className='bg-gray-100 dark:bg-transparent p-4 rounded-lg shadow-lg mb-3 flex-grow mx-4'>
                    {mixtape && (
                        <div className='p-2 flex flex-col items-center gap-4 h-full max-w-2xl'>
                            {/* Mixtape title */}
                            <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>{mixtape.name}</h2>

                            {/* DJ name (link to profile) */}
                            <Link href={'/profile'}>
                                <p className='font-mono text-gray-400 hover:text-blue-400'>DJ Jackpot</p>
                            </Link>

                            {/* Play controls */}
                            <div className='flex items-center gap-4'>
                                <button>- 30</button>
                                <button onClick={togglePlayButton} className='text-lg border border-gray-500 p-3 rounded-full text-center'>
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </button>
                                <button>30 +</button>
                            </div>

                            {/* Audio player */}
                            <audio
                                ref={audioPlayer}
                                src={mixtape.link}
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                            ></audio>

                            {/* Time controls */}
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

                            {/* Download button */}
                            <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors' onClick={handleDownload}>
                                <FaDownload />
                                <span>Download</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <h1 className='text-4xl text-center mt-20'>Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-5 mb-10'>
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
            </div>

        </>
    );
}
