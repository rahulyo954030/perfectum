import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-primary2'>
    <div className='max-w-8xl mx-auto 2xl:container px-[15px] py-[25px] lg:px-[100px] lg:py-[90px] flex flex-col md:flex-row items-center justify-between '>
        <div className='w-full md:w-1/2 text-white text-center md:text-start'>
            <p className='text-heading3 mb-5'>Subscribe to our Newsletter</p>
            <p className='text-mobilepara md:text-para'>Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.</p>
        </div>
        <div className='mt-[25px] p-[8px] md:p-1 h-max flex-1'>
          <div className='flex items-center justify-center rounded'>
            <input className='p-2 w-2/3 md:p-3 bg-primary1 text-white placeholder-white outline-none rounded-l' placeholder='Enter Your Email' />
            <p className='p-2 md:p-3 bg-white text-primary1 rounded-r'>Subscribe</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter