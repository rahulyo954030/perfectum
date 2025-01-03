import { SponsorLogo1, SponsorLogo2, SponsorLogo3, SponsorLogo4 } from '@/_assets/Home'
import Section from '@/_components/common/section'
import Image from 'next/image'
import React from 'react'
const data=[
    {
        id:1,
        image:SponsorLogo1
    },
    {
        id:2,
        image:SponsorLogo2
    },
    {
        id:3,
        image:SponsorLogo3
    },
    {
        id:4,
        image:SponsorLogo4
    },
]
const Sponsors = () => {
  return (
    <Section classes="flex flex-col py-[25px] px-[15px] lg:py-[32px] lg:px-[100px] gap-5 items-center text-center" mainClasses="bg-secondary1">
        <p className='font-bold text-mobileheading md:text-heading3 lg:text-heading2'>Our <span className='underline decoration-secondary5 decoration-4'>Sponsors</span></p>
        <p className='text-mobilepara md:text-base'>We are blessed to work with leading brands & Companies</p>
        <div className='flex flex-wrap mx-auto justify-evenly items-center'>
            {data.map((item,i)=>{
                return(
                    <Image className='h-full w-1/2 md:w-1/4 px-[10px] py-[10px] md:px-[25px] lg:px-[50px]' src={item.image} key={`sponsor ${i}`} alt='sponsor' height={5000} width={5000}/>
                )
            })}
        </div>
    </Section>
  )
}

export default Sponsors