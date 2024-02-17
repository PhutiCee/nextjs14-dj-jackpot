import Image from 'next/image';
import React from 'react'
import EventComponent from '../components/event_component/EventComponent';

export default function Events() {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mt-8">Events and details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-2 gap-1'>
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />

            </div>
        </div>
    );
}

