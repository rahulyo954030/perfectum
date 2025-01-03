import { pricing1, pricing2, pricing3, pricing4 } from '@/_assets/Home'
import Image from 'next/image'
import React from 'react'

const images = [
    pricing1, pricing2, pricing3, pricing4
]

const Pricing = () => {
    return (
        <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] lg:px-[100px] lg:py-[32px] flex flex-col items-center md:items-start md:flex-row space-y-5 lg:space-y-0 md:space-x-2 lg:space-x-5 *:rounded-[2rem]'>
            <div className='flex flex-col gap-5 w-full md:w-1/3 py-4 text-center md:text-start'>
                <p className='bg-secondary1 text-primary2 font-semibold w-max mx-auto md:mx-0 rounded-full px-[54px] py-[12px] lg:py-[24px]'>Pricing</p>
                <p className='text-mobileheading lg:text-heading2 font-bold'>Simple And Flexible Pricing</p>
                <p>Join us in our journey and let&apos;s ensure the productivity of your team</p>
                <p>Accepted Payment Methods</p>
                <div className='flex bg-gray-50 *:w-1/4 p-4 rounded-xl'>
                    {images.map((item, i) => <Image key={i} src={item} alt="" width={5000} height={5000} />)}
                </div>
            </div>
            <div className='flex flex-col gap-5 w-11/12 md:w-1/3 bg-secondary1 items-center py-8'>
                <div className='flex justify-between w-full px-8 items-center'>
                    <p className='text-mobileheading2 font-bold'>Basic</p>
                    <p className='text-mobilepara lg:text-para p-1 px-2 text-primary2 bg-white rounded-full'>Save 30%</p>
                </div>
                <div className='border-t w-full'></div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-2xl font-semibold'>$7.99/month</p>
                    <p className='bg-[#FFEECC] text-[#C68A15] p-2 px-4 rounded-full'>Billed as $96 per year</p>
                </div>
                <div className='border-t w-full'></div>
                <div className='flex flex-col gap-3 items-center text-mobilepara lg:text-base xl:text-para'>

                    <p>Unlimited Members</p>
                    <p>Unlimited Feedbacks</p>
                    <p>Weekly team feedback friday</p>
                    <p>Custom Kudos +9 Illustrations</p>
                    <p>Team feedback history</p>
                    <button className='border border-black p-3 px-5 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease'>Get Started</button>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-11/12 md:w-1/3 bg-secondary1 items-center py-8'>
                <div className='flex justify-between w-full px-8 items-center'>
                    <p className='text-mobileheading2 md:heading2 font-bold'>Advanced</p>
                    <p className='text-mobilepara lg:text-para p-1 px-2 text-primary2 bg-secondary2 rounded-full '>Popular</p>
                </div>
                <div className='border-t w-full'></div>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-2xl font-semibold'>$7.99/month</p>
                    <p className='bg-[#FFEECC] text-[#C68A15] p-2 px-4 rounded-full'>Billed as $96 per year</p>
                </div>
                <div className='border-t w-full'></div>
                <div className='flex flex-col gap-3 items-center text-mobilepara lg:text-base xl:text-para'>

                    <p>Unlimited Members</p>
                    <p>Unlimited Feedbacks</p>
                    <p>Weekly team feedback friday</p>
                    <p>Custom Kudos +9 Illustrations</p>
                    <p>Team feedback history</p>
                    <button className='border border-black p-3 px-5 rounded-full hover:bg-black hover:text-white  transition-all duration-200 ease'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Pricing