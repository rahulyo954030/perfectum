import { Features1, Features2, Features3 } from '@/_assets/Home'
import Image from 'next/image'
import React from 'react'

const data =[
    {
        id:1,
        image:Features1,
        title:"Manage Your Business",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:2,
        image:Features2,
        title:"Post an Opportunity",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:1,
        image:Features3,
        title:"Post A Project",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]

const Features = () => {
  return (
    <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] lg:py-[32px] lg:px-[100px] flex flex-col gap-[30px] xl:gap-[60px]'>
        <div className='flex flex-col md:flex-row items-center md:space-x-[100px]'>
            <p className='text-mobileheading lg:text-heading2 font-bold text-center md:text-start'>Our Exclusive Features</p>
            <div className='flex flex-col md:flex-row text-center md:text-start md:space-x-[50px] items-center text-mobilepara md:text-para'>
                <p className='mt-[12px] mb-[24px] lg:mb-0 lg:mt-0'>We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily</p>
                <button className='lg:w-[280px] h-max bg-primary2 text-para text-white border rounded-xl text-medium py-[14px] px-[32px] transition-all duration-200 ease'>Learn More</button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-[44px] text-center md:text-start'>
            {data.map((item)=>{
                return(
                    <div key={item.id} className='flex flex-col gap-[20px]'>
                        <div>
                        <Image src={item.image} className='' alt='features' height={5000} width={5000}/>
                        </div>
                        <p className='text-mobileheading2 lg:text-heading3 font-medium'>{item.title}</p>
                        <p className='font-normal text-mobilepara lg:text-para text-secondary4'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Features