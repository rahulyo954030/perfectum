import Section from '@/_components/common/section';
import React from 'react';

const Careers = () => {
    return (
        <Section classes="flex flex-col lg:py-[32px] lg:px-[100px] gap-5" mainClasses="bg-secondary1">
            <div className="flex flex-col md:flex-row w-full gap-8">
                {/* Left side: Title */}
                <div className="flex-1 w-1/3 flex flex-col items-center lg:tems-start ">
                    <span className="bg-secondary2 text-primary2 py-4 px-10 rounded-full text-sm font-bold font-medium mb-4">Career</span>
                    <h2 className="text-5xl text-gray-800 font-bold leading-tight">Join Us!</h2>
                    <h2 className="text-5xl text-gray-800 font-bold leading-tight">Let&apos;s Work <br/>Together</h2>
                </div>

                {/* Right side: Job Listings */}
                <div className="flex-2 w-full lg:w-2/3">
                    <div className='lg:ml-20'>
                        <div className="flex flex-col gap-6">
                            {/* Job 1 */}
                            <div className="bg-white p-8 py-10 border border-gray-300 rounded-2xl">
                                <h3 className="text-xl font-bold mb-2">Web Designer & Developer</h3>
                                <p className="text-gray-500 text-sm mb-2">
                                    San Francisco, CA  
                                    <span className="mx-4">|</span>  
                                    <span className="text-purple-600">Full Time</span>
                                </p>
                                <p className="text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <button className="bg-transparent text-xs font-bold text-primary border border-gray-500 py-4 px-8 rounded-full hover:bg-black hover:text-white transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            {/* Job 2 */}
                            <div className="bg-white p-8 py-10 border border-gray-300 rounded-2xl">
                                <h3 className="text-xl font-bold mb-2">Product Development Manager</h3>
                                <p className="text-gray-500 text-sm mb-2">
                                    San Francisco, CA  
                                    <span className="mx-4">|</span>  
                                    <span className="text-purple-600">Full Time</span>
                                </p>
                                <p className="text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <button className="bg-transparent text-xs font-bold text-primary border border-gray-500 py-4 px-8 rounded-full hover:bg-black hover:text-white transition-colors">
                                    Apply Now
                                </button>
                            </div>

                            {/* Job 3 */}
                            <div className="bg-white p-8 py-10 border border-gray-300 rounded-2xl">
                                <h3 className="text-xl font-bold mb-2">Head of Finance</h3>
                                <p className="text-gray-500 text-sm mb-2">
                                    San Francisco, CA  
                                    <span className="mx-4">|</span>  
                                    <span className="text-purple-600">Full Time</span>
                                </p>
                                <p className="text-gray-600 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <button className="bg-transparent text-xs font-bold border border-gray-500 py-4 px-8 rounded-full hover:bg-black hover:text-white transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {/* Special Apply Section */}
                        <div className="w-full bg-[#806DEA] text-white py-10 p-8 border border-gray-300 rounded-2xl mt-6 text-center">
                            <h3 className="text-xl font-bold mb-4">Can&apos;t find the position you are looking for?</h3>
                            <p className="mb-6 mx-10">Don&apos;t worry, get in touch with us anyway, we are always looking for great team members to join us.</p>
                            <button className="bg-white text-xs text-[#806DEA] font-bold border border-white py-4 px-8 rounded-full hover:bg-black hover:text-white hover:border-gray-500 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Careers;
