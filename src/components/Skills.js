import { skills } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="my-8">
      <h3 className="text-2xl font-semibold text-blue-300 mb-4">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-lg text-center border border-blue-400 text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
