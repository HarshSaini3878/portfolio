// LoadingSpinner.js
"use client"
import { motion } from 'framer-motion';

const spinnerVariants = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-800 rounded-full"
        variants={spinnerVariants}
        animate="rotate"
      ></motion.div>
    </div>
  );
};

export default LoadingSpinner;
