'use client';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { WhyUsImage } from '@/_assets/Home';

const sections = [
  {
    title: "Manage your Business",
    description: "We help you to manage your business by providing our AI-based analytics which ensure the productivity of your team.",
    tag: "POPULAR",
    tagColor: "bg-secondary2 text-primary1",
  },
  {
    title: "Post A Job",
    description: "Post jobs easily to find the right talent for your team.",
  },
  {
    title: "Post A Project",
    description: "Start new projects and collaborate with your team efficiently.",
  },
];

export default function WhyUs() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (sectionTitle:any) => {
    setSelected(selected === sectionTitle ? null : sectionTitle);
  };

  return (
    <section className="max-w-8xl mx-auto 2xl:container flex flex-col-reverse md:flex-row items-center justify-between px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]">
      <div className="w-full md:w-2/5">
        <h2 className="text-mobileheading md:text-heading3 xl:text-heading2 font-bold mb-4 text-center md:text-start">What We Provide</h2>
        <div className="border-t-8 mx-auto md:mx-0 border-yellow-400 w-[227px] mb-8"></div>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="border rounded-lg p-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => handleSelect(section.title)}
              >
                <div>
                <span className="font-bold text-mobilepara md:text-para">{section.title}</span>
                {section.tag && (
                  <span className={`${section.tagColor} text-mobilepara font-bold px-2 py-1 rounded ml-2`}>
                    {section.tag}
                  </span>
                )}
                </div>
                <span>{selected === section.title ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              {selected === section.title && (
                <p className="mt-4 text-gray-600">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-full h-full">
          <Image
            src={WhyUsImage}
            alt="Illustration"
            height={5000}
            width={5000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
