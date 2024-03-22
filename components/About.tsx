import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="fampic.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
        md:w-96 md:h-96 xl:w-[550px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#556B2F]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Potenti nullam ac
          tortor vitae purus faucibus. Nisl nunc mi ipsum faucibus vitae aliquet
          nec ullamcorper. Sagittis vitae et leo duis ut diam quam nulla
          porttitor. Massa ultricies mi quis hendrerit dolor. Lectus arcu
          bibendum at varius vel pharetra vel. Rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant.
          Ultricies mi quis hendrerit dolor. Platea dictumst vestibulum rhoncus
          est. Vestibulum sed arcu non odio euismod lacinia at quis. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Mattis
          rhoncus urna neque viverra justo. Amet dictum sit amet justo donec
          enim. Aliquam sem et tortor consequat id porta nibh venenatis cras.
        </p>
      </div>
    </div>
  );
}

export default About;
