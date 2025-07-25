import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-row sm:flx-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about MERN stack?</h2>

        <p className="text-gray-500 my-2">
          Checkout these resources with MERN stack projects
        </p>

        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.geeksforgeeks.org/mern/mern-stack-projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN stack projects
          </a>
        </Button>
      </div>

      <div className="flex-1 p-7">
        <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png" />
      </div>
    </div>
  );
}
