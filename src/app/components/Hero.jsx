import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 md:p-20 bg-gray-100 min-h-[98vh]">
      <div className="text-center md:text-left space-y-5">
        <h2 className="text-xl font-bold text-gray-600">Hello, I am</h2>
        <h1 className="text-5xl font-extrabold text-blue-700">
          Isuru Rathnayake
        </h1>
        <p className="text-lg text-gray-700 max-w-md">
          Full Stack Engineer React. Building modern web applications with
          Next.js and React.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Download CV
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Me
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
          <Image
            src="/profile.png"
            alt="Isuru Rathnayake"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
