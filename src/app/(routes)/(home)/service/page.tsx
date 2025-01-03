import NewsLetter from '@/_components/common/newsletter'
import { Analytics, HeaderVideo, Integration, Pricing, ServiceHero,Trial } from '@/_components/service'
import React from 'react'

const Service = () => {
  return (
    <>
    <ServiceHero/>
    <HeaderVideo/>
    <Analytics/>
    <Integration/>
    <Trial/>
    <Pricing/>
    <NewsLetter/>
    </>
  )
}

export default Service