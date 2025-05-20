// src/components/Academic.js

import React from "react";
import { academics } from "@/data/academicsData";

const Academic = () => {
  return (
    <section id="academics">
      <h3 className="text-2xl font-semibold text-blue-300 mb-4">Academics & Certifications</h3>
      <ul className="space-y-4">
        {academics.map((item, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-lg text-white">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
            <p className="text-sm text-blue-400 mt-1">GPA: {item.gpa} | Score: {item.percentage}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Academic;
