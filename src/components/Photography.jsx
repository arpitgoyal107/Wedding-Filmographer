import React from 'react'
import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    url: '../images/image7.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 2,
    url: '../images/image8.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 3,
    url: '../images/image9.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 4,
    url: '../images/image7.jpg',
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
    url: '../images/image7.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 8,
    url: '../images/image8.jpg',
    name: 'Alia & Ranbir',
  },
  {
    id: 9,
    url: '../images/image9.jpg',
    name: 'Alia & Ranbir',
  },
]

function Gallery() {

  return (
    <>
    <div className='bg-[#efa0a015] '>
      <div className=" w-full h-screen md:h-[85vh] bg-[url('../images/image2.jpg')] bg-fixed bg-center bg-no-repeat bg-cover relative top-[-172.2px]">
          <div className="inset-0 h-[85vh] flex items-center justify-center max-w-6xl  mx-auto px-6">
              <h1 className="text-white md:text-2xl text-xl bg-[#00000027] p-2 rounded-md text-center font-bold leading-normal border-2 ">Documenting Emotions Through Art</h1>
          </div>
      </div>
    
      <div className='pb-32 mt-[-50px] max-w-5xl px-6 mx-auto '>
          <img src="../images/bride.png" alt="" className='w-40 mx-auto' />
          <h1 className='text-center font-medium text-2xl italic font-serif'>signature</h1>
          {events.map(event => (
            <div key={event.id} className='grid grid-cols-3 gap-4 pt-8'>
              <Link to={`/photography/${event.name}`}>
                <img src={event.url} alt={event.name} />
                <p>{event.name}</p>
              </Link>
            </div>
          ))}
      </div>

      <div className='pb-32 mt-[-50px] max-w-5xl px-6 mx-auto '>
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
          <img src="../images/bride.png" alt="" className='w-40 mx-auto' />

          <div>
            <h1 className='text-center font-medium text-2xl italic font-serif'>intimates</h1>
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
            </div>

            <hr className='mt-10 border-2 border-gray-500'/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Gallery