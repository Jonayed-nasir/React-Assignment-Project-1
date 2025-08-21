
import React from 'react';

function Inpact() {
  const inpact = [
    {
      parsen: '32%',
      tag: 'Improvement in Open Rates',
    },
    {
      parsen: '75%',
      tag: 'Improvement in Ramp Time',
    },
    {
      parsen: '35%',
      tag: 'Improvement in Meetings Booked',
    },
  ];
  return (
    <section className="bg-[url(/inpact.png)] bg-no-repeat bg-cover w-full h-[600px] md:h-[564px] flex flex-col justify-center rounded-2xl mt-16 md:mt-32">
      <div className="flex flex-col space-y-4 justify-center px-4 md:px-10">
        <div className=" py-5 md:py-12 space-y-5 ">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[600px] ">
            Allocate effort where your reps make an inpact.
          </h3>
          <h4 className="text-2xl md:text-3xl font-semibold text-[#0FF1F6]">
            Let us handle the rest.
          </h4>
          <p className="text-lg max-w-[550px]">
            Keep your reps “in the air” -- out in the field and on the phone
            where they can build relationships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[500px]">
            {inpact.map((item, index) => (
              <div key={index}>
                <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0FF1F6] leading-tight ">
                  {item.parsen}
                </span>
                <p className="text-sm max-w-[150px]">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inpact;
