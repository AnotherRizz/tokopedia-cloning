import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/9/2/b00f6be6-3584-43d2-b1cd-8a6cc9417744.jpg.webp?ect=4g",
      caption: "Slide 1",
    },
    {
      id: 2,
      image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/9/4/c49b6021-ec18-4ca8-9fe6-bcfc96457572.jpg.webp?ect=4g",
      caption: "Slide 2",
    },
    {
      id: 3,
      image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/27/d00dbb58-ecca-456f-97ac-8eca1f30aeb5.jpg.webp?ect=4g",
      caption: "Slide 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      className="relative w-full mx-auto mb-5 mt-44"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-lg relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <img src={slide.image} alt={slide.caption} className="w-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                {slide.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isHovered && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
          ><i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
          >
           <i class="fa-solid fa-arrow-right"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
