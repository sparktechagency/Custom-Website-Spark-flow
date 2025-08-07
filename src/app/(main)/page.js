
import AboutUs from '@/Components/Home/AboutUs';
import CountDown from '@/Components/Home/CountDown';
import Hero from '@/Components/Home/Hero';
import HowItWork from '@/Components/Home/HowItWork';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero />
            <CountDown />
            <AboutUs />
            <HowItWork />
        </div>
    );
}

export default Page;
