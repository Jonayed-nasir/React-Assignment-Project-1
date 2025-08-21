import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#07292F]'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4  px-3 md:px-10 lg:px-20 xl:px-24 w-full max-w-[1440px] mx-auto  py-5'>
        <img className='w-24' src="/Logo.png" alt="" />
        <p className='text-[#96ACAF]'>Copyright © {new Date().getFullYear()} Wizia. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
