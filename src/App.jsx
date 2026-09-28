import Navbar from "./components/nav"
import About from "./Pages/About"
import { Hero } from "./Pages/hero"
import Port from "./Pages/portfolio"
import Service from "./Pages/services"
import Slide from "./Pages/slide"
import Team from "./Pages/team"
import Blog from "./Pages/blog"
import Contact from "./Pages/contact"

const App = () => {
  return (
    <>
    <Navbar/>
    <Slide/>
    <Port/>
    <Service/>
    <Team/>
    <About/>
    <Blog/>
    <Contact/>
    {/* <Hero/> */}
    </>
  )
}

export default App