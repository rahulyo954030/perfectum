import { italy, italyLogo, portugal, portugalLogo, SALogo, southafrica } from '@/_assets/Home'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: 1,
        image: italy,
        logo: italyLogo,
        title: "Italy",
        tags: ["EOR", "Contractor"]
    },
    {
        id: 2,
        image: portugal,
        logo: portugalLogo,
        title: "Portugal",
        tags: ["EOR", "Contractor"]
    },
    {
        id: 3,
        image: southafrica,
        logo: SALogo,
        title: "South Africa",
        tags: ["EOR", "Contractor"]
    }
]

const Hire = () => {
    return (
        <div className='max-w-8xl mx-auto 2xl:container flex flex-col text-center gap-5 px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]'>
            <p className='w-full md:w-6/12 text-mobileheading lg:text-heading2 font-bold mx-auto'><span className='text-primary1'>Hire</span> From Anywhere Around The World</p>
            <p className='w-full md:w-3/5 mx-auto mb-[20px] text-secondary4'>Tap into the most extensive coverage on the market and hire anywhere in five minutes using our 100+ Deel entities and visa support. Yep, your talent pool just got infinite.</p>
            <div className='flex flex-col gap-4 md:gap-0 md:flex-row '>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="relative md:mx-4 w-full h-full md:even:mt-8 mb-8 md:mb-0">
                            <div className="absolute top-5 left-5 z-10 text-white font-bold">
                                {item.title}
                            </div>
                            <Image src={item.image} alt="country" quality={100}
                                className="w-full h-full object-cover object-center"
                                width={5000} height={5000}/>
                            <div className="flex flex-row gap-2 absolute bottom-4 left-4 z-10 text-white">
                            {item.tags.map((value,i)=><p className='border rounded-full p-1 px-2 text-[10px]' key={i}>{value}</p>)}
                            </div>
                            <div className='absolute -bottom-5 bg-white p-2 rounded-full border-2 border-black shadow right-2 z-10 text-white font-bold w-12 h-12'>
                                <Image src={item.logo} alt='itemLogo' height={5000} width={5000} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hire