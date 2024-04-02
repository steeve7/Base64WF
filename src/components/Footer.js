import Link from 'next/link'
import React from 'react'
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
            <div className="flex items-center gap-2 mb-3">
              <FaPhone />
              <p>+1 (608) 618-2830</p>
            </div>

            <div className="flex items-center gap-2">
              <FaHouse />
              <p>Downtown, Salt Lake City, UT, United States</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <MdEmail />
            <div className="flex flex-col">
              <Link href="">info@b64wf.com</Link>
            </div>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-[20px] font-bold mb-8">Search</h1>
          <input type="text" className="p-4" />
          <a
            href="#home"
            className="text-[20px] items-center cursor-pointer md:flex hidden mt-10"
          >
            Back to the top <FaArrowPointer />
          </a>
        </div>
      </div>
      <div className="text-center text-white">
        <h1 className="text-[15px]">COPYRIGHT @ 2024 B64FW</h1>
      </div>
    </section>
  );
}

export default Footer 