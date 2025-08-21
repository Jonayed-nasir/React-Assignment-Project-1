import React from 'react';
import { Button } from '@heroui/react';
function Started() {
  return (
    <section className="py-14 md:py-16 mt-12 md:mt-16">
      <div className="space-y-4 md:space-y-6 flex flex-col justify-center items-center">
        <h4 className='font-semibold text-[#0FF1F6] text-lg text-center'>GET STARTED</h4>
        <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Embrace the new era of outbound.</h3>
        <p className='text-base max-w-[600px] text-center'>
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
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

export default Started;
