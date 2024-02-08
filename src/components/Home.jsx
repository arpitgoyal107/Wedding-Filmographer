import React from 'react'
import { Link } from 'react-router-dom';
import ImageCarousel from './Card/ImageCarousel';
import ScrollToTop from './Card/ScrollToTop';

const events = [
    {
      id: 1,
      url: '../images/image7.jpg',
      name: 'Alia & Ranbir',
    },
    {
      id: 2,
      url: '../images/image1.jpg',
      name: 'Alia & Ranbir',
    },
    {
      id: 4,
      url: '../images/image3.jpg',
      name: 'Alia & Ranbir',
    },
    {
      id: 5,
      url: '../images/image9.jpg',
      name: 'Alia & Ranbir',
    },
    {
      id: 6,
      url: '../images/image8.jpg',
      name: 'Alia & Ranbir',
    },
    {
      id: 3,
      url: '../images/image2.jpg',
      name: 'Alia & Ranbir',
    },
    ]
function Home() {
    return (
        <>
        <ScrollToTop />
        <div className='pt-[137px]'></div>
        < ImageCarousel />  

        <div className='py-32 max-w-7xl px-6 mx-auto'>

            <h1 className=' font-medium text-justify text-gray-400 mb-16'>
            We are wanderers, explorers of light, driven by a strong desire to capture fleeting moments onto frames and stitching them together to create a visual symphony which is both organic and timeless. We do not follow trends and have our own unique non-linear approach of presenting stories. Our wedding films are carefully crafted to blend traditional with modern, combining stunning visuals with creative storytelling . We are based in Delhi NCR but we travel all over India and abroad to capture weddings.
            </h1>

            <div className=' columns-2 gap-4'>
                <div className='mb-4 relative'>
                    <img src="../images/image1.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                </div>
                <div className='mb-4 relative'>
                    <img src="../images/image2.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                </div>
                <div className='mb-4 relative'>  
                    <img src="../images/image3.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                </div>
                <div className='mb-4 relative'>
                    <img src="../images/image4.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                </div>
                 <div className='mb-4 relative'>
                    <img src="../images/image5.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                 </div>
                <div className='mb-4 relative'>
                    <img src="../images/image6.jpg" alt="" className='hover:cursor-pointer '/>
                    <div className='absolute inset-0 bottom-0 transition duration-200 ease-in-out hover:bg-black opacity-50'></div>
                    <img src="../images/decor/playbutton.png" alt="" className=' h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute hover:cursor-pointer ' />
                </div>
            </div>

        </div>

        <div className=' bg-[url("/../images/image8.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-screen'>
            <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Photography Showcase</h1>
            </div>
        </div>

        <div className='py-24 max-w-7xl px-6 mx-auto'>
            <img src="../images/decor/bride.png" alt="" className='w-40 mx-auto' />
            <h1 className='text-center font-medium text-2xl italic font-serif mb-8'>Our Hearts</h1>

            <div className=' columns-3 gap-6'>
                {events.map(event => (
                <div key={event.id} className='mb-6 relative overflow-hidden justify-normal'>
                    <Link to={`/photography/${event.name}`}>
                    <img src={event.url} alt={event.name} className=' transition-transform duration-300 hover:scale-110  ' />

                    <div className='absolute inset-x-0 bottom-0 h-16 bg-black opacity-50'></div>
                    <div className='absolute inset-x-0 bottom-0 h-16 flex items-center justify-center text-white'>
                    <p className=' text-center'>{event.name}</p>
                    </div>
                    
                    </Link>
                </div>
                ))}
            </div>

            <div className='flex my-16 mx-auto w-2/3'>
                <hr className=' border-2 border-gray-300 w-1/2'/>
                <img src="../images/decor/heart.png" alt="" className='h-10 flex text-center -mt-5 '/>
                <hr className=' border-2 border-gray-300 w-1/2'/>
            </div>
        </div>

        <div className=' bg-[url("/../images/image10.jpg")] bg-fixed bg-center bg-no-repeat bg-cover h-screen'>
            <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Instagram Posts</h1>
            </div>
        </div>
        
        <div className='py-24 max-w-7xl px-6 mx-auto'>
            <h1 className='text-center font-bold text-4xl font-sans uppercase tracking-wider text-gray-500 mb-8'>Instagram</h1>
            <div className='grid grid-cols-3 gap-1'>
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

            <div className='flex my-16 mx-auto w-2/3'>
                <hr className=' border-2 border-gray-300 w-1/2'/>
                <img src="../images/decor/heart.png" alt="" className='h-10 flex text-center -mt-5 '/>
                <hr className=' border-2 border-gray-300 w-1/2'/>
            </div>
        </div>
        </>
    );
}

export default Home