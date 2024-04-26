"use client"
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';

export default function AddMixtape() {
    const [name, setName] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);

    const onImageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const onAudioChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setAudio(e.target.files[0]);
        }
    };

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!name || !image || !audio) {
                return;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('image', image);
            formData.append('audio', audio);

            const response = await axios.post("/api/upload-mixtape", formData);
            const data = response.data;

            const songData = {
                name: name,
                link: data.audioLink,
            };
            const jackpotAPi = await axios.post("/api/add_song", songData);
            const finalData = jackpotAPi.data;
            console.log("finalData");
            console.log(finalData);
            setName('');
            setAudio(null);
            setImage(null);
        } catch (error: any) {
            console.log("(Phuti) Error:", error.message);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <form onSubmit={onSubmitHandler} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-16 dark:text-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add Mixtape</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Mixtape Name:</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-2">Image:</label>
                    <input
                        onChange={onImageChangeHandler}
                        type="file"
                        id="image"
                        name="image"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="audio" className="block text-sm font-medium mb-2">Audio:</label>
                    <input
                        onChange={onAudioChangeHandler}
                        type="file"
                        id="audio"
                        name="audio"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Upload</button>
            </form>
        </div>
    )
}
