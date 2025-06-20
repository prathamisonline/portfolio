"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import {
  // HeroHighlight,
  Highlight,
} from "../ui/hero-highlight";
import { useEffect } from "react";
import { animate } from "motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Hero() {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #020617 50% , ${color}`;

  return (
    // <HeroHighlight>
    <motion.section
      style={{
        backgroundImage,
      }}
    >
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
        Hi! I'm Pratham, I love making things that help people do their thing.
        <br />
        <Highlight className="text-black dark:text-white">
          Turning Ideas Into Reality
        </Highlight>
      </motion.h1>
      {/* // </HeroHighlight> */}
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
    </motion.section>
  );
}
