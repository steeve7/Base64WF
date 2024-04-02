import React from 'react'
import { FaBus } from "react-icons/fa";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { GiCargoShip } from "react-icons/gi";
import { BsTrainLightrailFrontFill } from "react-icons/bs";
import line from './line';

function About() {
    const lists = [
      {
        icons: <MdOutlineAirplanemodeActive />,
        title: "Air Freight",
        desc: "Even at long distances, your cargo is in the best hands: With the support of the most advanced systems, qualified and reliable employees are available.",
      },
      {
        icons: <GiCargoShip />,
        title: "Sea Freight",
        desc: "We proud to offer complete ocean logistical solutions driven by local decision making, accountability and expertise.",
      },
      {
        icons: <FaBus />,
        title: "Customs Brokerage",
        desc: "Need to clear customs fast? Our experienced technical experts can help your goods clear quickly and efficiently with our customs-clearance network.",
      },
    ];
  return (
    <section className="bg-white text-black mb-10 w-full mt-20" id="services">
      <div className="flex justify-center items-center text-center w-full">
        <div>
          <line />
          <h1 className="text-[20px] font-bold mb-4">Services</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mx-10 flex-nowrap mt-[-30px]">
        {lists.map((list, i) => (
          <div key={i} className="mt-20">
            <div className="flex justify-center items-center flex-col">
              <p className="mb-5 text-[50px] border-2 rounded-full p-4 border-orange-500 text-orange-500 hover:text-white hover:bg-red-500 transition duration-700 ease-in-out">
                {list.icons}
              </p>
              <h2 className="text-[12px] font-bold">{list.title}</h2>
              <p className="text-[14px] md:w-[80%] text-center w-full">
                {list.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About