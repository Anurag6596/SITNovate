import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';

function BookingForm() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find((t) => t.id === trainId);

  const [formData, setFormData] = useState({
    passengers: [{
      name: '',
      age: '',
      gender: 'male'
    }],
    phone: '',
    email: ''
  });

  if (!train) {
    return <div>Train not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  const addPassenger = () => {
    setFormData({
      ...formData,
      passengers: [
        ...formData.passengers,
        { name: '', age: '', gender: 'male' }
      ]
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Book Ticket - {train.name}</h2>

        <div className="mb-6 p-4 bg-gray-50 rounded">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">{train.from} → {train.to}</span>
            <span className="text-blue-600 font-bold">₹{train.price}</span>
          </div>
          <div className="text-gray-600">
            <p>Departure: {train.departureTime}</p>
            <p>Duration: {train.duration}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.passengers.map((passenger, index) => (
            <div key={index} className="p-4 border rounded">
              <h3 className="font-semibold mb-4">Passenger {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <select className="w-full p-2 border rounded">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addPassenger}
            className="text-blue-600 hover:text-blue-700"
          >
            + Add Another Passenger
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              Total: ₹{train.price * formData.passengers.length}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
