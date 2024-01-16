import React from 'react'

const questions = [
  {
    question: 'How do I book you?',
    answer: 'To book us for your wedding, you can fill out the contact form on our website or email us at'
  },
  {
    question: 'How many weddings do you cover in a year?',
    answer: 'We take up a limited number of weddings per year. We believe in quality over quantity. We want to give our best to each and every wedding we cover.'
  },
  {
    question: 'What is your style of photography?',
    answer: 'We are a team of photographers who love to capture candid moments and emotions. We believe in capturing the moments as they happen, without any interference. We also love to capture the details and decor of the wedding. We are always looking for the perfect light and the perfect frame to capture your love story.'
  },
  {
    question: 'What is your pricing?',
    answer: 'We have different packages for different requirements. We also have a team of photographers and cinematographers who can cover your wedding. We can also customize the packages according to your requirements. Please fill out the contact form on our website or email us at'
  },
  {
    question: 'Do you travel for weddings?',
    answer: 'Yes, we love to travel for weddings. We are based in Delhi but we have covered weddings all over India. We have also covered destination weddings in Thailand, Dubai, Oman, and Sri Lanka.'
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
    question: 'Do you provide albums?',
    answer: 'Yes, we provide albums. We have different options for albums. You can choose from a variety of options.'
  },
  {
    question: 'Do you provide videography services?',
    answer: 'Yes, we provide videography services. We have a team of cinematographers who can cover your wedding.'
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
    question: 'Do you provide wedding films?',
    answer: 'Yes, we provide wedding films. We have a team of cinematographers who can cover your wedding.'
  },
]

function Faq() {
  return (
    <>
    <div className='bg-[#9bb8cd4e] '>
        <div className=" w-full h-screen md:h-[85vh] bg-[url('../images/image4.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-[-172.2px]">
            <div className="inset-0 h-[85vh] flex items-center justify-center max-w-6xl  mx-auto px-6">
                <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Capturing Your Love Story Frame by Frame </h1>
            </div>
        </div>
    </div>

    
    <div className='bg-[#9bb8cd4e]'>
      <div className=' max-w-5xl grid md:grid-cols-3 grid-cols-2 mx-auto px-6 gap-6'>
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

    <div className="bg-[#9bb8cd4e] inset-0 justify-center sm:items-center md:py-12 py-6">   
      <div className="max-w-5xl mx-auto px-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight drop-shadow-md">
                Frequently Asked Questions
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Here are some of the frequently asked questions. If you have any other questions, please feel free to contact us.
              </p>
        </div>
      </div>
    </div>

    <div className="bg-[#9bb8cd4e] flex justify-center items-center pt-0 md:pb-32 pb-16">   
      <div className="max-w-5xl mx-auto px-6 rounded-lg">
        <div className="p-6 bg-gray-100 rounded-lg flex items-center shadow-md">
          <div className="mx-4 text-lg leading-7 font-semibold w-full text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
              {questions.map((question, index) => (
                <div key={index}>
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