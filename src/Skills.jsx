import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

const Skills = () => {
  const skills = [
    { icon: faHtml5, label: 'HTML5' },
    { icon: faCss3Alt, label: 'CSS3' },
    { icon: faJs, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
  ];

  return (
    <section className="mt-10 text-black dark:text-white">
      <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-4xl">
        Skills
      </h2>

      <div className="m-4 flex justify-center md:gap-4 md:text-xl lg:text-2xl">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <FontAwesomeIcon
              icon={skill.icon}
              size="4x"
              className="hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors duration-200 cursor-pointer"
            />
            <span className="absolute text-md bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-100/90 dark:bg-zinc-800 rounded-md px-2 py-1 pointer-events-none whitespace-nowrap">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;