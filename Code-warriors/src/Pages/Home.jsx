import React from 'react';
import { motion } from 'framer-motion';
import { TrainCard } from '../Components/TrainCard.jsx';
import { trains } from '../data/trains';

export const Home = () => {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Available Trains
      </h1>

      <div className="space-y-4">
        {trains.map((train, index) => (
          <motion.div
            key={train.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <TrainCard train={train} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
