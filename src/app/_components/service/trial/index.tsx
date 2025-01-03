import { trial } from '@/_assets/Service'
import Image from 'next/image'
import React from 'react'

const Trial = () => {
  return (
    <div className='max-w-8xl 2xl:container mx-auto bg-primary2 rounded-[2rem] px-[15px] lg:px-[100px] lg:py-[32px] md:px-[50px] py-[25px] flex flex-col lg:flex-row items-center '>
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5'>
        <p className='text-mobileheading text-center lg:text-start lg:text-heading text-white font-bold'>Start your free trial today</p>
        <p className='text-para text-center lg:text-start text-white font-semibold'>It is a long established fact that a reader will be by the readable when looking at it layout.</p>
        <button className='w-max p-2 lg:p-5 px-6 lg:px-10 rounded-[2rem] bg-white text-primary2'>Contact Us</button>
        </div>
        <div className='w-full lg:w-1/2 h-max mt-10 lg:mt-0'>
            <Image src={trial} alt="trial" height={5000} width={5000} className='h-max'/>
        </div>
    </div>
  )
}

export default Trial