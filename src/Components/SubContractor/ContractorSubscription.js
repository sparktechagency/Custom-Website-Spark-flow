

'use client';
import React, { useState, useEffect } from 'react';

const ContractorSubscription = () => {
    // State for tab selection
    const [activeTab, setActiveTab] = useState('contractor');
    const [animationClass, setAnimationClass] = useState('');

    // Subscription data for Contractor and Subcontractor
    const subscriptionData = {
        contractor: [
            {
                id: 1, name: 'Basic Plan', price: '$29', duration: 'Monthly', features:
                    ['Basic features',
                        'Up to 10 crew members',
                        'Up to 1 project',
                        'Up to 1 project',
                        'Up to 3 team members', 'Up to 5 team members'],
                isPopuler: false
            },
            {
                id: 2, name: 'Standard Plan', price: '$49', duration: 'Monthly', features: ['Standard features', 'Up to 20 crew members', 'Up to 3 projects', 'Up to 5 team members'],
                isPopuler: true
            },
            {
                id: 3, name: 'Premium Plan', price: '$79', duration: 'Monthly', features: ['Premium features', 'Unlimited crew members', 'Unlimited projects', 'Unlimited team members'],
                isPopuler: false
            },
        ]

    };

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Reset animation when the active tab changes
    useEffect(() => {
        setAnimationClass('rotate-y-360 ease-in-out duration-[900ms]');
        const timer = setTimeout(() => {
            setAnimationClass(''); // Reset animation after it's done
        }, 500); // Matches the animation duration

        return () => clearTimeout(timer); // Cleanup timeout on tab change
    }, [activeTab]); // Run when activeTab changes

    return (
        <section className='container xl:px-0 px-5 py-8 md:py-5'>
            {/* Subscription Options */}
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 gap-5'>
                {subscriptionData[activeTab].map((plan) => (
                    <div key={plan.id} className={`relative flex ${animationClass}`}>
                        <img className='w-full lg:h-full h-[530px] relative' src="/Images/Home/subscriptions-bg.png" alt="" />
                        <div className='absolute flex flex-col justify-between h-full  top-0 left-0 p-10'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-5xl font-semibold text-gray-900'>{plan.price} <span className='text-base'>/ {plan.duration}</span></p>
                                    <span>
                                        {plan?.isPopuler && <span className=' bg-[#bac3de] text-[#333] text-xl font-semibold px-10 py-3 rounded-lg'>Popular</span>}
                                    </span>
                                </div>
                                <h3 className='text-2xl my-5 font-semibold text-gray-600'>{plan.name}</h3>
                                <img className='w-full' src="/Images/Home/sub-line.png" alt="" />
                                <ul className='list-disc ml-5 mt-5 '>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className='text-lg leading-[1.6] text-gray-600'>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className='px-10 py-3 mt-5 text-white bg-[#bac3de] hover:bg-[#203f9a] cursor-pointer duration-300 w-full rounded-lg '>Get Started</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContractorSubscription;
