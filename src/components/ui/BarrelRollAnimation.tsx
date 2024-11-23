import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
];

const BarrelRollAnimation


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































= () => {
  // Get the scroll position
  const { scrollYProgress } = useScroll();

  // Map the scroll position to rotation
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="relative h-[200vh] w-full bg-black flex justify-center items-center">
      <div className="sticky top-[50%] h-96 w-full flex justify-center items-center perspective">
        <motion.div
          className="absolute h-96 w-64"
          style={{
            transformStyle: "preserve-3d",
            rotateX: rotateX, // Animate rotation based on scroll
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="absolute text-center text-white text-xl"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `rotateX(${index * (360 / services.length)}deg) translateZ(150px)`,
                transformOrigin: "center",
              }}
            >
              <motion.div
                style={{
                  opacity: useTransform(
                    rotateX,
                    [
                      (index - 1) * (360 / services.length),
                      index * (360 / services.length),
                      (index + 1) * (360 / services.length),
                    ],
                    [0, 1, 0] // Fade in and out
                  ),
                }}
              >
                {service}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BarrelRollAnimation


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































;
