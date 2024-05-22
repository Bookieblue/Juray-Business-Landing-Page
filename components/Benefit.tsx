"use client";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BENEFITS } from "@/constants";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Benefit = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="benefit"
      className="max-container padding-container bg-gray-900 py-16"
      ref={ref}
    >
      <div className="max-w-7xl ">
        <h2 className="bold-32 lg:text-4xl font-extrabold text-white text-center mb-8">
          Benefits of Our Service
        </h2>
        <motion.div
          className="space-y-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } space-y-8 md:space-y-0 md:space-x-8`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-600 text-white">
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      className="h-12 w-12"
                    />
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="max-w-lg text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-300">{benefit.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefit;
