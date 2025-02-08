import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-16">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-300 via-cyan-600 to-purple-500 rounded-lg text-white">
              Moneesha's
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            This is a my blog project. You can sign up with email and password
            or with Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>

            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="user@gmail.com" id="Email" />
            </div>

            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="Password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
