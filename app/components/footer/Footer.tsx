import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/dj_jackpot_2.jpg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font dark:bg-gray-900">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <div>
                        <Image
                            src={logo}
                            alt='Jackpot Icon'
                            width={200}
                            height={200}
                            className='object-cover h-10 w-10 rounded-full'
                        />
                    </div>
                    <span className="ml-3 text-xl dark:text-gray-200">Dj Jackpot</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Dj Jackpot —
                    <a href="" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">CodeTechX</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500">
                        <BsWhatsapp />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <FaFacebook />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <BsTwitter />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <FaInstagram />
                    </a>
                </span>
            </div>
        </footer>
    )
}
