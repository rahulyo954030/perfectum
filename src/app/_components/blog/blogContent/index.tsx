'use client'
import { Blog1, Blog2 } from '@/_assets/Blog';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const formatDate = (dateString: string) => {
    const options: any = { day: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

const blogPosts = [
    {
        date: '2024-03-01',
        title: 'AI Integrated tracking tool to enhance your team productivity',
        author: 'Mark Tuchol',
        readTime: '7 min read',
        tags: ['Tools'],
        imageUrl: Blog1,
        content: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work."
    },
    {
        date: '2024-01-02',
        title: 'We are implementing AI and Technology',
        author: 'Harry Dand',
        readTime: '4 min read',
        tags: ['AI'],
        imageUrl: Blog2,
        content: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work."
    },
];

const blogTopics = [
    { id: 1, item: "Company" },
    { id: 2, item: "Design" },
    { id: 3, item: "Technology" },
    { id: 4, item: "Crypto" },
    { id: 5, item: "Artificial Intelligence" },
    { id: 6, item: "Work" },
]

const guide = [
    { id: 1, item: "Guidelines" },
    { id: 1, item: "Mentorship" },
    { id: 1, item: "Tutorial" },
    { id: 1, item: "Training" },
    { id: 1, item: "Career" },
    { id: 1, item: "Self Care" },
]

const tags = ["All", "Web3", "AI", "Tools", "Technology"]

export default function BlogPost() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="max-w-8xl mx-auto 2xl:container flex flex-col lg:flex-row px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]">
            <div className="hidden lg:block w-full lg:w-1/4">
                <h2 className="font-bold text-lg mb-4 text-primary2">Blog Topics</h2>
                <ul>
                    {blogTopics.map((item, i) => {
                        return (
                            <li key={`${i} topics`} className='cursor-pointer hover:text-primary2'>{item.item}</li>
                        )
                    })}
                </ul>
                <h2 className="font-bold text-lg mt-8 mb-4 text-primary2">Guide and Tools</h2>
                <ul>
                    {guide.map((item, i) => {
                        return (
                            <li className='cursor-pointer hover:text-primary2' key={`${i} guide`}>{item.item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='mb-4 flex lg:hidden flex-col items-center'>
                <div
                    className="flex justify-center items-center w-3/4 border rounded-b-full gap-3 py-2 px-4 border-black cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <p className='text-center'>Category</p>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className='flex flex-col items-start bg-primary1 p-4 my-4 rounded overflow-scroll'>
                        {tags.map((tag, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type='checkbox' id={tag} className="h-4 w-4" />
                                <label htmlFor={tag}>{tag}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full xl:w-3/4 flex flex-col gap-[50px]">
                <div className="flex rounded-full gap-10 overflow-hidden">
                    {tags.map((item, i) => (
                        <p
                            key={`${i} tags`}
                            className={`cursor-pointer h-max hover:bg-primary2 hover:text-white transition-all border duration-200 ease py-[6px] px-[15px] rounded-full ${item === 'All' ? 'bg-primary1 text-white border-primary1' : 'bg-white border-primary1 text-primary1'
                                }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
                {blogPosts.map((post, index) => (
                    <div key={index} className="flex gap-[20px] lg:gap-[60px] flex-col items-center lg:flex-row">
                        <div className='w-full xl:w-3/4 gap-[20px]'>
                            <div className="flex items-center">
                                <span className="text-sm text-primary2">{formatDate(post.date)}</span>
                            </div>
                            <Link href="#" className='flex flex-col gap-[10px]'>
                                <h2 className="font-bold text-mobileheading lg:text-heading3 mt-2 mb-[20px]">{post.title}</h2>
                                <p className="text-gray-600">{post.content}</p></Link>
                            <div className="flex items-center mt-2">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="border border-gray-200 text-gray-700 text-mobilepara px-2 py-1 rounded-full mr-2">
                                        {tag}
                                    </span>
                                ))}
                                <span className="ml-2 text-sm text-gray-500">• By {post.author}</span>
                                <span className="ml-2 text-sm text-primary2">• {post.readTime}</span>
                            </div>
                        </div>
                        <div className="w-4/5 xl:w-1/4">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={5000}
                                height={5000}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
