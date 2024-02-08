import React from 'react'
import FormCard from './Card/FormCard';
import ScrollToTop from './Card/ScrollToTop';

function Contact() {

    return (
        <>
        <ScrollToTop/>
        <div className='pt-[137px]'></div>
        <div className='bg-white max-w-screen-2xl mx-auto'>
            <div className=" w-full h-screen md:h-[calc(100svh-274px)] bg-[url('../images/image1.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-0">
                {/* <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                    <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Wedding - Pre-Wedding - Events</h1>
                </div> */}
            </div>
        </div>
        
        <div className=" bg-white">   
            <div className="container m-auto max-w-5xl px-6 pt-12 ">
                <div className='text-center'>

                    <div className='flex justify-center'>
                        <h1 className="text-gray-500 text-2xl px-4 py-2 text-center font-semibold leading-normal border-2 border-gray-300 mb-2">Contact Us</h1>
                    </div>
                    
                    <hr className='w-[10%] mx-auto my-2 bg-[#efa0a000] border-gray-300' style={{borderStyle: 'dotted none none', borderWidth:'10px'}}/>

                    <p className=' text-xl font-semibold text-gray-500 leading-relaxed py-6'>
                        "Want to make us a part of your celebration ?"
                    </p> 
                    <hr className=' w-2/3 mx-auto border-t-2'/>
                    
                    <div className='py-6'>
                        <a href="tel:+917696331130" className='py-1 text-xl font-semibold text-gray-500'>+91-76963-31130</a>
                        <p className='py-1 text-base text-gray-400 tracking-wide'>Questions? Call Us!</p>
                    </div>
                    <hr className=' w-2/3 mx-auto border-t-2'/>
                    
                    <div className='py-6'>
                        <a href='mailto:weddingfilmographer@gmail.com' className='py-1 text-xl font-semibold text-gray-500'>weddingfilmographer@gmail.com</a>
                        <p className='py-1 text-base text-gray-400 tracking-wide'>Drop us a line!</p>
                    </div>
                    <hr className=' w-2/3 mx-auto border-t-2'/>

                    <div className='py-6'>
                        <p className='py-1 text-xl font-semibold text-gray-500'>Mon to Sat - 11:00 to 20:00</p>
                        <p className='py-1 text-base text-gray-400 tracking-wide'>Our common business hours</p>
                    </div>

                </div>
            </div>
        </div> 
        
        <div className=" bg-white py-16">   
            <div className="container m-auto max-w-5xl px-6 pt-12 ">
                <div className=''>

                    <div className='flex justify-center'>
                        <h1 className="text-gray-500 text-2xl px-4 py-2 text-center font-semibold leading-normal border-2 border-gray-300 mb-2">Enquiry Form</h1>
                    </div>
                    
                    <hr className='w-[10%] mx-auto my-2 bg-[#efa0a000] border-gray-300' style={{borderStyle: 'dotted none none', borderWidth:'10px'}}/>

                    <p className=' text-xl font-semibold text-gray-400 leading-relaxed py-6 text-center'>
                        Will be GLAD to be a part of your SPECIAL DAY!!
                    </p>
                    <FormCard/>

                </div>
            </div>
        </div>
        
        </>
    );
}

export default Contact