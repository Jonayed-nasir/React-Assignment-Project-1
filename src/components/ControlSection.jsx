
import React from 'react'

function ControlSection() {
    const controls = [
        {
            image: "/Control.svg",
            title: "You’re in Control",
            description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            image: "/Scalable.svg",
            title: "Infinitely Scalable",
            description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            image: "/Flexible.svg",
            title: "Incredibly Flexible",
            description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        },
    ]

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 md:py-12'>
      {
        controls.map((item, index) => (
            <div key={index} className='space-y-3'>
                <img className='w-full max-w-15' src={item.image} alt={item.title} />
                <h3 className='text-lg font-semibold leading-tight'>{item.title}</h3>
                <p className='text-sm max-w-[310px]'>{item.description}</p>
            </div>
        ))
      }
    </section>
  )
}

export default ControlSection
