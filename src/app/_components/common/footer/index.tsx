import Image from 'next/image';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import React from 'react';
import { FooterLinks } from '@/_constants/menuAndLinks';
import Link from 'next/link';
import { facebook, instagram, linkedin, twitter } from '@/_assets/Footer';

const images = [linkedin, instagram, twitter, facebook]

const Footer = () => {
  return (
    <div className=' bg-secondary1'>
      <div className='max-w-8xl 2xl:container mx-auto px-[15px] pt-[25px] lg:px-[100px] lg:pt-[63px]'>
        <div className='flex flex-col md:flex-row justify-between pb-[25px] md:pb-[40px] gap-10 md:gap-0'>
          <div className='flex flex-col space-y-[20px] py-[20px] md:py-0 md:space-y-[25px] px-[10px] w-full md:w-1/4 items-center text-center md:text-start md:items-start'>
            <p className='text-mobileheading2 md:text-heading3 font-bold'>Logo</p>
            <p className='text-mobilepara'>
              It is a long established fact that from will be distracted by the readable
              from when looking.
            </p>
            <div className='flex items-start gap-[10px]'>
              <FiMail size="1.5em" color='#7A67E6' />
              <div className='-my-1'>
                <p>pragra@gmail.com</p>
                <p>mail@pragra.com</p>
              </div>
            </div>
            <div className='flex items-start gap-[10px]'>
              <FiPhoneCall size="1.5em" color='#7A67E6' />
              <div className='-my-1'>
                <p>+830 8298 9310</p>
                <p>+001 9988 6589</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full md:w-1/2 text-center md:text-start items-center md:items-start md:px-5 gap-10 md:gap-0'>
            <div className='flex flex-col gap-[20px] px-[5px] w-1/2'>
              <p className='text-mobileheading2 md:text-heading3 font-medium'>Pages</p>
              <div className='w-full border-t'></div>
              {FooterLinks.pages.map((page) => (
                <Link href={page.url} key={page.url} className='text-para mx-auto md:mx-0 hover:text-primary2 w-max'>
                  {page.name}
                </Link>
              ))}
            </div>

            <div className='flex flex-col gap-[20px] px-[5px] w-1/2'>
              <p className='text-mobileheading2 md:text-heading3 font-medium'>Utility Pages</p>
              <div className='w-full border-t'></div>
              {FooterLinks.utilityPages.map((utilityPage) => (
                <Link href={utilityPage.url} key={utilityPage.url} className='text-para hover:text-primary2 w-max mx-auto md:mx-0'>
                  {utilityPage.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-[20px] py-[20px] md:py-0 md:space-y-[25px] px-[10px] w-full md:w-1/4'>
            <p className='text-mobileheading2 md:text-heading3 font-bold text-center md:text-start'>Socials</p>
            <div className='flex justify-between'>
              {images.map((item, i) => {
                return (<Link key={`social ${i}`} href='#'><Image src={item} alt='social' className='hover:text-primary2 cursor-pointer' /></Link>
                )
              })}
            </div>
          </div>
        </div>

        <p className='text-center'>Copyright &copy; PragraSaas {new Date().getFullYear()}</p>
        <div className='w-full border-t mt-2 pb-12'></div>
      </div>
    </div>
  );
};

export default Footer;
