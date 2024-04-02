'use client'
import React from 'react'
import cargo1 from "..//components/Assets/uscargoheader46.jpg";
import Image from 'next/image'

function Aboutpage() {
  const Abouts = [
    {
      image: cargo1,
      button: "Request a quick quote",
    },
  ]; 



  return (
    <div
      className="flex flex-col justify-between md:px-10 px-10 mt-14 items-center w-full"
      id="about"
    >
      <div className="flex flex-col justify-center text-center w-full mt-6 gap-4 md:px-10 font-normal">
        <p className="text-[25px] font-bold">
          Package Delivery ... Today, Tonight, Tomorrow
        </p>
        <p>
          Cargo Freight has been a provider of quality, cost effective, and
          reliable logistics company.
        </p>
        <p>
          B64WF has been committed to providing our customers with reliable,
          convenient commercial and residential delivery services. We help
          customers identify, design, and deliver flexible transportation
          logistics solutions encompassing parcel, lightweight LTL, pool
          distribution, dedicated, courier, and final mile delivery. Our
          personalized delivery services and solutions create sustainable,
          long-term value for our customers, business partners, and employees.
          B64WF is one of the top preferred regional ground and specialty
          transportation services partner that shippers think of first.
        </p>
      </div>
      <div className="flex flex-wrap justify-around md:w-[100%] mt-10 w-full">
        {Abouts.map((about, i) => (
          <div
            key={i}
            className="bg-[url('/uscargoheader46.jpg')] cursor-pointer rounded-lg w-full md:w-[50%] text-center bg-no-repeat bg-cover bg-center"
          >
            <div className="py-20">
              <a
                href="#requestaquickquote"
                className=" bg-red-500 text-white p-6 uppercase hover:text-black rounded-full w-1/2 text-center font-bold md:text-[15px] text-[10px]"
              >
                {about.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutpage