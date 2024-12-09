import React from "react";
import { MdLocalGasStation } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

function Card() {
  return (
    <div className="p-4">
      {/* Title Section */}
      <div className="flex justify-between items-center text-2xl font-Plus Jakarta Sans mt-9 mx-4 md:mx-16">
        <h2 className="text-[#90A3BF]">Popular Car</h2>
        <h3 className="text-[#3563E9]">View All</h3>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-6 mx-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-auto">
          <div className="flex justify-between items-center pt-3">
            <h3 className="text-lg font-bold">Koenigsegg</h3>
            <span className="text-red-500 text-xl">&#10084;</span>
          </div>
          <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
          <img
            src="/rentacar/car (2).png"
            alt="Koenigsegg"
            className="w-full object-cover rounded-md mb-4"
          />
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <MdLocalGasStation />
              <span>90L</span>
            </div>
            <div className="flex items-center gap-2">
              <TbSteeringWheel />
              <span>Manual</span>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">$99.00/day</p>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Rent Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-auto">
          <div className="flex justify-between items-center pt-3">
            <h3 className="text-lg font-bold">Koenigsegg</h3>
            <span className="text-[#90A3BF]">
              <FaRegHeart />
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
          <img
            src="/rentacar/car (14).png"
            alt="Koenigsegg"
            className="w-full object-cover rounded-md mb-4"
          />
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <MdLocalGasStation />
              <span>90L</span>
            </div>
            <div className="flex items-center gap-2">
              <TbSteeringWheel />
              <span>Manual</span>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">$99.00/day</p>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Rent Now
            </button>
          </div>
        </div>

        {/* Additional Cards */}
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[304px] h-auto"
          >
            <div className="flex justify-between items-center pt-3">
              <h3 className="text-lg font-bold">Koenigsegg</h3>
              <span className="text-[#90A3BF]">
                <FaRegHeart />
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4 mt-2">Sport</p>
            <img
              src={`/rentacar/car (${index + 4}).png`}
              alt="Koenigsegg"
              className="w-full object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <MdLocalGasStation />
                <span>90L</span>
              </div>
              <div className="flex items-center gap-2">
                <TbSteeringWheel />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-2">
                <BsFillPeopleFill />
                <span>2 People</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$99.00/day</p>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
