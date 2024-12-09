import React from 'react';
import { MdLocalGasStation } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbSteeringWheel } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';

function Recomendcar() {
  return (
    <div>
      <div className="m-4">
        <h2 className="text-[#90A3BF] text-2xl pl-4 sm:pl-6 md:pl-11">Recomendation Car</h2>
      </div>

      {/* Card Container */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
        {/* Single Card */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-full h-auto max-w-sm mx-auto"
          >
            <div className="flex justify-between items-center pt-3">
              <h3 className="text-lg font-bold">Koenigsegg</h3>
              <span className="text-[#90A3BF]">
                <FaRegHeart />
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-5 mt-5">Sport</p>
            <img
              src={`/rentacar/car (${index + 6}).png`}
              alt="Koenigsegg"
              className="w-full object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4 pt-7">
              <div className="flex items-center gap-2">
                <p>
                  <MdLocalGasStation />
                </p>
                <span>90L</span>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <TbSteeringWheel />
                </p>
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-2">
                <BsFillPeopleFill />
                <span>2 People</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-7">
              <p className="text-lg font-bold">$99.00/day</p>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="m-6">
        <div className="flex justify-center">
          <button className="w-[156px] h-[44px] bg-[#3563E9] text-white rounded-md text-center">
            Show more cars
          </button>
        </div>
        <div className="flex justify-end pb-9">
          <p className="text-[#90A3BF] text-sm sm:text-xl lg:text-2xl">120 Cars</p>
        </div>
      </div>
    </div>
  );
}

export default Recomendcar;
