import LeoLogo from '/assets/Leo.svg'

const Header = () => {

  return (
    <header className="flex justify-center h-[9rem] text-black dark:text-white">
      <img src={LeoLogo} alt="Leonard Logo" className="w-32 h-28 mx-0 mt-7 "/>
      <div className="mt-6">
        <div className="desc flex flex-col">
          <h1 className="text-3xl font-thin">
            Hi, I'm <span className="font-bold">Leo,</span>
          </h1>
          <h2 className="text-xl lg:text-3xl">
            I learn coding.
          </h2>
          <div className="flex justify-center mt-2">
              <a href="#myprojects" className="border border-b-4 border-r-0 font-medium overflow-hidden relative px-2 py-1 rounded-l-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                View My Work
              </a>
              <a href="#about-me" className="border border-b-4 border-l-0 font-medium overflow-hidden relative px-2 py-1 rounded-r-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                About Me
              </a>
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;