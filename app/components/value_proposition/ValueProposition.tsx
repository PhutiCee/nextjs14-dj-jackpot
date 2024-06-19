import Link from 'next/link'
import React from 'react'

export default function ValueProposition() {
    return (
        <section className="text-gray-600 body-font bg-white dark:bg-gray-800">
            <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Why Choose DJ Jackpot?</h2>
                    <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">Experience the best in music with DJ Jackpot. Our mixtapes are curated to perfection, offering a unique blend of beats that keep you moving. Whether you&apos;re at a party or just relaxing, DJ Jackpot&apos;s tunes are guaranteed to elevate your mood and keep the good vibes flowing.</p>
                    <div className="flex justify-center">
                        <Link href="/mixtapes" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Listen Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
