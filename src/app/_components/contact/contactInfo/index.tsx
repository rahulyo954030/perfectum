import { bg } from '@/_assets/Contact'
import React from 'react'

const ContactInfo = () => {
    return (
        <div className='px-[15px] py-[25px] lg:px-[100px] lg:py-[90px] flex flex-col md:flex-row gap-[30px] md:gap-5 justify-between items-center md:items-start' style={{ background: `url(${bg.src})` }}>
            <div className='w-full md:w-5/12 text-center md:text-start'>
                <p>Contact Info</p>
                <p className='text-mobileheading font-bold lg:text-heading2'>We are always happy to assist you</p>
            </div>
            <div className='flex md:gap-2 md:w-6/12 md:justify-between'>
                <div className='flex flex-col gap-3'>
                    <p className='font-semibold'>Email Address</p>
                    <div className='border-black border-t-3 w-[30px]'></div>
                    <p className='font-semibold'>help@info.com</p>
                    <div>
                        <p>Assistance hours:</p>
                        <p>Monday - Friday 6am to 8pm EST</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-semibold'>Number</p>
                    <div className='border-black border-t-3 w-[30px]'></div>
                    <p className='font-semibold'>(808) 998-34256</p>
                    <div>
                        <p>Assistance hours:</p>
                        <p>Monday - Friday 6am to 8pm EST</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo