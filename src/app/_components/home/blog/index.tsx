import { BlogImage1, BlogImage2 } from '@/_assets/Home'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        id: 1,
        image: BlogImage1,
        date: "November 15, 2022",
        title: "10 Top tips for making your Saas product sticky",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum",
        tags: ["Marketing", "Analysis"]
    },
    {
        id: 2,
        image: BlogImage2,
        date: "November 15, 2022",
        title: "Automate Reports Generation with Saasup",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum",
        tags: ["Marketing", "Analysis"]
    }
]

const Blog = () => {
    return (
        <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] lg:px-[100px] lg:pt-[32px] flex flex-col gap-8 items-center'>
            <p className='bg-secondary2 text-primary2 px-[50px] py-[12px] md:py-[20px] rounded-full w-max '>Blog</p>
            <p className='text-mobileheading text-center lg:text-heading2 font-bold'>Most Popular Articles</p>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-[5rem] *:bg-secondary2 *:p-5 *:rounded-[2rem]'>
                {data.map((item) => {
                    return (
                        <div className='flex flex-col gap-5' key={item.id}>
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt="blog"
                                    height={5000}
                                    width={5000}
                                    className="rounded-[2rem] w-full h-full object-cover"
                                />
                                <div className="absolute bottom-5 flex flex-row gap-2 left-5 z-10">
                                    {item.tags.map((value,i)=><p className='bg-white p-2 rounded-full' key={`tag ${i}`}>{value}</p>)}
                                </div>
                            </div>
                            <p className='text-mobilepara'>{item.date}</p>
                            <p className='text-mobileheading2 lg:text-heading3 font-semibold'>{item.title}</p>
                            <p>{item.description}</p>
                            <Link href='#' className='underline text-primary2'>Read More</Link>
                        </div>
                    )
                })}
            </div>
            <button className='border w-max border-primary1 text-primary1 hover:bg-primary1 hover:text-white px-[40px] py-[14px] md:px-[50px] md:py-[18px] rounded-xl transition-all duration-200 ease'>View All Blogs</button>
        </div>
    )
}

export default Blog