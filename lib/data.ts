import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AlgoVisualizationWebsite from "@/public/AlgoVisualizationWebsite.png"
import CppML from "@/public/CppML.png"
import CPBlog from "@/public/CPBlog.png"
import Emulator8085 from "@/public/Emulator8085.jpg"
import Discuss from "@/public/Discuss.png"
import MovieRecommender from "@/public/MovieRecommender.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master's in Computer Science",
    location: "San Jose, CA",
    description:
      "I am pursuing a Master's in CS at SJSU with a specialization in AI/ML.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    description: `I worked as a Software Engineer at Samsung R&D in the Graphics Team 
    (part of the Visual Intelligence Group) for their new VR Glasses. I worked on Android, 
    OpenGL, OpenCV and Unity. I primarily worked with C++, Java, and C#. I used tools such as
    Git, Jira, CMake, Docker, and Linux for development.`,
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Bachelor's in Computer Science",
    location: "Dehradun, India",
    description:
      "Completed my 4 year bachelor's degree in CS with a 3.81 / 4.0 GPA.",
    icon: React.createElement(FaReact),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Discuss",
    description:
      `An instant messaging and VoIP social platform that enables users to join servers 
      and communicate in channels.`,
    tags: ["Next.js 13", "React", "Socket.io", "Prisma", "Tailwind", "MySQL"],
    imageUrl: Discuss,
  },
  {
    title: "Algorithm Visualization Website",
    description:
      `A graphical and interactive website for various algorithms used in Computer Science
       (e.g. Bezier Curves, Sorting, Path Finding, Rigid Bodies, Boids, etc.)`,
    tags: ["P5.js", "HTML", "CSS", "Javascript", "WebGL"],
    imageUrl: AlgoVisualizationWebsite,
  },
  {
    title: "CppML",
    description:
      `A C++ Machine Learning library from scratch that includes models for Regression, 
      KNN, K‑Means, Hidden Markov Models, and Neural Networks.`,
    tags: ["C++"],
    imageUrl: CppML,
  },
  {
    title: "Intel 8085 Emulator",
    description:
      `An 8085 Microprocessor Emulator which supports all opcodes in an 8085 chip with a 
      Desktop GUI application to analyze memory, registers, etc.`,
    tags: ["C++"],
    imageUrl: Emulator8085,
  },
  {
    title: "Competitive Programming Blog",
    description:
      `A collection of blogs about Competitive Programming and Data Structures and Algorithms.`,
    tags: ["Jekyll", "Javascript", "Markdown", "MathJax", "C++"],
    imageUrl: CPBlog,
  },
  {
    title: "Movie Recommender",
    description:
      `A full-stack web app, built using Flask, that applies cosine similarity with TF-IDF to 
      rank and recommend movies according to the user's preference`,
    tags: ["Python (Flask)", "Tensorflow", "Pandas", "HTML", "CSS", "Javascript"],
    imageUrl: MovieRecommender,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Python",
  "Java",
  "C#",
  "JavaScript/TypeScript",
  "SQL",

  "React",
  "Next.js",
  "GraphQL",
  "Flask",
  ".Net",
  "Git",
  "Docker",

  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "NoSQL",

  "Unity",
  "OpenGL",
  "OpenCV",
  "Unreal",

  "TensorFlow",
  "Keras",
  "PyTorch",
  "Pandas",
  "Scikit-learn",

  "Azure",
  "GCP",

  // "Linux", "Unix", "Windows", "MacOS", "iOS", "Android",
] as const;
