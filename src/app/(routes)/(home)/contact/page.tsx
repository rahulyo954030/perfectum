import ContactInfo from '@/_components/contact/contactInfo'
import ContactHero from '@/_components/contact/hero'
import NewsLetter from '@/_components/common/newsletter'
import React from 'react'

const Contact = () => {
    return (
        <div className='bg-secondary1'>
           <ContactHero/>
            <ContactInfo/>
            <NewsLetter/>
        </div>
    )
}

export default Contact