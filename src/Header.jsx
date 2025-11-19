import { useState, useEffect } from "react";
import LeoLogo from '/assets/Leo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linkClass = `p-2 m-1 w-36 mx-auto text-sm rounded-full border-2 hover:bg-zinc-700/50 ${isNavOpen ? "block text-center" : isScrolled ? "" : "hidden"}`;

  const bgClass = isNavOpen
    ? "bg-zinc-100 dark:bg-zinc-900 shadow"
    : isScrolled ? "bg-zinc-100/90 dark:bg-zinc-900/90 shadow"
    : "";

  const sizeClass = isNavOpen
    ? "h-fit"
    : isScrolled ? "items-center h-20"
    : "flex justify-center";

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`${isNavOpen ? "" : "sm:flex"} fixed z-50 w-full p-4 transition-all duration-300 text-zinc-950 dark:text-zinc-50 ${sizeClass} ${bgClass}`}>
      <div className={`${isNavOpen ? "flex" : isScrolled ? "flex" : ""}`}>
        <img src={LeoLogo} alt="Leonard Logo" className={`${isNavOpen ? "w-16 h-14" : isScrolled ? "w-16 h-14" : "w-32 h-28"}`}/>

        <button
            aria-label="Toggle navigation menu"
            className={`ml-3 HAMBURGER-ICON space-y-2 ${isNavOpen ? "block" : isScrolled ? "block sm:hidden" : "hidden"}`}
            onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
          >
            <span className="block h-0.5 w-8 bg-zinc-950 dark:bg-zinc-50"></span>
            <span className="block h-0.5 w-8 bg-zinc-950 dark:bg-zinc-50"></span>
            <span className="block h-0.5 w-8 bg-zinc-950 dark:bg-zinc-50"></span>
        </button>
      </div>

      <div className={`${isNavOpen ? "hidden" : isScrolled ? "hidden" : "flex flex-col justify-end"}`}>
        <h1 className="text-3xl font-thin">
          Hi, I'm <span className="font-bold">Leo,</span>
        </h1>
        <h2 className="text-xl lg:text-3xl">
          I learn coding.
        </h2>
      </div>

      <nav className="">

        <ul className={`font-semibold ${isNavOpen ? "p-4 flex flex-col justify-center items-center" : isScrolled ? "hidden sm:flex gap-2" : ""}`}>
          <li><a onClick={() => setIsNavOpen(false)} href="#my-projects" className={linkClass}>My Projects</a></li>
          <li><a onClick={() => setIsNavOpen(false)} href="#about-me" className={linkClass}>About Me</a></li>
          <li><a onClick={() => setIsNavOpen(false)} href="#pricing" className={linkClass}>Pricing</a></li>
          <li><a onClick={() => setIsNavOpen(false)} href="#mail-link" className={linkClass}>Contact me</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;