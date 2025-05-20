import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-center gap-6"
    >
      <Image
        src="/image/SudiptaPhoto.png"
        alt="Sudipta Biswas"
        width={150}
        height={150}
        className="rounded-full border-4 border-blue-400"
      />
      <div>
        <h2 className="text-3xl font-semibold text-blue-300">Sudipta Biswas</h2>
        <p className="mt-2 text-gray-300">
          MERN Stack Developer | 5+ Years of Experience
        </p>
        <p className="text-sm mt-1">📧 sudiptabiswas506@gmail.com</p>
        <p className="text-sm">📱 +880 1748 272867</p>
        <p className="text-sm">📍 Satkhira, Khulna, Dhaka (Remote)</p>
      </div>
    </section>
  );
}

export default Hero;
