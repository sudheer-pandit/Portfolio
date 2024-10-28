import React from 'react'
import "./styles.scss"
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { data } from './utils'
import 'react-vertical-timeline-component/style.min.css'
import{MdWork} from "react-icons/md"

function Resume() {
  return (
   <section className='resume' id='skills'>
 <PageHeaderContent 
    headerText =" My Resume"
    icon= {<BsInfoCircleFill size={40}/>}/>
 

    <div className='timeline' >
      <div className='timeline_experience'> 
        <h3 className='timeline_experience_header-text'>Experience</h3>
        <VerticalTimeline 
        layout={'1-column'}
        lineColor='var(--yellow-theme-main-color)'
        >
         {
          data.experience.map((item, i)=>(
            <VerticalTimelineElement

             contentStyle={{
              background:"none",
              color:"var(--yellow-theme-sub-text-color)",
              border:"1.5px solid var(--yellow-theme-main-color)"
             }}

             date='2024 present'
             icon= {<MdWork/>}
             iconStyle={{
              background:'#181818',
              color: 'var(--yellow-theme-main-color)'
             }}
            
            key={i}
            className='timeline_experience_vertical_timeline-element'
            >
              <div className='vertical-timeline-element-title-wrapper'>
                <h3 >
                  {item.title}
                </h3>
                

              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>

          ))
         }
        </VerticalTimeline>
      </div>


      <div className='timeline_education'>
         <h3 className='timeline_education_header-text'>Education</h3>
         <VerticalTimeline 
        layout={'1-column'}
        lineColor='var(--yellow-theme-main-color)'
        >
         {
          data.education.map((item, i)=>(
            <VerticalTimelineElement
            key={i}

            contentStyle={{
              background:"none",
              color:"var(--yellow-theme-sub-text-color)",
              border:"1.5px solid var(--yellow-theme-main-color)"
             }}
             date='2024 present'
             icon= {<MdWork/>}
             iconStyle={{
              background:'#181818',
              color: 'var(--yellow-theme-main-color)'
             }}
            className='timeline_experience_vertical_timeline-element'
            >
              <div className='vertical-timeline-element-title-wrapper'>
                <h3 >
                  {item.title}
                </h3>
                <h4 >
                  {item.subTitle}
                </h4>
                <h4 >{item.description}</h4>
               

              </div>
              <p  className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
            </VerticalTimelineElement>

          ))
         }
           </VerticalTimeline>
         </div>

    </div>
   </section>
  )
}

export default Resume
