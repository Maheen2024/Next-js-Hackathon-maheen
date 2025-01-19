"use client"
import { NextPage } from 'next';
import CarCard from '../../components/CarCard';

const cars = [
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: 4,
    price: 99,
  },
  // Add more cars here
];

const handleRentNow = (id: string) => {
  alert(`Car with id ${id} rented!`);
};

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} handleRentNow={handleRentNow} />
      ))}
    </div>
  );
};

export default Home;
