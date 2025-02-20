import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const TrainCard = ({ train }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{train.name}</h3>
          <p className="text-gray-600">Train No: {train.number}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">₹{train.price}</p>
          <p className="text-green-600">{train.availableSeats} seats left</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-8">
            <div>
              <p className="text-lg font-semibold">{train.departureTime}</p>
              <p className="text-gray-600">{train.from}</p>
            </div>
            <div className="text-gray-400">→</div>
            <div>
              <p className="text-lg font-semibold">{train.arrivalTime}</p>
              <p className="text-gray-600">{train.to}</p>
            </div>
          </div>
          <p className="text-gray-600 mt-2">Duration: {train.duration}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/book/${train.id}`)} // Fixed template literal
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};
