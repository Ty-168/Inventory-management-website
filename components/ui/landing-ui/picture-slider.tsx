"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useMemo } from "react";

type Testimonial = {
  src: string;
};

export const AutoAnimatedImages = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Ensure stable rotation values
  const randomRotations = useMemo(() => {
    return new Array(testimonials.length).fill(null).map(() => Math.floor(Math.random() * 21) - 10);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    <div className="relative h-80 w-full">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.src}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotations[index],
            }}
            animate={{
              opacity: index === active ? 1 : 0.7,
              scale: index === active ? 1 : 0.95,
              z: index === active ? 0 : -100,
              rotate: index === active ? 0 : randomRotations[index],
              zIndex: index === active ? 40 : testimonials.length + 2 - index,
              y: index === active ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotations[index],
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 origin-bottom"
          >
            <img
              src={testimonial.src}
              alt=""
              width={300}
              height={100}
              draggable={false}
              className="rounded-3xl object-cover object-center w-[180px] lg:w-[300px]"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
