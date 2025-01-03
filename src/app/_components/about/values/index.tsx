import Section from '@/_components/common/section'
import Image from 'next/image'
import React from 'react'
import { bulb, person, ribbon, text } from '@/_assets/About'

const Values = () => {
    return (
        <Section classes="flex flex-col lg:py-[32px] lg:px-[100px] gap-5 items-center" mainClasses="bg-secondary1">
            {/* Title and subtitle */}
            <div className="text-center mb-8 ">
                <span className="bg-[#EFECFF] text-[#B0A5F3] py-4 px-8 rounded-full text-sm font-medium">Our values</span>
                <h2 className="text-mobileheading lg:text-heading2 font-bold mt-4 leading-[1.3] mt-8">The Story And Values Behind <br/> Our Company</h2>
            </div>

            {/* Adjusting the grid to show 2x2 layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Innovation */}
                <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4">
                    <Image 
                        src={bulb} 
                        alt="Innovation icon" 
                        width={90} 
                        height={90} 
                        className='object-contain'
                    />
                    <div className='px-5'>
                        <h3 className="text-xl font-bold text-black">Innovation</h3>
                        <p className="text-gray-600 text-md">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>

                {/* Teamwork */}
                <div className="bg-gray-100 rounded-xl p-6  flex items-center gap-4">
                    <Image 
                        src={person} 
                        alt="Teamwork icon" 
                        width={90}  // Adjust the size of the icons
                        height={90} 
className='object-contain'
/>
                    <div className='px-5'>
                        <h3 className="text-xl font-bold text-black">Teamwork</h3>
                        <p className="text-gray-600 text-md">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>

                {/* Excellence */}
                <div className="bg-gray-100  rounded-xl p-6  flex items-center gap-4">
                    <Image 
                        src={ribbon} 
                        alt="Excellence icon" 
                        width={90}  // Adjust the size of the icons
                        height={90} 
className='object-contain'                    />
                    <div className='px-5'>
                        <h3 className="text-xl font-bold text-black">Excellence</h3>
                        <p className="text-gray-600 text-md">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>

                {/* Responsibility */}
                <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4">
                    <Image 
                        src={text} 
                        alt="Responsibility icon" 
                        width={90}  // Adjust the size of the icons
                        height={90} 
                       className='object-contain'
                    />
                    <div className='px-5'>
                        <h3 className="text-xl font-bold text-black">Responsibility</h3>
                        <p className="text-gray-600 text-md">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Values
