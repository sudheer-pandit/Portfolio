import React from 'react'
import "./styles.scss"
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'

function contact() {
  return (
   <section className='contact' id='contact'>
 <PageHeaderContent 
    headerText =" My Contact"
    icon= {<BsInfoCircleFill size={40}/>}/>


<div className='contact_content'>
  <Animate 
  play
  duration={1}
  delay={0}
  start={{
    transform: "translateX(-200px)"
  }}

  end={{
    transform:"translateX(0px)"
  }}
  >

    <h3 className='contact_content_header-text'>Let's Talk</h3>

  </Animate>

  <Animate 
  play
  duration={1}
  delay={0}
  start={{
    transform: "translateX(-200px)"
  }}

  end={{
    transform:"translateX(0px)"
  }}
  >
  <div className='contact_content_form'>
    <div className='contact_content_form_controlwrapper'>
      <div className='nameWrapper'>
      <input required type={"text "} name='name' className='inputName' />
      <label htmlFor="name" className='nameLabel '>Name</label>
      </div>
 
      <div className='emailWrapper'>
      <input required type={"email "} name='email' className='inputEmail' />
      <label htmlFor="email" className='emailLabel '>Email</label>
      </div>
      <div className='descriptionWrapper'>
      <textarea rows={5} required type={"text "} name='description' className='inputDescription' />
      <label htmlFor="description" className='descriptionLabel '>Description</label>
      </div>
    </div>
    <button>Submit</button>

  </div>

  </Animate>

</div>
   </section>
  )
}

export default contact
