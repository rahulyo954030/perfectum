import React from 'react';

const ContactHero = () => {
  return (
    <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]'>
    <div className='text-center md:text-start'>
        <p>Get Started</p>
        <p className='text-mobileheading lg:text-heading2 font-bold'>Get in touch with us.</p>
        <p className='text-mobileheading lg:text-heading2 font-bold'>We are here to assist you.</p>
    </div>
    <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-col md:flex-row w-full gap-5 *:p-2 *:outline-none *:border-b mt-[40px] md:mt-[90px] *:bg-secondary1'>
            <input className='w-full md:w-1/3 placeholder-black' placeholder='Your Name' />
            <input className='w-full md:w-1/3 placeholder-black' placeholder='Email address' />
            <input className='w-full md:w-1/3 placeholder-black' placeholder='Phone Number' />
        </div>
        <textarea placeholder='Message' className='bg-secondary1 placeholder-black w-full outline-none border-b p-2 min-h-[80px]' />
        <button className='bg-primary2 p-[10px] md:p-[14px] px-[25px] md:px-[32px] w-max rounded-xl text-white mx-auto md:mx-0'>Leave Us A Message</button>
    </div>
</div>
  )
}

export default ContactHero