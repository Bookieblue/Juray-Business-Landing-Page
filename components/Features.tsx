'use client'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FEATURES } from "@/constants";
import { motion } from "framer-motion";

const Feature = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id='feature' className="max-container padding-container flexCenter bg-slate-50 py-16">
      <div className="max-w-7xl text-center">
        <h2 className="bold-32 lg:text-4xl font-extrabold text-gray-500 mb-8">
          Our Features
        </h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-500 rounded-lg p-8 shadow-lg hover:shadow-xl cursor-pointer transition duration-300"
              variants={item}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4 mx-auto">
                <FontAwesomeIcon icon={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
