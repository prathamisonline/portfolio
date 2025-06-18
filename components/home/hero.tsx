"use client";
import { motion } from "motion/react";
import { 
  // HeroHighlight,
   Highlight } from "../ui/hero-highlight";

export function Hero() {
  return (
    // <HeroHighlight>
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold mt-24 h-dvh text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
    >
     Hi! I'm Pratham,
     I love making things that help people do their thing.<br />
      <Highlight className="text-black dark:text-white">
        Turning Ideas Into Reality
      </Highlight>
    </motion.h1>
    // </HeroHighlight>
  );
}
