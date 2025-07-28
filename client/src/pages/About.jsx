import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Monee Blog
          </h1>

          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Monne Blog, your go-to destination for insightful,
              practical, and developer-friendly content. Whether you're just
              starting your coding journey or already an experienced programmer,
              our blog offers curated articles and tutorials to guide you
              through the ever-evolving world of technology. We focus on clean
              content, modern tools, and real-world solutions to help you grow.
            </p>

            <p>
              At the heart of Monne Blog lies our special MERN Stack section —
              dedicated to everything related to MongoDB, Express.js, React, and
              Node.js. From beginner guides and hands-on projects to advanced
              deployment tips and performance optimization, this category is
              perfect for full-stack developers aiming to master modern web
              application development.
            </p>

            <p>
              While MERN is our specialty, Monne Blog is more than just one
              stack. Dive into other categories like Python, UI/UX design, cloud
              computing, data structures, interview preparation, and open-source
              tools. No matter your interest, you'll find diverse content
              designed to expand your skill set and keep you up-to-date in the
              tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
