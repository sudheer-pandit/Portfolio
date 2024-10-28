import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const data = [
  {
    label: "Name:",
    value: "Sudheer Pandit",
  },
  {
    label: "Age:",
    value: "23",
  },
  {
    label: "Address: ",
    value: "Bihar India",
  },
  {
    label: "Email:",
    value: "sudheerpandit869@gmail.com",
  },
  {
    label: "Contact No.:",
    value: "6207386393",
  },
];
const jobSummary =
  "I am a fresher MERN stack developer with hands-on experience in building full-stack web applications. My knowledge spans the key technologies in the stack: MongoDB, Express.js, React, and Node.js. Through personal projects, I have developed skills in database management, RESTful API development, and front-end design. I have created a task management system and a job posting board, focusing on responsive and interactive user interfaces with React and Tailwind CSS. I’m also currently building a fantasy game feature, developing real-time updates and secure user authentication";

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-990px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformation">Personal Information</h3>
            <ul>
              {data.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_serviceWrapper">

          
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(700px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about_content_serviceWrapper_innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaJava size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
