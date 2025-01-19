"use client";

import { client } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";

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

const Query = `*[_type == "car"]{
  type,
  pricePerDay,
  transmission,
  "imageUrl": image.asset->url,
  fuelCapacity,
  seatingCapacity,
  name,
  slug
}`;

const HomePage = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: Car[] = await client.fetch(Query);
      setCars(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleRentNow = (slug?: string) => {
    if (slug) {
      router.push(`/car/${slug}`);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10">
      <section className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image src="/Ads 1.png" alt="Ad 1" width={640} height={360} className="max-w-full rounded-lg shadow-md" />
        <Image src="/Ads 2.png" alt="Ad 2" width={640} height={360} className="max-w-full rounded-lg shadow-md" />
      </section>

      <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-[100rem] mx-auto ">
                <div className="grid grid-cols-2 gap-6">
                    {/* Pick-Up Container */}
                    <div className="bg-white p-4 rounded-lg shadow-md ">
                        <h2 className="text-2xl font-semibold mb-4">Pick-Up</h2>
                        <div className="flex gap-10">
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Location</label>
                                <select
                                    value={pickUpLocation}
                                    onChange={(e) => setPickUpLocation(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="" disabled>Select your city</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={pickUpDate}
                                    onChange={(e) => setPickUpDate(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    value={pickUpTime}
                                    onChange={(e) => setPickUpTime(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Drop-Off Container */}
                    <div className="bg-white p-4 rounded-lg shadow-md ">
                        <h2 className="text-2xl font-semibold mb-4">Drop-Off</h2>
                        <div className="flex gap-10">
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Location</label>
                                <select
                                    value={dropOffLocation}
                                    onChange={(e) => setDropOffLocation(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="" disabled>Select your city</option>
                                    <option value="City 1">City 1</option>
                                    <option value="City 2">City 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={dropOffDate}
                                    onChange={(e) => setDropOffDate(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    value={dropOffTime}
                                    onChange={(e) => setDropOffTime(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
