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
                  <li>Leveraged cloud technologies to engineer a Spring Boot-based grading microservice, enhancing grading efficiency by 30% and servicing an estimated 15,000 users.
                    Utilized RabbitMQ as the messaging queue to ensure reliable message delivery and service communication.
                  </li>
                  <li>Managed three Kubernetes clusters, with two on Google Cloud Platform and one on IBM Cloud, enhancing infrastructure scalability and reliability, leading to a 20% improvement in resource utilization efficiency.</li>
                  <li>Implemented infrastructure deployment using Terraform on both GCP and IBM Cloud platforms, streamlining setup processes and reducing deployment times by approximately 35%.</li>
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
                  <li>Containerized and pushed Docker images using Jenkins, resulting in a 40% increase in deployment efficiency and a 25% reduction in release cycle time.</li>
                  <li>Employed Red Hat Advanced Cluster Management (RHACM) for deploying hybrid cloud environments using Helm charts, achieving a 25% faster setup for hybrid configurations and a 30% improvement in cross-environment compatibility.</li>
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
