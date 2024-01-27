import React from 'react';
import './projects.css';
import {  SiGithubactions, SiPulumi, SiAwslambda, SiGooglecloud, SiMongodb, SiJavascript } from 'react-icons/si'; 
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaAws, FaPython, FaReact, FaNode} from "react-icons/fa";
import { DiMysql } from "react-icons/di";


const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: 'DevOps & Cloud Infrastructure Orchestration',
            description: 'Created an automated DevOps pipeline with AWS and GitHub Actions, harnessing Pulumi and CloudWatch for streamlined, scalable infrastructure management',
            repoLink: 'https://github.com/csye6225-swetha',
            icons: [<FaAws key="aws-1" />, <SiGithubactions key="githubactions-1"/>, <SiPulumi key="pulumi-1"/>]
            
        },
        {
            id: 2,
            title: 'Serverless File Upload & Cloud Storage Integration',
            description: 'Engineered a seamless AWS to GCP file transfer system using AWS Lambda, automating uploads to optimize cross-platform cloud storage',
            repoLink: 'https://github.com/swethapaturu9/serverless',
            icons: [<SiAwslambda key="aws-2"/>, <FaPython key="python-2"/>, <SiGooglecloud key="gcp-2"/> ]
            
        },
        {
            id: 3,
            title: 'University Hiring Portal',
            description: 'Developed a secure, role-based university hiring portal with Spring Boot and Hibernate, optimizing backend processes for high efficiency',
            repoLink: 'https://github.com/swethapaturu9/AlumniNetworkSpringBoot',
            icons: [<BiLogoSpringBoot key="springboot-3"/>,  <DiMysql key="mysql-3" />]
           
        },

        {
          id: 4,
          title: 'WorkIt: Task-Management Application',
          description: 'Led the creation of WorkIt, a MERN-stack task management app, enhancing productivity through a user-centric design and robust backend integration',
          repoLink: 'https://github.com/swethapaturu9/WorkIt',
          icons: [<FaReact key="react-1"/>, <FaNode key="node-1"/>, <SiMongodb key="mongo-1" />, <SiJavascript  key="js-1"/>]
          
      },

      {
        id: 5,
        title: 'Personal Portfolio',
        description: 'Designed a React-based portfolio, automatically deployed on AWS S3 through CI/CD pipelines using GitHub Actions',
        repoLink: 'https://github.com/swethapaturu9/react-portfolio',
        icons: [<FaAws key="aws-1" />, <SiGithubactions key="githubactions-1" />]
        
    },

      
    ];

    return (
      <section id="projects">
            <h2>Projects</h2>
            <div className="project-cards-container">
                {projectList.map((project) => (
                  
                    <div key={project.id} className="project-card">
                        <div  className="card-content">
                            <h3>
                                {/* Title as a link */}
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <p>{project.description}</p>
                            <div className="project-icons">
                            {project.icons && project.icons.map((icon) => (
                                    <span key={icon.key}>{icon}</span> // Use icon's key here
                                ))}

                                         <button onClick={() => window.open(project.repoLink, '_blank')} className="read-me-button">README</button> 
                                </div>
                        </div>
                    </div>
                
                ))}
            </div>
        </section>
    )
}


export default Projects;
