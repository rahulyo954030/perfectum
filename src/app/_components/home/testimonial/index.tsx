'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/_constants/testimonial';

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className='bg-primary2 flex justify-center'>
            <div className="max-w-8xl w-full 2xl:container text-white py-[25px] px-[15px] lg:my-[32px] lg:mx-[100px] text-center">
                <div className='relative w-full'>
                    <div
                        className="absolute left-4 top-[300px] lg:top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handlePrev}>
                        <button className="w-12 h-12 bg-white text-primary2 rounded-full shadow-md">
                            &lt;
                        </button>
                    </div>
                    <div
                        className="absolute right-4  top-[300px] lg:top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleNext}
                    >
                        <button className="w-12 h-12 bg-white text-primary2 rounded-full shadow-md">
                            &gt;
                        </button>
                    </div>
                    <div className="my-[30px]">
                        <span className="px-[54px] py-[18px] lg:px-[30px] lg:py-[22px] bg-white text-primary2 text-mobilepara lg:text-para rounded-full font-bold">Testimonial</span>
                    </div>
                    <h2 className="text-mobileheading2 lg:text-heading2 font-bold my-6">Trusted by millions of creators.</h2>
                    <p className="text-lg italic max-w-2xl mx-auto mb-8">
                        {testimonials[currentIndex].quote}
                    </p>

                    <div className="flex flex-col items-center justify-center space-x-4">
                        <Image height={5000} width={5000}
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                            className="w-16 h-16 rounded-full  shadow-md"
                        />
                        <div>
                            <h3 className="font-bold text-heading3">{testimonials[currentIndex].author}</h3>
                            <p>{testimonials[currentIndex].role}</p>
                            <div className="text-yellow-400">
                                {'★'.repeat(testimonials[currentIndex].rating)}
                                {'☆'.repeat(5 - testimonials[currentIndex].rating)}
                            </div>
                        </div>
                    </div>

                    <button className="mt-8 px-6 py-2 hover:text-primary2 border border-white hover:bg-primary2 text-white rounded-xl shadow-md bg-primary2 hover:bg-white  transition-all duration-200 ease">
                        View All Testimonials
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
