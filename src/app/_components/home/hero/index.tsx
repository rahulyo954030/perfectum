import { CallIcon, Header, HeaderMobile } from '@/_assets/Home'
import Section from '@/_components/common/section'
import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
    return (
        <Section classes='py-[25px] md:py-[32px] relative' mainClasses="bg-secondary1">
    <Image 
        src={Header} 
        alt='img' 
        fill
        
        className='absolute inset-0 w-full h-full hidden lg:block object-cover' 
    />
    <div className='relative flex flex-col items-center text-center'>
            <p className='text-mobileheading md:text-heading text-secondary3 w-full md:w-3/4 font-bold'>The Only <span className='bg-secondary2 rounded-xl px-2 text-primary1'>All In One</span> AI Powered Tool For Your Engagement</p>
            <p className='text-heading-2 md:text-para w-5/6 md:w-2/5 mt-[10px] md:mt-[20px] mb-[20px] md:mb-[40px]'>Create and mange your whole team with detailed stats and first-rate features</p>
            <div className='gap-5 flex text-mobileheading3 md:text-para'>
                <button className='border bg-gradient-to-b hover:bg-gradient-to-t from-primary1 to-primary2 border-primary1 rounded-[10px] text-white px-[33px] md:px-[60px] py-[9px] md:py-[18px]  transition-all duration-200 ease'>Get Started</button>
                <button className='border border-secondary5 hover:bg-secondary5 rounded-[10px] text-secondary5 hover:text-white  px-[33px] md:px-[24px] py-[9px] md:py-[18px] flex items-center gap-[10px] transition-all duration-200 ease'><Image src={CallIcon} alt='logo' className='' height={23} width={23} /><p>Contact Us</p></button>
            </div>
            <p className='text-mobileheading3 md:text-para mt-[18px] mb-[50px]'>NB: No credit card required . Plan starts at $10/month</p>
            </div>
            <Image src={HeaderMobile} alt='mobile' height={5000} width={5000} className='block lg:hidden w-full h-full'/>
            <div className='hidden lg:block h-40 xl:h-56 2xl:h-80'>

            </div>
        </Section>)
}

export default HomeHero