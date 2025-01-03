import React from 'react'
import { HomeHero, Sponsors, WhyUs, Features, Team, Hire, Pricing, Testimonial, Blog } from '@/_components/home'
import NewsLetter from '@/_components/common/newsletter'

const Home = () => {
    return (
        <div className='flex flex-col'>
            <HomeHero />
            <Sponsors />
            <WhyUs />
            <Features />
            <Team />
            <Pricing />
            <Testimonial />
            <Blog />
            <Hire />
            <NewsLetter/>
        </div>
    )
}

export default Home