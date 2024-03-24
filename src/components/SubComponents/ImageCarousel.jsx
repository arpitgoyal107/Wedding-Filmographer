import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const delay = 4000; // Change image every 4 seconds (adjust as needed)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, delay);

    return () => clearInterval(interval);
  }, [delay, images.length]);

  return (
    <>
      <div className=" h-full overflow-hidden relative mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`Carousel Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
