import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './Card/ScrollToTop'

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
    id: 3,
    url: '../images/image2.jpg',
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
    id: 7,
    url: '../images/image5.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 8,
    url: '../images/image4.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 9,
    url: '../images/image9.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 10,
    url: '../images/image3.jpg',
    name: 'Alia & Ranbir',
  },
]


function Gallery() {

  return (
    <>
    <ScrollToTop/>
    <div className='pt-[137px]'></div>
    <div className='bg-white max-w-screen-2xl mx-auto px-6 h-[calc(100svh-137px)] overflow-hidden'>
        <div className=" w-full  bg-[url('../images/image5.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-0">
            <div className=" h-[calc(100svh-137px)] flex items-center justify-center max-w-5xl  mx-auto px-6">
                <h1 className="text-white md:text-4xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">We are here to win your Hearts.</h1>
            </div>
        </div>
    </div>

    <div className=' max-w-5xl mx-auto my-24'>
      <div className=' columns-3'>
        {events.map(event => (
          <div key={event.id} className='mb-4 relative overflow-hidden'>
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
    </div>

    </>
  )
}

export default Gallery