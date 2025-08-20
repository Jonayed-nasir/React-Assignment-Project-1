
import React from 'react';

function Prefered() {
  const tags = [
    {
      tag: 'Quick to ramp',
    },
    {
      tag: 'Easy to optimize',
    },
    {
      tag: 'Quick to scale up',
    },
    {
      tag: 'Works with all your existing tools',
    },
  ];

  return (
    <section className="bg-[url(/prefered.png)] bg-no-repeat bg-cover w-full h-[405px] md:h-[564px] mt-7 flex flex-col justify-center rounded-2xl">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="md:w-1/2"></div>

        <div className="lg:w-1/2 flex-1 lg:ml-54 py-5 md:py-12 space-y-5 ">
          <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl ">Train your aiDR on your...</h3>
          <h4 className='text-2xl md:text-3xl font-semibold text-[#0FF1F6]'>prefered email st|</h4>
          <p className='text-lg max-w-[350px]'>
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[550px]">
            {tags.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-sm text-[#14BCB2]"
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
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                {item.tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prefered;
