import React from 'react'

function Partners() {
  return (
    <section className='bg-[#07292F]'>
      <div className='w-full max-w-[1440px] mx-auto px-3 md:px-10 lg:px-20 xl:px-24 py-5  lg:py-12 flex flex-col justify-center items-center space-y-2'>
        <h3 className='text-lg text-[#0FF1F6]'>our trusted partners</h3>
        <div className='grid grid-cols-2 md:grid-cols-5  md:gap-5 select-none justify-items-center'>
            <img className='w-24 md:w-32' src="/BackHub.svg" alt="BackHub" />
            <img className='w-24 md:w-32'  src="/CableLabs.png" alt="" />
            <img className='w-24 md:w-32'  src="/DBS.png" alt="" />
            <img className='w-24 md:w-32'  src="/EasyEuro.png" alt="" />
            <img className='w-24 md:w-32 col-span-2 md:col-span-1'  src="/AMD.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Partners
