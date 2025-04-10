"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
  imageSize?: number; // New prop for image size
}

const IconCarousel: React.FC<CarouselProps> = ({
  images,
  autoplay = true,
  autoplaySpeed = 3000,
  slidesToShow = 5,
  imageSize = 150, // Default to a larger size
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalImages = images.length;

  // Adjust slidesToShow based on screen size
  const [actualSlidesToShow, setActualSlidesToShow] = useState(slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setActualSlidesToShow(2);
        } else if (window.innerWidth < 768) {
          setActualSlidesToShow(3);
        } else {
          setActualSlidesToShow(slidesToShow);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (totalImages - actualSlidesToShow + 1)
    );
  }, [totalImages, actualSlidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - actualSlidesToShow : prevIndex - 1
    );
  }, [totalImages, actualSlidesToShow]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay && !isHovered) {
      interval = setInterval(nextSlide, autoplaySpeed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, isHovered, nextSlide, autoplaySpeed]);

  return (
    <div
      className="relative w-full py-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10 mr-2"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / actualSlidesToShow)
              }%)`,
              width: `${(totalImages / actualSlidesToShow) * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4"
                style={{ width: `${100 / totalImages}%` }}
              >
                {/* Increased container height from h-32 to h-44 */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-44 flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`Skill ${index + 1}`}
                    className="max-h-36 max-w-full object-contain transition-transform duration-300 hover:scale-110"
                    width={imageSize}
                    height={imageSize}
                    priority={index < actualSlidesToShow}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10 ml-2"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalImages - actualSlidesToShow + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default IconCarousel;
