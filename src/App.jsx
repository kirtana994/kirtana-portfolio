import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Skill from "./components/Skill";
import heroImage from "./assets/hero.png";  
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/card.css";
import "./styles/projectcard.css";
import "./styles/button.css";
import "./styles/skills.css";
import "./styles/footer.css";

function App() {
  return (
    <>
      <Navbar />

      <Section id="home"  className="hero-section">
        <h1>Hello, I'm Kirtana Kichmbare 👋</h1>
        <div className="hero-typing" aria-label="Full Stack (MERN) Developer, AI/ML Enthusiast, Problem Solver, Aspiring Software Engineer">
          <span>Full Stack (MERN) Developer</span>
          <span>AI/ML Enthusiast</span>
          <span>Problem Solver</span>
          <span>Aspiring Software Engineer</span>
        </div>
      </Section>

      <Section id="about" title="About Me" className="about-section">
        <div className="about-layout">
          <div className="about-photo-wrap" aria-label="Profile photo">
            <img className="about-photo" src="/Profile.jpg" alt="Kirtana profile" />
          </div>

          <p>I am a Computer Engineering student focused on building scalable, user-centric web applications. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a strong foundation in web technologies, backend development, and databases.
Alongside full-stack development, I am actively exploring AI/ML to develop intelligent, data-driven solutions. I am particularly interested in how modern systems can leverage data to improve efficiency, decision-making, and user experience.
I continuously work on strengthening my problem-solving abilities, system design skills, and understanding of modern software architecture, with a focus on scalability, distributed systems, and real-time technologies. I aim to build solutions that are efficient, reliable, and impactful.</p>
        </div>
      </Section>

      <Section id="skills" title="Skills" className="skills-section">
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="React" />
        <Skill name="Node.js" />
        <Skill name="Express.js" />
        <Skill name="MongoDB" />
        <Skill name="Python" />
        <Skill name="AI/ML" />
        <Skill name="Git" />
      </Section>

      <Section id="projects" title="Projects" className="projects-section">
        <div className="projects-grid">
          <ProjectCard
            title="Study Buddy"
            desc="A web-based platform designed to assist students in managing their study resources efficiently. It allows users to organize materials, access learning content, and improve productivity through a structured interface. The system focuses on simplicity and usability to enhance the overall learning experience."
            link="https://github.com/Khushiben/Study-Buddy-A-Smart-Study-Companion"
          />

          <ProjectCard
            title="Career Guidance System"
            desc="A guidance-based web application that helps students explore suitable academic paths based on their interests and input. It provides structured suggestions and helps users make informed decisions regarding their education and career directions, aiming to simplify the decision-making process and enhance user experience."
            link="https://github.com/ShraddhaP0501/EducationAdvisor"
          />

          <ProjectCard
            title="DDAS (Data Download Duplication Alert System)"
            desc="A system developed to detect and prevent duplicate file downloads within a network. It monitors downloaded files, generates hashes, and compares them with existing records stored in a database. If a duplicate is found, users are redirected to the already available file instead of downloading it again, improving storage efficiency and reducing redundancy."
            link="#"
          />

          <ProjectCard
            title="Scholarship Finder"
            desc="A web application that helps students discover scholarships based on their profile. It includes features like filtered search, dropdown-based navigation, and database integration to provide relevant results. Designed to simplify the scholarship search process and make opportunities more accessible."
            link="https://github.com/ShraddhaP0501/ScholarshipFinder"
          />

        </div>
      </Section>

      <Section id="contact" title="Contact" className="contact-section">
        <p>Email: kirtana.09kichmbare@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kirtana-kichmbare-88a8302bb/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kirtana-kichmbare</a></p>
        <p>GitHub: <a href="https://github.com/kirtana994" target="_blank" rel="noopener noreferrer">github.com/kirtanakichmbare</a></p>

        <div className="contact-icons" aria-label="Contact links">
          <a href="https://github.com/kirtana994" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.1c.85 0 1.72.12 2.52.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.96-2.34 4.84-4.57 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/kirtana-kichmbare-88a8302bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 18.5h2.7V9.5H5.6v9Zm4.23 0h2.58v-4.66c0-1.23.23-2.42 1.72-2.42 1.47 0 1.49 1.37 1.49 2.5v4.58h2.58v-5.11c0-2.51-.54-4.45-3.48-4.45-1.41 0-2.36.79-2.75 1.54h-.04V9.5H9.83c.03.69 0 9 0 9Z" />
            </svg>
          </a>

          <a href="mailto:kirtana.09kichmbare@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.03.03 6.97 4.97 6.97-4.97a.75.75 0 0 0-.72-.78H5.75a.75.75 0 0 0-.72.78Zm13.97 1.82-6.56 4.67a.75.75 0 0 1-.88 0L5 8.6v8.65c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.6Z" />
            </svg>
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default App;