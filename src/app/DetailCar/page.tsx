"use client"

import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

type FilterOption = {
  label: string;
  count: number;
  selected: boolean;
};


export default function page() {
  const [typeFilters, setTypeFilters] = useState<FilterOption[]>([
    { label: "Sport", count: 10, selected: false },
    { label: "SUV", count: 12, selected: false },
    { label: "MPV", count: 16, selected: false },
    { label: "Sedan", count: 20, selected: false },
    { label: "Coupe", count: 14, selected: false },
    { label: "Hatchback", count: 14, selected: false },
  ]);

  const [capacityFilters, setCapacityFilters] = useState<FilterOption[]>([
    { label: "2 Person", count: 10, selected: false },
    { label: "4 Person", count: 14, selected: false },
    { label: "6 Person", count: 12, selected: false },
    { label: "8 or More", count: 16, selected: false },
  ]);

  const [maxPrice, setMaxPrice] = useState<number>(100);

  const toggleTypeFilter = (label: string) => {
    setTypeFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.label === label ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const toggleCapacityFilter = (label: string) => {
    setCapacityFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.label === label ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(event.target.value, 10));
  };
  return (
    <div className='w-full flex'>
      
     <div className="first hidden sm:flex w-[25%]">
        {/* <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/> */}
        <div className="p-4">
      <div className="mb-4">
        <h2 className="font-semibold mb-6">Type</h2>
        {typeFilters.map((filter) => (
          <div key={filter.label} className="flex items-center text-2xl mt-2">
            <input
              type="checkbox"
              checked={filter.selected}
              onChange={() => toggleTypeFilter(filter.label)}
              className="mr-2"
            />
            <span className='text-gray-600'>{filter.label} <span className='text-gray-400'> ({filter.count})</span></span>
          </div>
        ))}
      </div>

      <div className="mb-8 mt-6">
        <h2 className="font-semibold mb-5">Capacity</h2>
        {capacityFilters.map((filter) => (
          <div key={filter.label} className="flex items-center text-2xl mt-2">
            <input
              type="checkbox"
              checked={filter.selected}
              onChange={() => toggleCapacityFilter(filter.label)}
              className="mr-2"
            />
            <span className='text-gray-600'>{filter.label} <span className='text-gray-400'>({filter.count})</span></span>
          </div>
        ))}
      </div>

      <div className="mb-4 mt-8">
        <h2 className="font-semibold mb-8">Price</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handlePriceChange}
          className="w-full"
        />
        <span>Max: ${maxPrice}.00</span>
      </div>
    </div>
      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={'/View.png'} alt='' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={'/View 1.png'} alt='' width={148} height={124}/>
                <Image src={'/View 2.png'} alt='' width={148} height={124}/>
                <Image src={'/View 3.png'} alt='' width={148} height={124}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
  <Image
    src={"/Detail Car (1).png"}
    alt="Detail Car"
    width={492}
    height={392}
    className="w-full h-auto rounded-t-xl object-cover"
  />

  <div className="p-4 flex  items-center gap-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/PaymentGetway"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>
        <section className=' w-full flex items-center justify-center'>
            <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={'/Reviews (1).png'} alt='' width={492} height={384} className=' md:hidden'/>
        </section>
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/PaymentGetway'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"/CarCategories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>
  )
}
