import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import Hero from "./sections/Hero"
import MySkills from "./sections/MySkills"
import ProjectSection from "./sections/ProjectSection"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ProjectSection />
      <ExperienceSection />
      <MySkills />
    </>
  )
}

export default App