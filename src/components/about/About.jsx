import React from 'react';
import './about.css';
import { FaSearch, FaCloud, FaLaptopCode, FaTools, FaUsers, FaGlobeAmericas, FaSeedling, FaSuperpowers } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';


const About = () => {
  return (
    <section id="about" className="about__section">
      <h2> About Me </h2>

      <div className="container about__container">
      <p className="about__intro-paragraph">
      A driven graduate student in Information Systems at Northeastern University Boston, I blend academic rigor with practical experience in Software Engineering. At Larsen & Toubro Infotech Ltd., I excelled in optimizing cloud infrastructures and deployment processes, demonstrating a robust skill set in programming, web technologies, and DevOps. Eager to embrace new challenges and leverage my expertise, I am actively seeking opportunities to contribute and grow in a dynamic and forward-thinking technological environment
          </p>

        <div className="about__me-content">


        <div className="about__details">
            <p><FaSearch className="about__icon_b" /> I am passionate about delving deep into the heart of issues, a skill honed not only in technology but also through a keen interest in history, ensuring thorough understanding and effective problem-solving.</p>
            <p><FaCloud className="about__icon_b" /> I have a deep understanding of cloud infrastructures, demonstrated through hands-on experience with AWS, Docker, Kubernetes, Terraform, and Pulumi.</p>
            <p><FaLaptopCode className="about__icon_b" /> I have a strong foundation in multiple programming languages (Java, Python, C++, JavaScript) and web technologies (Spring, Node.js, React.js).</p>
            <p><FaTools className="about__icon_b" /> I am skilled in creating efficient CI/CD pipelines, ensuring seamless software integration and deployment, as demonstrated in my role at Larsen & Toubro Infotech.</p>
            <p><FaUsers className="about__icon_b" /> I have experience leading teams in developing full-stack applications, showcasing my ability to manage and work collaboratively.</p>
            <p><FaGlobeAmericas className="about__icon_b" /> Having studied and worked in diverse environments, I bring a unique international perspective to the team.</p>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5> Larsen & Toubro Infotech</h5>
              <small> July21 - July22 </small>
            </article>
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5> Northeastern University</h5>
              <small> Expected May 2024 </small>
            </article>
            <article className="about__card">
              <BiBook className="about__icon" />
              <h5> Master of Science </h5>
              <small> Information Systems </small>
            </article>
          </div>

        </div>
        
      
      </div>
    </section>
  );
};

export default About;
