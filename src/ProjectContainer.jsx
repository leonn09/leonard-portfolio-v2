import { useState } from "react";
import projects from "./data/projects.json";
import Modal from './Modal';

const ProjectContainer = () => {
  const [active, setActive] = useState("JavaScript");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (category, project) => {

    if (!isModalOpen) {
      setSelectedProject({
        category,
        project,
      });
    }

    setIsModalOpen(!isModalOpen);
  }

  return <section id="my-projects" className="text-black dark:text-white pt-36">
    <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-4xl">My Projects</h2>
    <div className="mt-2 flex justify-center">
      {
        Object.keys(projects).map((category, i) => {
          return i === 0 ?
          <button
            key={category}
            className={`group/button relative inline-flex items-center justify-center rounded-l-lg overflow-hidden backdrop-blur-lg px-5 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border border-r-0 dark:border-white/20 ${category === active ? "bg-zinc-700/30 dark:bg-[#3d3c3d]/50" : ""}`}
            onClick={() => setActive(category)}
          >
            <span className="text-lg">{category}</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button> 
          :
          <button
            key={category}
            className={`group/button relative inline-flex items-center justify-center overflow-hidden backdrop-blur-lg px-5 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border border-r-0 dark:border-white/20 ${category === active ? "bg-zinc-700/30 dark:bg-[#3d3c3d]/50" : ""}`}
            onClick={() => setActive(category)}
          >
            <span className="text-lg">{category}</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button> 
        }
        )
      }
      <button
        key="All"
        className={`group/button relative inline-flex items-center justify-center rounded-r-lg overflow-hidden backdrop-blur-lg px-5 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border dark:border-white/20 ${active === "All" ? "bg-zinc-700/30 dark:bg-[#3d3c3d]/50" : ""}`}
        onClick={() => setActive("All")}
      >
        <span className="text-lg">ALL</span>
        <div
          className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
        >
          <div className="relative h-full w-10 bg-white/20"></div>
        </div>
      </button>
    </div>
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
      {
        active === "All" ? 
          Object.keys(projects).map((category) => {
            return Object.keys(projects[category]).map((project) => {
              return <button
                    key={project}
                    onClick={() => {
                      toggleModal(category.toLowerCase(), project.toLowerCase().replace(/ /g, "-"));
                    }}
                    className={`w-92 h-88 px-4 py-4 mx-2 mt-3 mb-1 flex flex-col group/button relative rounded-xl overflow-hidden backdrop-blur-lgtext-base font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border dark:border-white/20 dark:bg-[#3d3c3d]/50`}
                    >
                  <div>
                    <img
                      loading="eager"
                      fetchPriority="high"
                      src={`${import.meta.env.BASE_URL}assets/images/${category.toLowerCase().replace(/ /g, "-")}/${projects[category][project]["image"]}`}
                      className="w-88 h-48 object-cover rounded-xl"
                      alt={projects[category][project]["alt"]}
                    />
                    <h3 className="m-3 text-[1.1rem] font-semibold">{project}</h3>
                    <h4 className="text-[0.9rem]">{projects[category][project]["description"]}</h4>
                  </div>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
                  >
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
              </button>
              }
            )
          })
          :
          projects[active] === 0 ? <div className="p-5 text-center dark:text-zinc-400">There's no project here yet</div>
          : 
          Object.keys(projects[active]).map((project) => {
            return <button
                  key={project}
                  onClick={() => {
                      toggleModal(active.toLowerCase(), project.toLowerCase().replace(/ /g, "-"));
                    }}
                  className={`w-92 h-88 px-4 py-4 mx-2 mt-3 mb-1 flex flex-col group/button relative rounded-xl overflow-hidden backdrop-blur-lgtext-base font-semibold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border dark:border-white/20 dark:bg-[#3d3c3d]/50`}>
                <div>
                  <img
                    loading="eager"
                    fetchPriority="high"
                    src={`${import.meta.env.BASE_URL}assets/images/${active.toLowerCase().replace(/ /g, "-")}/${projects[active][project]["image"]}`}
                    className="w-88 h-48 object-cover rounded-xl"
                    alt={projects[active][project]["alt"]}
                  />
                  <h3 className="m-3 text-[1.1rem] font-semibold">{project}</h3>
                  <h4 className="text-[0.9rem]">{projects[active][project]["description"]}</h4>
                </div>
                <div
                  className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
                >
                  <div className="relative h-full w-10 bg-white/20"></div>
                </div>
            </button>
            }
          )
      }
    </div>
    <Modal show={isModalOpen} toggle={toggleModal} data={selectedProject}/>
  </section>;
}

export default ProjectContainer;