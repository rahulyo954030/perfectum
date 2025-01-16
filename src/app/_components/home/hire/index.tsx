"use client";
import {
  italy,
  italyLogo,
  portugal,
  portugalLogo,
  SALogo,
  southafrica,
} from "@/_assets/Home";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import "./hire.css";

const data = [
  {
    id: 1,
    image: italy,
    logo: italyLogo,
    title: "Italy",
    tags: ["EOR", "Contractor"],
  },
  {
    id: 2,
    image: portugal,
    logo: portugalLogo,
    title: "Portugal",
    tags: ["EOR", "Contractor"],
  },
  {
    id: 3,
    image: southafrica,
    logo: SALogo,
    title: "South Africa",
    tags: ["EOR", "Contractor"],
  },
];

const Hire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (newIndex: number) => {
    const totalItems = data.length;
    if (newIndex < 0) newIndex = totalItems - 1;
    else if (newIndex >= totalItems) newIndex = 0;

    setCurrentIndex(newIndex);

    const newTransform = `translateX(-${newIndex * 100}%)`;
    if (carouselRef.current) {
      carouselRef.current.style.transform = newTransform;
    }
  };

  const handlePrev = () => {
    moveCarousel(currentIndex - 1);
  };

  const handleNext = () => {
    moveCarousel(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(currentIndex + 1);
    }, 3000); // Change slides every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, data.length]);

  return (
    <div className="max-w-8xl mx-auto 2xl:container flex flex-col text-center gap-5 px-[15px] py-[25px] lg:px-[100px] lg:py-[32px]">
      <p className="w-full md:w-6/12 text-mobileheading lg:text-heading2 font-bold mx-auto">
        <span className="text-primary1">Hire</span> From Anywhere Around The
        World
      </p>
      <p className="w-full md:w-3/5 mx-auto mb-[20px] text-secondary4">
        Tap into the most extensive coverage on the market and hire anywhere in
        five minutes using our 100+ Deel entities and visa support. Yep, your
        talent pool just got infinite.
      </p>

      <div className="3D-Carousel">
        <div className="w-full overflow-hidden relative" style={{ paddingBottom: '10px' }}>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((item, index) => (
              <div
                key={item.id}
                className="min-w-full flex flex-col items-center p-4"
              >
                <div
                  className="carousel__slider__item relative w-full h-full"
                  style={{
                    transform: `rotateY(${
                      index === currentIndex
                        ? "0"
                        : index < currentIndex
                        ? "40deg"
                        : "-40deg"
                    })`,
                  }}
                >
                  <div className="absolute top-5 left-5 z-10 text-white font-bold">
                    {item.title}
                  </div>
                  <Image
                    src={item.image}
                    alt="country"
                    quality={100}
                    className="w-full h-full object-cover object-center"
                    width={5000}
                    height={5000}
                  />
                  <div className="flex flex-row gap-2 absolute bottom-4 left-4 z-10 text-white">
                    {item.tags.map((tag, idx) => (
                      <p
                        key={idx}
                        className="border rounded-full p-1 px-2 text-[10px]"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <div className="absolute -bottom-5 bg-white p-2 rounded-full border-2 border-black shadow right-2 z-10 text-white font-bold w-12 h-12">
                    <Image
                      src={item.logo}
                      alt="itemLogo"
                      height={5000}
                      width={5000}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            onClick={() => moveCarousel(currentIndex - 1)}
          >
            ←
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            onClick={() => moveCarousel(currentIndex + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;

