import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function Contacts() {
    return (
        <section className="text-gray-600 body-font bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-5 py-9">
                <div className="flex flex-col text-center w-full mb-8">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Get in Touch</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300">For bookings, collaborations, or any other inquiries, feel free to reach out to us. We would love to hear from you!</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition duration-300 flex items-center justify-center w-48 p-4 rounded-lg"
                    >
                        <BsWhatsapp className="text-4xl mr-2" />
                        <span className="text-lg font-medium">WhatsApp</span>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 flex items-center justify-center w-48 p-4 rounded-lg mt-1 md:mt-0"
                    >
                        <BsFacebook className="text-4xl mr-2" />
                        <span className="text-lg font-medium">Facebook</span>
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition duration-300 flex items-center justify-center w-48 p-4 rounded-lg mt-1 md:mt-0"
                    >
                        <BsInstagram className="text-4xl mr-2" />
                        <span className="text-lg font-medium">Instagram</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
