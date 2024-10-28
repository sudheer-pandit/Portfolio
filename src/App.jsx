import {Routes, Route, useLocation } from "react-router-dom"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"
// import Particles from "@tsparticles/react"
// import Particle from "./utils.js/particles"
import Home from "./container/home"
import About from "./container/about"
import Resume from "./container/resume"
import Skills from "./container/skills"
import Portfolio from "./container/portfolio"
import Contact from "./container/contact"
import Navbar from "./components/navbar"
import particles from "./utils.js/particles"
import "./App.scss"

function App() {
  const handleInit = async (main)=>{
    console.log(main)
    await loadFull(main)
  }

  const location = useLocation()
console.log(location)
 
const renderParticleJsHomePage = location.pathname === "/"

  return (
    <div className="App">
    {/* particles js */}
 {
  renderParticleJsHomePage && 
<Particles id="particles" options={particles}  init={handleInit}/>

 }

    {/* navbar  */}
  <Navbar/>
 

{
  // main page content
}

<div className="App_main-page-content">

<Routes>
  <Route index path="/" element = {<Home/>}/>
  <Route  path="/about" element = {<About/>}/>
  <Route  path="/resume" element = {<Resume/>}/>
  <Route  path="/skills" element = {<Skills/>}/>
  <Route  path="/portfolio" element = {<Portfolio/>}/>
  <Route  path="/contact" element = {<Contact/>}/>
</Routes>
</div>

    </div>
  )
}

export default App
