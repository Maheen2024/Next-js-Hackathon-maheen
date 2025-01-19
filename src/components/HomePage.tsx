"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/sanity-utils";
import Link from "next/link";

interface Car {
  type: string;
  pricePerDay: number;
  transmission: string;
  imageUrl: string;
  fuelCapacity: number;
  seatingCapacity: number;
  name: string;
  slug?: {
    current: string;
  };
}

const HomePage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const carData = await client.fetch(
        `*[_type == "car"]{
          type,
          pricePerDay,
          transmission,
          "imageUrl": image.asset->url,
          fuelCapacity,
          seatingCapacity,
          name,
          slug
        }`
      );
      setCars(carData);
      setLoading(false);
    };

    fetchCars();
  }, []);

  const handleRentNow = (slug: string | undefined) => {
    if (slug) {
      // Handle rent logic here
      console.log(`Renting car with slug: ${slug}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={car.slug?.current || index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">{car.name}</h2>
            <p className="text-gray-700 mt-2">Type: {car.type}</p>
            <p className="text-gray-700">Capacity: {car.seatingCapacity} Person</p>
            <p className="text-gray-700">Gasoline: {car.fuelCapacity}L</p>
            <p className="text-gray-700">Price: ${car.pricePerDay}/day</p>
            <button
              onClick={() => handleRentNow(car.slug?.current)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/CarCategories">
          <button className="bg-[#3563e9] px-6 py-3 text-white rounded-lg mt-6">Show More Cars</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

