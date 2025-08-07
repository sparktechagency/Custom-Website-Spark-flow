
import AboutUs from '@/Components/Home/AboutUs';
import ContactAndGetWork from '@/Components/Home/ContactAndGetWork';
import CountDown from '@/Components/Home/CountDown';
import Hero from '@/Components/Home/Hero';
import HowItWork from '@/Components/Home/HowItWork';
import JobBrowse from '@/Components/Home/JobBrowse';
import KeyFeatures from '@/Components/Home/KeyFeatures';
import Subscription from '@/Components/Home/Subscription';
import React from 'react';

const Page = () => {
    return (
        <main>
            <Hero />
            <CountDown />
            <AboutUs />
            <HowItWork />
            <JobBrowse />
            <ContactAndGetWork />
            <KeyFeatures />
            <Subscription />
        </main>
    );
}

export default Page;
