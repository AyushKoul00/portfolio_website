"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi! I am a Software Developer and a Master's of CS student @<span className="underline">SJSU</span>. My
        areas of interest include
        {" "}<span className="font-medium">Full-Stack Web Development</span>, 
        {" "}<span className="font-medium">Machine Learning</span>, 
        {" "}<span className="font-medium">App Development</span>, and
        {" "}<span className="font-medium">Game Development/Computer Graphics</span>.

        <br />
        <br />
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        <br />
        <br />
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">cooking</span>.
      </p>
    </motion.section>
  );
}
