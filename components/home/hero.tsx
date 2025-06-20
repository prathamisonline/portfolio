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
    <motion.section
      id="home"
      style={{
        backgroundImage,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem', // Add padding for fixed navbar
      }}
      className="w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-6">
            Hi! I'm Pratham
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            I love making things that help people do their thing.
          </motion.p>
          
          <motion.div 
            className="mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Highlight className="text-2xl sm:text-3xl md:text-4xl font-medium">
              Turning Ideas Into Reality
            </Highlight>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
