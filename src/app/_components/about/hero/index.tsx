import { aboutImage } from '@/_assets/About'
import Section from '@/_components/common/section'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <Section classes="flex flex-col lg:px-[100px] gap-5 items-center" mainClasses="bg-secondary1">
            <div className="text-center mb-8">
                <h2 className="text-mobileheading lg:text-heading font-bold text-primary pb-5 ">About Our Company</h2>
                <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.
                </p>
            </div>

            <div className="w-full">
                <Image 
                    src={aboutImage} 
                    alt="About our company" 
                    layout="responsive" 
                    className="w-full rounded-md object-cover"
                />
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-start justify-between">
                <div className="flex-1 w-full lg:w-1/3 text-center lg:text-left">
                    <h3 className="hidden lg:block text-mobileheading lg:text-heading2 font-bold text-primary mb-4 leading-[1.3]">What We<br/> Do</h3>
                    <h3 className="block lg:hidden text-mobileheading lg:text-heading2 font-bold mb-4 leading-[1.3]">What We Do</h3>
                </div>
                {/* Increased width for the text section */}
                <div className="flex-2 w-full text-center lg:text-start lg:w-3/5 text-lg text-gray-600">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
                    </p>
                    <p className="mt-4">
                        Content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default AboutHero
