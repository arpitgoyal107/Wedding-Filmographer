import React from 'react'
import FormCard from './Card/FormCard';

function Contact() {

    return (
        <>
        <div className='bg-[#efa0a015]'>
            <div className=" w-full h-screen md:h-[85vh] bg-[url('../images/image1.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-[-172.2px]">
                <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                    <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Wedding - Pre-Wedding - Events</h1>
                </div>
            </div>
        </div>
        
        <div className=" bg-[#efa0a015]">   
            <div className="container m-auto max-w-5xl px-6 ">
                <div className='text-center'>
                    <p className=' text-xl font-medium text-gray-800 leading-relaxed'>"Want to make us a part of your celebration ?"</p> 
                    <hr className='w-[10%] mx-auto my-2 bg-[#efa0a000] border-gray-300' style={{borderStyle: 'dotted none none', borderWidth:'10px'}}/>
                    <p className=' italic leading-relaxed text-lg text-justify'>Fill the form below with your details and we will get back to you as soon as we can . We take up very limited weddings per year so please provide as much details as you can like - dates, venues, ceremonies, wedding theme and a few lines about your story.</p>
                </div>
            </div>
        </div>

        <div className=" flex justify-center pt-6 pb-16 md:pt-24 md:pb-32 bg-[#efa0a015]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 bg-[#112330]  sm:rounded-lg border-2 border-gray-800 self-center">
                            <h1 className="text-3xl sm:text-4xl text-gray-300 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Rohtak, Haryana, 124001 
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 7696331130
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    weddingfilmographer@gmail.com
                                </div>
                            </div>

                            <div className=' mt-4 w-full' >
                                <div className='bg-white rounded-lg '>
                                    <div className='flex bg-[#efa0a015] rounded-lg border-2 border-gray-400 justify-center'>
                                        <img src="../images/bride.png" alt="logo" className=' w-60 ' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FormCard/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact