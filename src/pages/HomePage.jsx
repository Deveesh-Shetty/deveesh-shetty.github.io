import Home from "../components/Home/Home"
import Project from "../components/Projects/Project"
import Skill from "../components/Skills/Skill"
import Footer from "../components/UIComponents/Footer/Footer"

function HomePage() {
  return (
    <div>
      <Home />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}

export default HomePage
