import { play,tick } from '@/_assets/Service'
import Image from 'next/image'
import React from 'react'

const ServiceHero = () => {
    return (
        <div className=' bg-secondary1'>
        <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] md:px-[50px] lg:px-[100px] lg:py-[32px] flex flex-col items-center gap-[20px] lg:gap-[40px]'>
            <p className='text-heading font-bold mt-0 lg:mt-[30px] text-center'>Our Services</p>
            <p className='w-3/4 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias pariatur similique omnis, animi architecto rem iusto quidem minus impedit veritatis porro nesciunt. Nam aut necessitatibus delectus libero minus, perferendis .</p>
            <div className='flex flex-col gap-3'>
            <div className='flex gap-2 lg:gap-5 w-max mx-auto'>
                <button className='transition-all duration-200 ease p-2 lg:py-[16px] lg:px-[34px] bg-primary2 text-white rounded-xl border border-transparent hover:border-primary2 hover:bg-white hover:text-primary2 text-xs md:text-base'>Start my free 14-day trial</button>
                <button className='transition-all duration-200 ease p-2 lg:py-[16px] lg:px-[34px] flex lg:gap-5 items-center border  hover:bg-primary2 rounded-xl border-primary2 hover:text-white text-xs md:text-base'><Image src={play} alt='play' height={5000} width={5000} className='h-[23px] w-[23px]' /><p>See Demo Video</p>
                </button>
            </div>
            <ul className='flex justify-around lg:justify-between w-full list-inside flex-wrap ' style={{listStyleImage:`url(${tick.src})`}}>
                <li>Cancel Anytime</li>
                <li>Access to all content</li>
                <li>Export Support</li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default ServiceHero