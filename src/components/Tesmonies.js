import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'
import Image from 'next/image';
import Transport from '../components/Assets/hero-banner.jpg'

function Tesmonies() {
   const testimonials = [
     {
       icon: <FaQuoteLeft />,
       desc: "“We are very happy dealing with B64WF because we always have a consistent point of contact which makes for effective daily communication. B64WF has the great ability to solve issues if and when they appear with a willingness to go above and beyond.”",
       title: "Justin, Medical Equipment",
     },
     {
       icon: <FaQuoteLeft />,
       desc: "“We have been doing business with B64WF for over one year and their deliveries are very well suited to our industry. They are usually made in a box truck or van to a location inside the hotel by professionally uniformed drivers.”",
       title: "Ken, Hospitality",
     },
     {
       icon: <FaQuoteLeft />,
       title: "Chuck, Logistics",
       desc: "“I would consider B64WF a core carrier of ours in the Mid-Atlantic region and based on their penchant for always putting the customer first and “can do” attitude, we have continually tried to find ways to grow our partnership with them.”",
     },
   ]; 
  return (
    <div className='flex flex-col justify-center bg-red-500 mt-20 text-white w-full'>
    <div>
        <Image src={Transport} alt='Images' />
    </div>
        <div className='flex flex-col md:flex-row justify-center mt-20 md:px-20 px-10 gap-10'>
            {testimonials.map((testi, i) => (
                <div key={i} className=''> 
                    <div className='flex justify-center w-full'>
                       <p className='mb-3 border-black rounded-full p-3 hover:text-black text-white bg-black transition duration-700 ease-in-out hover:bg-white'>{testi.icon}</p> 
                    </div>
                     <div className='flex flex-col justify-center text-center mb-5'>
                        <p>{testi.title}</p>
                    </div>
                    <p className='text-center tracking-widest mb-10 w-full text-[15px]'>{testi.desc}</p>
                   
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tesmonies