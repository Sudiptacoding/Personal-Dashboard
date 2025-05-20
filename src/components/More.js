import React from "react";

function More() {
  return (
    <section id="extras">
      <h3 className="text-2xl font-semibold text-blue-300 mb-4">Quick Stats</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-800 p-6 rounded-lg border border-blue-500">
          <p className="text-4xl font-bold text-blue-400">5+</p>
          <p className="text-sm">Years of Experience</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-blue-500">
          <p className="text-4xl font-bold text-blue-400">150+</p>
          <p className="text-sm">GitHub Projects</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-blue-500">
          <p className="text-4xl font-bold text-blue-400">21,024+</p>
          <p className="text-sm">Hours Coding</p>
        </div>
      </div>
    </section>
  );
}

export default More;
