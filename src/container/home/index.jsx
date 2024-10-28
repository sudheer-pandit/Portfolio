import React from 'react'
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate';

function Home() {
const navigate  = useNavigate();
  console.log(navigate);
  

  const handleNavigateContactMePage = ()=>{
    navigate("/contact")
  }
  return (
   <section className='home' id='home'>
    <div className='home_text-wrapper'>

    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform: 'translateX(-550px)'
    }}

    end={{
      transform: 'translateY(0px)'
    }}
   > 
      <h1>Hello, I'm Sudheer 
        <br />
       MERN FullStack Developer
      </h1>
</Animate>
    </div>
   <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform: 'translateY(550px)'
    }}

    end={{
      transform: 'translatex(0px)'
    }}
   > <div className='home_contact-me'>
      <button onClick={handleNavigateContactMePage}>Hire Me</button>
    </div></Animate>


    


   </section>
  )
}

export default Home
