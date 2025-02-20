// types/train.ts
export interface Train {
  id: string;
  name: string;
  number: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
}


// data/trains.ts

export const trains: Train[] = [
  {
    id: '1',
    name: 'Nagpur Prayagraj Express',
    number: 'NP123',
    from: 'Nagpur',
    to: 'Prayagraj',
    departureTime: '06:00',
    arrivalTime: '18:00',
    duration: '12h 00m',
    price: 1200,
    availableSeats: 45,
  },
  {
    id: '2',
    name: 'Nagpur Mumbai Express',
    number: 'NM456',
    from: 'Nagpur',
    to: 'Mumbai',
    departureTime: '08:00',
    arrivalTime: '20:00',
    duration: '12h 00m',
    price: 1500,
    availableSeats: 32,
  },
];