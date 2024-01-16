import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['../images/image4.jpg', '../images/image3.jpg', '../images/image5.jpg']; // Replace with your image URLs
  const delay = 4000; // Change image every 4 seconds (adjust as needed)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, delay);

    return () => clearInterval(interval);
  }, [delay, images.length]);

  return (
    <>
    <div className='relative lg:h-[105vh] md:h-[103vh] h-[102vh]'>
      <div className="h-screen relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${index === currentImage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`Carousel Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className='w-full z-10 absolute bottom-0 '>
       <img src="../images/tagline.png" alt="" className='w-full'/>
      </div>
    </div>
    
    </>
  );
};

export default ImageCarousel;
