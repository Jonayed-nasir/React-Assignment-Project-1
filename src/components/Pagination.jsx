import { Button } from '@heroui/react';


import React, { useState } from 'react';

function Pagination() {
  const slides = [
    {
      id: 1,
      title:
        'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      name: 'John Doe',
      company: 'Chief Strategy Officer @ Company',
      color: '#0FF1F6',
    },
    {
      id: 2,
      title:
        'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      name: 'Nasir',
      company: 'Chief Strategy Officer @ Company',
      color: '#0FF1F6',
    },
    {
      id: 3,
      title:
        'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      name: 'Monir',
      company: 'Chief Strategy Officer @ Company',
      color: '#0FF1F6',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlides = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlides = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const { title, name, company } = slides[currentIndex];

  return (
    <section className="flex items-center justify-between mt-12 md:mt-30">
      <div>
        <Button
          size=""
          className="rounded-sm bg-[#96ACAF33] px-1.5
        py-0.5 text-[#0FF1F6]"
          onClick={prevSlides}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
      </div>

      <div className="space-y-4 md:space-y-6 flex items-center justify-center flex-col">
        <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#183A40]">
          <img className="w-8" src="/“.svg" alt="" />
        </div>

        <h1 className="md:font-bold text-lg  md:text-2xl text-center max-w-[800px] ">
          {title}
        </h1>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-lg text-[#0FF1F6] font-semibold">{name}</h3>
          <p className="text-sm md:text-base">{company}</p>
        </div>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#0FF1F6]' : 'bg-[#394648]'
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div>
        <Button
          size=""
          className="rounded-sm bg-[#96ACAF33] px-1.5
        py-0.5 text-[#0FF1F6]"
          onClick={nextSlides}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}

export default Pagination;
