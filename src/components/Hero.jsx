import { Button } from '@heroui/react';
import React from 'react';

function Hero() {
  return (
    <section className="bg-[url(/hero.svg)] bg-no-repeat bg-cover shadow-4xl ">
      <div className="w-full max-w-[1440px] mx-auto px-3 md:px-10  lg:px-20 xl:px-24 py-5 h-[408px] md:h-[573px]  flex flex-col justify-center space-y-5  items-center md:items-start">
        <h4 className="text-[#0FF1F6] text-lg lg:text-2xl text-center md:text-left">
          AI SDRs (aiDRs)
        </h4>
        <h2 className="font-bold leading-tight text-3xl md:text-4xl xl:text-5xl max-w-[300px] text-center md:text-left">
          More leads, less people.
        </h2>
        <p className="text-sm md:text-lg max-w-[450px] text-center md:text-left">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>

        <Button
          className="rounded-2xl text-black bg-[#0FF1F6] hover:bg-[#0FF1F6]/80 px-2.5 md:px-3 py-1.5 md:py-2  "
          size=""
        >
          Sign Up for the Beta
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
