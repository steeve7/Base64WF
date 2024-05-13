import Link from 'next/link'
import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaHouse, FaVoicemail, FaArrowPointer, FaPhone } from "react-icons/fa6";
import {MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <section className="bg-red-500">
      <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-6 justify-around py-10 px-10 md:px-0">
        <div className="text-white space-y-2 mt-10 ">
          <h1 className="text-[20px] font-bold mb-6">Our services</h1>
          <p>Air Freight</p>
          <p>Sea Freight</p>
          <p>Customs Brokerage</p>
          <p>Land Haulage</p>
          <p>Ships Spares In Transit</p>
          <p>Events & Exhibitions</p>
        </div>

        <div className="text-white space-y-2">
          <div>
            <h1 className="text-[20px] font-bold mb-8">Contact Us</h1>

            <div className="flex items-center gap-2">
              <FaHouse className='md:text-[15px] text-[40px]'/>
              <p>
                B64WF, 4625 W. Lake Park Blvd. Salt Lake City, Utah 84120 United
                States
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <div className="flex flex-col">
              <Link href="">info@b64wf.com</Link>
            </div>
          </div>
        </div>

        <div className="text-white">
          <a
            href="#home"
            className="text-[20px] items-center cursor-pointer md:flex hidden mt-10"
          >
            Back to the top <FaArrowCircleUp className='ml-2'/>
          </a>
        </div>
      </div>
      <div className="text-center text-white pb-5">
        <h1 className="text-[15px]">COPYRIGHT @ 2024 B64FW</h1>
      </div>
    </section>
  );
}

export default Footer 