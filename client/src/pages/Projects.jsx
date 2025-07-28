import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <p className="text-md text-gray-500">
        Monee Blog helps you build fun and interactive projects while learning
        HTML, CSS, JavaScript, and the MERN stack. Explore real-world examples,
        sharpen your full-stack skills, and create engaging web apps, all in one
        place.
      </p>

      <CallToAction />
    </div>
  );
}
