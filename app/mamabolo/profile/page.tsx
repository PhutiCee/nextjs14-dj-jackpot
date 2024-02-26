import React from 'react'

export default function page() {
    async function upload(formData: FormData) {
        'use server'
        console.log(formData);

    }
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <form action={upload} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-16 dark:text-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add Profile</h2>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-2">Profile:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">What do you do:</label>
                    <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Bio:</label>
                    <input
                        type="text"
                        id="bio"
                        name="bio"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save</button>
            </form>
        </div>
    )
}
