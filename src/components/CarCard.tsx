import React from 'react';
import {  FaCogs, FaGasPump, FaUser } from 'react-icons/fa';




interface Car {
  id: string;
  name: string;
  type: string;
  gasoline: string;
  transmission: string;
  capacity: number;
  price: number;
}

interface CarCardProps {
  car: Car;
  handleRentNow: (id: string) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, handleRentNow }) => {
  return (
    <div className="p-4 bg-white rounded shadow w-80">
      <img src="/car.png" alt={car.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
      <p className="text-sm text-gray-600">{car.type}</p>
      <div className="flex items-center space-x-4 mt-2">
        <div className="flex items-center space-x-1">
          <FaGasPump className="text-gray-500" />
          <span>{car.gasoline}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaCogs className="text-gray-500" />
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaUser className="text-gray-500" />
          <span>{car.capacity} People</span>
        </div>
      </div>
      <p className="text-lg font-bold mt-2">${car.price}/day</p>
      <button
        onClick={() => handleRentNow(car.id)}
        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded"
      >
        Rent Now
      </button>
    </div>
  );
};

export default CarCard;
