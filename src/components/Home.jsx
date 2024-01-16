import React from 'react'
import { Link } from 'react-router-dom';
import ImageCarousel from './Card/ImageCarousel';

function Home() {
    return (
        <>
        <div className=''>
            <div className='relative top-[-172.2px]'>
                < ImageCarousel />  
            </div>
        </div>

        

        <div className='pb-32 max-w-5xl px-6 mx-auto'>

            <h1 className=' font-medium text-center text-gray-400'>
            We are wanderers, explorers of light, driven by a strong desire to capture fleeting moments onto frames and stitching them together to create a visual symphony which is both organic and timeless. We do not follow trends and have our own unique non-linear approach of presenting stories. Our wedding films are carefully crafted to blend traditional with modern, combining stunning visuals with creative storytelling . We are based in Delhi NCR but we travel all over India and abroad to capture weddings.
            </h1>

            <div className='grid grid-cols-2 gap-2 pt-8'>
                <img src="../images/image5.jpg" alt="" className='hover:cursor-pointer '/>
                <img src="../images/image3.jpg" alt="" className=''/>
                <img src="../images/image4.jpg" alt="" className=''/>
                <img src="../images/image5.jpg" alt="" className=''/>
                <img src="../images/image6.jpg" alt="" className=''/>
                <img src="../images/image4.jpg" alt="" className=''/>
            </div>

        </div>

        <div className=' bg-[url("/../images/image8.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-screen'>
            <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Photography Showcase</h1>
            </div>
        </div>

        <div className='pb-32 pt-16 max-w-5xl px-6 mx-auto'>
            <img src="../images/bride.png" alt="" className='w-40 mx-auto' />
            <h1 className='text-center font-medium text-2xl italic font-serif'>signature</h1>

            <div className='grid grid-cols-3 gap-4 pt-8'>
                <div>
                    <img src="../images/image7.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
                <div>
                    <img src="../images/image8.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
                <div>
                    <img src="../images/image9.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
                <div>
                    <img src="../images/image8.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
                <div>
                    <img src="../images/image9.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
                <div>
                    <img src="../images/image7.jpg" alt="" className=''/>
                    <h1 className='text-center py-2 uppercase'>Alia & Ranbir</h1>
                </div>
            </div>

            <hr className='mt-10 border-2 border-gray-500'/>
        </div>

        <div className=' bg-[url("/../images/image10.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-screen'>
            <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Instagram Posts</h1>
            </div>
        </div>
        
        <div className='py-32 max-w-5xl px-6 mx-auto'>
            <h1 className='text-center font-bold text-4xl font-sans uppercase tracking-wider text-gray-500'>Instagram</h1>
            <div className='grid grid-cols-3 gap-1 pt-8'>
                <div>
                    <img src="../images/image9.jpg" alt="" className=''/>
                </div>
                <div>
                    <img src="../images/image8.jpg" alt="" className=''/>
                </div>
                <div>
                    <img src="../images/image9.jpg" alt="" className=''/>
                </div>
                <div>
                    <img src="../images/image8.jpg" alt="" className=''/>
                </div>
                <div>
                    <img src="../images/image9.jpg" alt="" className=''/>
                </div>
            </div>

            <hr className='mt-10 border-2 border-gray-500'/>

            <h1 className=' text-gray-600 font-bold font-serif text-2xl text-center pt-12 tracking-wider'>Thank You</h1>
        </div>
        </>
    );
}

export default Home