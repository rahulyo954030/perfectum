import { headerbg } from '@/_assets/Service'
import Image from 'next/image'
import React from 'react'

const HeaderVideo = () => {
    return (
        <div className="px-[15px] md:px-[50px] lg:px-[100px] max-w-8xl mx-auto 2xl:container bg-gradient-to-r from-[#FB585A] to-[#FABE24]">
            <Image
                src={headerbg}
                alt="headerbg"
                height={5000}
                width={5000}
                className="h-full"
            />
        </div>
    )
}

export default HeaderVideo