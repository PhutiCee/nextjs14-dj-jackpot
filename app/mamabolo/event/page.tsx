
export default function page() {
    async function upload(formData: FormData) {
        'use server'
        console.log(formData);

    }
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <form action={upload} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-16 dark:text-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add Event</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Event Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Details:</label>
                    <input
                        type="text"
                        id="details"
                        name="details"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-2">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Upload</button>
            </form>
        </div>
    )
}
