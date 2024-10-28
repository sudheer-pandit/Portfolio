import React from 'react'
import "./styles.scss"
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

function Portfolio() {
  return (
   <section className='portfolio' id='portfolio'>
 <PageHeaderContent 
    headerText =" My Portfolio"
    icon= {<BsInfoCircleFill size={40}/>}/>

   </section>
  )
}

export default Portfolio
