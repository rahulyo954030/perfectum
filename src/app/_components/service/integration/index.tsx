import { analytics1, analytics2, analytics3, integration1, integration2, integration3} from '@/_assets/Service'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    image:integration1,
    title:"20+ Integrations",
    description:"Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
  },
  {
    image:integration2,
    title:"All-in-one platform",
    description:"Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
  },
  {
    image:integration3,
    title:"Advanced Charts",
    description:"Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
  },
]

const Integration = () => {
  return (
    <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] md:px-[50px] lg:px-[100px] lg:py-[32px] flex flex-col items-center'>
      <p className='bg-secondary2 text-primary2 px-[50px] py-[12px] md:py-[20px] rounded-full w-max mb-[30px]'>Integration</p>
      <p className='text-mobileheading lg:text-heading2 font-bold w-full lg:w-3/5 text-center mb-[35px]'>Connect All Your Tools And Work Efficiently</p>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-5 '>
        {data.map((item,i)=>{
          return (
          <div key={`analytics ${i}`} className='w-full lg:w-1/3 p-8 text-center flex flex-col gap-5 hover:bg-secondary2 rounded-[2rem] group'>
          <Image src={item.image} alt='icon1' width={5000} height={5000} className='w-full h-max'/>
          <p className='text-mobileheading2 lg:text-heading3 font-bold'>{item.title}</p>
          <p>{item.description}</p>
          <button className='underline group-hover:text-primary1'>Learn More</button>
        </div>)})}
      </div>
    </div>
  )
}

export default Integration