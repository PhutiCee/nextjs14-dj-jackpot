'use client'
import { useTheme } from 'next-themes';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className='sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-lg'>
            <nav className='max-w-6xl mx-auto flex justify-between p-4'>
                <div className='block md:hidden lg:hidden cursor-pointer z-50' onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
                </div>
                <h2 className='font-serif font-bold text-2xl'>
                    <Link href={'/'}>Dj Jackpot</Link>
                </h2>
                <div className='md:hidden'></div>
                <ul className='hidden md:flex items-center gap-3 font-mono text-lg'>
                    <li>
                        <Link href={'/'} className='p-2 hover:bg-blue-400 rounded-md hover:text-white'>Home</Link>
                    </li>
                    <li>
                        <Link href={'/events'} className='p-2 hover:bg-blue-400 rounded-md hover:text-white'>Events</Link>
                    </li>
                    <li>
                        <Link href={'/mixtapes'} className='p-2 hover:bg-blue-400 rounded-md hover:text-white'>Mixtapes</Link>
                    </li>
                    <li className='cursor-pointer' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </li>
                </ul>
                {/* Mobile Navigation Links */}
                <div className={`md:hidden lg:hidden fixed inset-0 bg-gray-200 bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-95 z-30 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <div className='flex justify-center p-4'>
                        <div className="text-2xl font-semibold">
                            <Link href={"/"}>
                                <h2 className='font-serif font-bold text-2xl'>Dj Jackpot</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-around h-full text-2xl font-sans">
                        <ul className="flex flex-col items-center space-y-14">
                            <li>
                                <Link href={"/"} onClick={toggleMobileMenu} className="hover:text-gray-500">Home</Link>
                            </li>
                            <li>
                                <Link href={"/events"} onClick={toggleMobileMenu} className="hover:text-gray-500">Events</Link>
                            </li>
                            <li>
                                <Link href={"/mixtapes"} onClick={toggleMobileMenu} className="hover:text-gray-500">Mixtapes</Link>
                            </li>
                            <li onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); }}>
                                <div className="flex items-center mx-3 my-3">
                                    {theme === 'light' ? <span className='flex items-center cursor-pointer'><FaMoon className='mr-1' /> Dark</span> : <span className='flex items-center cursor-pointer'><FaSun className='mr-1' />Light</span>}
                                </div>
                            </li>
                        </ul>
                        <p
                            className='text-gray-700 dark:text-gray-400 text-sm border-t-2 border-t-slate-800 dark:border-t-slate-500 mb-2'
                        >
                            Developed by <a href="https://phuti-developer.vercel.app" target='_blank'>Phuti Sekwadi</a>
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
