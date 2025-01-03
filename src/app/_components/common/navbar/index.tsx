'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/_constants/menuAndLinks';
import { Logo } from '@/_assets/Navbar';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isActiveLink = (link: string): boolean => pathname == link;

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='bg-secondary1 w-full'>
    <div className='max-w-8xl 2xl:container mx-auto relative flex justify-between items-center px-[15px] lg:px-[100px] py-4 '>
      <Link href='/'>
        <Image
          src={Logo}
          alt='logo'
          height={5000}
          width={5000}
          className='h-12 md:h-16 w-max transition-all duration-200 ease'
        />
      </Link>

      <div className='hidden md:flex gap-5'>
        {NavLinks.map((item) => (
          <Link
            className={`font-normal lg:text-para transition-all hover:text-primary1 duration-200 ease ${isActiveLink(item.url) ? 'text-primary1' : 'text-secondary3'
            }`}
            href={item.url}
            key={item.id}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className='hidden md:flex gap-5 font-para *:border-1 *:rounded-xl font-medium'>
        <Link href="#" className='text-secondary5 px-[25px] py-[12px] border-transparent hover:bg-secondary5 hover:text-secondary1 transition-all duration-200 ease'>
          Sign In
        </Link>
        <Link href="#" className='border-primary1 px-[25px] py-[12px] text-primary1 hover:text-secondary1 bg-secondary1 hover:bg-primary1 transition-all duration-200 ease'>
        
          Sign Up
        </Link>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={handleToggleDropdown} className='text-primary1 focus:outline-none'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div className='absolute top-16 right-0 bg-white border border-gray-200 rounded shadow-lg w-48 transition-all duration-200 ease'>
          <div className='flex flex-col'>
            {NavLinks.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className={`block px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease ${isActiveLink(item.url) ? 'text-primary1' : ''
                }`}
                onClick={handleCloseDropdown}
              >
                {item.title} 
              </Link>
            ))}
          </div>
          <div className='flex flex-col p-4'>
            <button
              className='text-secondary5 border border-transparent hover:bg-secondary5 hover:text-white mb-2 transition-all duration-200 ease'
              onClick={handleCloseDropdown}
            >
              Sign In
            </button>
            <button
              className='border border-primary1 text-primary1 hover:text-white bg-white hover:bg-primary1 transition-all duration-200 ease'
              onClick={handleCloseDropdown}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
