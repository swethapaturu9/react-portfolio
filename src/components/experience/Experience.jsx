import React from 'react';
import './experience.css';
import { DiGoogleCloudPlatform, DiMysql} from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiKubernetes, SiTerraform, SiRabbitmq, SiHelm, SiMongodb } from "react-icons/si";
import { FaJava, FaDocker, FaJenkins, FaPython, FaReact, FaNode } from "react-icons/fa";
const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="container experience__container">

        <div className="experience-content">

          <div className="experience-cards">

            <div className="experience-cards--stacked">
              <div className="experience-card">
                <h3 className="card__title">Cloud Native Experience</h3>

                <p> <ul>
                  <li> Developed Spring Boot-based grading microservices, reducing manual grading efforts by 40% and servicing an estimated 15,000 users. Utilized RabbitMQ for efficient asynchronous communication between microservices.
                  </li>
                  <li>Managed Kubernetes deployments across multiple cloud platforms, including OpenShift and GCP, enhancing infrastructure scalability and reliability.</li>
                  <li>My expertise in Kubernetes is further endorsed by my <strong>Certified Kubernetes Application Developer (CKAD) certification</strong>, demonstrating advanced skills in designing and developing applications for Kubernetes - <a href="https://www.credly.com/badges/8d90228d-ed66-4baa-ad20-23b71482ff5c/linked_in?t=rz8e2y" target="_blank" rel="noopener noreferrer">Credential link</a></li>
                </ul>
                </p>
                <div className="icons">
                  <DiGoogleCloudPlatform className="icon" />
                  <BiLogoSpringBoot className="icon" />
                  <SiKubernetes className="icon" />
                  <SiTerraform className="icon" />
                  <SiRabbitmq className="icon" />
                  <FaJava className="icon" />
                  <DiMysql className="icon" />
                </div>
              </div>

              <div className="experience-card experience--centered">
                <h3 className="card__title">DevOps Experience</h3>

                <ul>
                  <li>Executed a POC deploying Spring Boot microservices across multiple cloud platforms with IBM MCM for centralized control.</li>
                  <li>Established JUnit testing in the Jenkins CI/CD pipeline and integrated JFrog Artifactory for storage of build artifacts.</li>
                  <li>Leveraged ManageIQ for on-demand infrastructure provisioning for developers, boosting development speed by 15% and reducing operational costs by 10%</li>
                </ul>

                <div className="icons">
                  <FaDocker className="icon" />
                  <FaJenkins className="icon" />
                  <SiKubernetes className="icon" />
                  <SiHelm className="icon" />

                </div>
              </div>
            </div>

            <div className="experience-card experience--centered">
              <div className="about__new-card">
                <h3 className="card__title">Full Stack Development Experience</h3>
                <ul>
                  <li>Developed a university hiring portal with Spring Boot focusing on backend efficiency, implementing role-based authorization for robust security, and streamlining database operations with Hibernate for smoother data management.</li>
                  <li>Led a 4-member team to build a full-stack productivity application (WorkIt), developing a user-friendly interface with Bootstrap and React.js and constructing the backend using Node.js & MongoDB.</li>
          
                </ul>
                <div className="icons">
                
                <BiLogoSpringBoot className="icon" />
                <FaJava className="icon" />
                <FaPython className="icon" />
                <FaReact className="icon"/>
                <FaNode className="icon"/>
                <SiMongodb className="icon" />
                <DiMysql className="icon" />


                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
