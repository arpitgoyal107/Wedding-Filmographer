import React from 'react'
import ScrollToTop from './Card/ScrollToTop'

const questions = [
  {
    question: 'How do I book you?',
    answer: 'To book us for your wedding, you can fill out the contact form on our website or email us at weddingfilmographer@gmail.com. We will get back to you as soon as possible.'
  },
  {
    question: 'How many weddings do you cover in a year?',
    answer: 'We take up a limited number of weddings per year. We believe in quality over quantity. We want to give our best to each and every wedding we cover.'
  },
  {
    imgsrc:'../images/decor/3.png',
    imgproperty: 'h-52 mx-auto',
  },
  {
    question: 'What is your style of photography?',
    answer: 'We are a team of photographers who love to capture candid moments and emotions. We believe in capturing the moments as they happen, without any interference. We also love to capture the details and decor of the wedding. We are always looking for the perfect light and the perfect frame to capture your love story.'
  },
  {
    question: 'What is your pricing?',
    answer: 'We have different packages for different requirements. We also have a team of photographers and cinematographers who can cover your wedding. We can also customize the packages according to your requirements. Please fill out the contact form on our website or email us at weddingfilmographer@gmail.com'
  },
  {
    question: 'Do you travel for weddings?',
    answer: 'Yes, we love to travel for weddings. We are based in Delhi and Haryana but we have covered weddings all over India. We have covered weddings in Goa, Rajasthan, Punjab, Himachal Pradesh, Madhya Pradesh, Maharashtra, Gujarat, and many more.'
  },
  {
    question: 'How many images do you deliver?',
    answer: 'We deliver around 50-100 images per function. We believe in quality over quantity.'
  },
  {
    question: 'How long does it take to deliver the images?',
    answer: 'We deliver the images within 3-4 weeks after the wedding.'
  },
  {
    question: 'Do you provide videography services?',
    answer: 'Yes, we provide videography services. We have a team of cinematographers who can cover your wedding.'
  },
  {
    imgsrc:'../images/decor/bride.png',
    imgproperty: 'h-52 mx-auto',
  },
  {
    question: 'Do you provide albums?',
    answer: 'Yes, we provide albums. We have different options for albums. You can choose from a variety of options.'
  },
  {
    question: 'Do you provide drone services?',
    answer: 'Yes, we provide drone services. We have a team of drone pilots who can cover your wedding.'
  },
  {
    question: 'Do you provide photobooth services?',
    answer: 'Yes, we provide photobooth services. We have a team of photographers who can cover your wedding.'
  },
  {
    question: 'Do you provide pre-wedding shoots?',
    answer: 'Yes, we provide pre-wedding shoots. We have a team of photographers who can cover your wedding.'
  },
  {
    imgsrc:'../images/decor/2.png',
    imgproperty: 'h-52 mx-auto',
  },
  {
    question: 'Do you provide wedding films?',
    answer: 'Yes, we provide wedding films. We have a team of cinematographers who can cover your wedding.'
  },
]

function Faq() {
  return (
    <>
    <ScrollToTop/>
    <div className='pt-[137px]'></div>
    <div className='bg-white max-w-screen-2xl mx-auto'>
        <div className=" w-full h-screen md:h-[calc(100svh-274px)] bg-[url('../images/image4.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-0">
            {/* <div className="inset-0 h-[100vh] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Capturing Your Love Story Frame by Frame</h1>
            </div> */}
        </div>
    </div>

    <div className='bg-white py-16'>
      <div className=' max-w-3xl grid md:grid-cols-3 grid-cols-2 mx-auto px-6 gap-6'>
        <div className=' aspect-square overflow-hidden'> 
          <img src="../images/image7.jpg" alt=""/>
        </div>
        <div className=' aspect-square overflow-hidden'> 
          <img src="../images/image8.jpg" alt=""/>
        </div>
        <div className=' aspect-square overflow-hidden'> 
          <img src="../images/image9.jpg" alt=""/>
        </div>
      </div>
    </div>

    <div className="bg-white inset-0 justify-center sm:items-center md:py-12 py-6">   
      <div className="max-w-7xl mx-auto px-6">
          <div className="p-6 bg-[#FFF8E3] rounded-sm shadow-md flex justify-center">
            <img src="../images/decor/faq.svg" alt="" className='flex md:h-60 sm:h-44 h-36' />
            <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-800 font-extrabold tracking-tight drop-shadow-md flex items-center px-6">
              Frequently Asked Questions
            </h1>
          </div>
        
          <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2 pl-3">
            Here are some of the frequently asked questions. If you have any other questions, please feel free to contact us.
          </p>
      </div>
    </div>

    <div className="bg-white flex justify-center items-center pt-8 md:pb-32 pb-16">   
      <div className="max-w-7xl mx-auto px-6 rounded-lg">
        <div className="p-6 flex items-center">
          <div className="mx-4 text-lg leading-7 font-semibold w-full text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
              {questions.map((question, index) => (
                <div key={index}>
                  {/* <img src="../images/decor/4.png" alt="" className='h-40 mx-auto' /> */}
                  <dt><img src={question.imgsrc}  alt="" className={question.imgproperty} /></dt>
                  <dt className="text-gray-900 drop-shadow-md font-bold">{question.question}</dt>
                  <dd className="text-gray-600 text-justify italic font-normal leading-relaxed">{question.answer}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq