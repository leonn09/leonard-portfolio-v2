import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import ProjectContainer from './ProjectContainer.jsx'
import OverlayBg from './OverlayBG.jsx'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe.jsx'
import React, { Suspense } from "react";

const ThemeSwitcher = React.lazy(() => import("./ThemeSwitcher.jsx"));
const Skills = React.lazy(() => import("./Skills.jsx"));

createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <OverlayBg />
      <Header />
      <Suspense fallback={null}>
        <ThemeSwitcher />
      </Suspense>
      <ProjectContainer />
      <AboutMe />
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <ContactMe />
    </StrictMode>,
  )
