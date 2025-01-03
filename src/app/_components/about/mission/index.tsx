import Section from '@/_components/common/section'
import Image from 'next/image'
import React from 'react'
import { ipad } from '@/_assets/About'

const Mission = () => {
    return (
        <Section classes="flex flex-col md:flex-row  lg:py-[32px] lg:px-[100px] gap-5 items-center" mainClasses="bg-secondary1">
            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-md text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu aliquet diam lorem viverra at justo. Nulla odio nequejf gravida in pharetra egestas. Ac id sagittis at morbi interdum nibh diam sagittis et.
                </p>
                <p className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio neque gravida in pharetra egestas.
                </p>
            </div>

            <div className="flex-1">
                <Image
                    src={ipad}
                    alt="iPad displaying colorful graphics"
                    layout="responsive"
                    className="rounded-md object-cover"
                />
            </div>
        </Section>
    )
}

export default Mission
