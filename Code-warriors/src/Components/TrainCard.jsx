import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const TrainCard = ({ train }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4"
    >
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold">{train.name}</h3>
          <p className="text-gray-600">Train No: {train.number}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">₹{train.price}</p>
          <p className="text-green-600">{train.availableSeats} seats left</p>
        </div>
      </div>

      <div className="mt-4">
        <p>
          {train.from} → {train.to}
        </p>
        <p>Departure: {train.departureTime}</p>
        <p>Duration: {train.duration}</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() =>
          navigate(`/book/${train.id}`, { state: { train } }) // Pass train data via state
        }
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

TrainCard.propTypes = {
  train: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availableSeats: PropTypes.number.isRequired,
    departureTime: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};
