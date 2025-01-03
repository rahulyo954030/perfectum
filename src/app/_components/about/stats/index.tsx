"use client";

import Section from '@/_components/common/section';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = () => {
    // State to keep track of which stats have already counted
    const [hasCounted, setHasCounted] = useState([false, false, false, false]);

    const statsData = [
        { id: 1, value: 100, symbol: 'M', title: 'Client Satisfaction' },
        { id: 2, value: 24, symbol: 'h', title: 'Expert Support Team' },
        { id: 3, value: 98, symbol: 'k+', title: 'Sales Count' },
        { id: 4, value: 208, symbol: '+', title: 'Client Worldwide' }
    ];

    const handleVisibilityChange = (isVisible: boolean, index: number) => {
        if (isVisible && !hasCounted[index]) {
            // Update the state to mark the stat as counted
            setHasCounted((prevState) => {
                const updatedCounted = [...prevState];
                updatedCounted[index] = true;
                return updatedCounted;
            });
        }
    };

    return (
        <Section classes="flex flex-col lg:py-[32px] lg:px-[100px] gap-5 items-center" mainClasses="bg-secondary1">
            <div className="w-full bg-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-6 text-center">
                    {statsData.map((stat, index) => (
                        <VisibilitySensor
                            key={stat.id}
                            partialVisibility
                            offset={{ bottom: 50 }}
                            onChange={(isVisible: boolean) => handleVisibilityChange(isVisible, index)}
                            delayedCall // Prevents multiple triggers
                        >
                            <div className="flex flex-col items-center">
                                <h3 className="text-5xl font-bold text-gray-800">
                                    {hasCounted[index] ? (
                                        <>
                                            <CountUp start={0} end={stat.value} duration={1.2} />
                                            <span className="text-[#806DEA]">{stat.symbol}</span>
                                        </>
                                    ) : (
                                        <>
                                            0<span className="text-[#806DEA]">{stat.symbol}</span>
                                        </>
                                    )}
                                </h3>
                                <p className="text-md font-semibold text-gray-800 mt-2">{stat.title}</p>
                            </div>
                        </VisibilitySensor>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Stats;
