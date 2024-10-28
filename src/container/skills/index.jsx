import React from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";

function Skills() {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent
        headerText=" My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills_content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills_content-wrapper_inner-content_category-text">
                {item.label}
              </h3>
              <div className="skills_content-wrapper_inner-content_progressbar-container">
                {item.data.map((skillsItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div key={j} className="progressbar-wrapper">
                      <p>{skillsItem.skillName}</p>
                      <Line
                        percent={skillsItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
