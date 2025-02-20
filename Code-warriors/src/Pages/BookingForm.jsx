import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const train = location.state?.train;

  const [formData, setFormData] = useState({
    passengers: [{ name: '', age: '', gender: 'male' }],
    phone: '',
    email: '',
  });

  if (!train) {
    return <div className="text-red-500">Train data not provided!</div>;
  }

  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...formData.passengers];
    updatedPassengers[index][field] = value;
    setFormData({ ...formData, passengers: updatedPassengers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    navigate('/payment');
  };

  const addPassenger = () => {
    setFormData({
      ...formData,
      passengers: [...formData.passengers, { name: '', age: '', gender: 'male' }],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-black rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Book Ticket - {train.name}</h2>

        <div className="mb-6 p-4 bg-gray-50 rounded">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">
              {train.from} → {train.to}
            </span>
            <span className="text-blue-600 font-bold">₹{train.price}</span>
          </div>
          <p className="text-gray-600">Departure: {train.departureTime}</p>
          <p className="text-gray-600">Duration: {train.duration}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.passengers.map((passenger, index) => (
            <div key={index} className="p-4 border rounded">
              <h3 className="font-semibold mb-4">Passenger {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="p-2 border-blue- rounded"
                  value={passenger.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Age"
                  required
                  className="p-2 border rounded"
                  value={passenger.age}
                  onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                />
                <select
                  className="p-2 border rounded"
                  value={passenger.gender}
                  onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          ))}

          <button type="button" onClick={addPassenger} className="text-blue-600 hover:underline">
            + Add Another Passenger
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="p-2 border rounded"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              Total: ₹{train.price * formData.passengers.length}
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
