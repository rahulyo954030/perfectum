import React from 'react'

const data=[
    {
        title:"Basic",
        tag:"Popular",
        price:"7.99",
        note:"Billed as $96 per year",
        features:[
            "Unlimited members",
            "Unlimited feedback",
            "Weekly team feedback friday",
            "Custom Kudos +9 Illustrations",
            "Team feedback history"
        ]
    },
    {
        title:"Basic",
        tag:"Popular",
        price:"7.99",
        note:"Billed as $96 per year",
        features:[
            "Unlimited members",
            "Unlimited feedback",
            "Weekly team feedback friday",
            "Custom Kudos +9 Illustrations",
            "Team feedback history"
        ]
    },
    {
        title:"Basic",
        tag:"Popular",
        price:"7.99",
        note:"Billed as $96 per year",
        features:[
            "Unlimited members",
            "Unlimited feedback",
            "Weekly team feedback friday",
            "Custom Kudos +9 Illustrations",
            "Team feedback history"
        ]
    }
]

const Pricing = () => {
  return (
    <div className='max-w-8xl mx-auto 2xl:container flex flex-col items-center lg:px-[100px] lg:py-[32px] md:px-[70px] px-[15px] py-[25px]'>
        <p className='text-mobileheading font-bold text-heading2 mb-[16px]'>Pricing</p>
        <p className='text-center w-full lg:w-2/3 mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam aspernatur similique dolor beatae? Inventore, placeat cupiditate?consectetur adipisicing elit. Totam aspernatur similique dolor beatae?</p>
        <div className='flex flex-col lg:flex-row w-full  gap-8'>
            {data.map((item,i)=>{
                return(
                    <div key={`pricing ${i}`} className='w-full lg:w-1/3 p-8 transition-all duration-200 ease rounded-[2rem] hover:bg-primary1 bg-secondary2 flex flex-col group'>
                        <div className='flex justify-between items-center'>
                            <p className='text-heading3 font-bold text-black group-hover:text-white'>{item.title}</p>
                            <p className='border text-black group-hover:text-primary2 bg-white rounded-full px-4 py-2'>{item.tag}</p>
                        </div>
                        <div className='w-full border-t-2 border-black group-hover:border-white my-3'></div>
                        <p className='my-3 text-heading3 font-bold text-center text-black group-hover:text-white'>${item.price}<span className='text-para'>/month</span></p>
                        <p className='my-3 text-center bg-secondary5 group-hover:bg-primary2 w-max mx-auto rounded-full px-2 group-hover:text-white'>{item.note}</p>
                        <div className='w-full border-t-2 border-black my-3 group-hover:border-white'></div>
                        <ul className='flex flex-col gap-5 text-center'>
                            {item.features.map((data,i)=>{
                                return(
                                    <li key={i} className='group-hover:text-white'>{data}</li>
                                )
                            })}
                        </ul>
                        <button className='border mt-5 rounded-[2rem] px-4 py-2 mx-auto w-max group-hover:bg-white group-hover:border-transparent group-hover:text-primary1'>Get Started</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Pricing