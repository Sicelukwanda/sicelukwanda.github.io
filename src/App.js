import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import projectsData from './projects.json';
import ExperienceTimeline from './ExperienceTimeline';
import experiencesData from './timeline.json';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // This assumes your projects.json is stored in the public folder
    // If it's in src, you can directly import it as done above
    setProjects(projectsData);
  }, []);     
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/website_bg_blue.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Keeps the image fixed during scrolling
        minHeight: '100vh',
      }}
    >
      <header className="App-header">
        <h2 class="fixed-name">Sicelukwanda Zwane</h2>
        <h1>About me</h1>
        <img src={`${process.env.PUBLIC_URL}/images/profile-photo.jpg`} alt="Profile" className="profile-photo"/>
        <p>
          {/* My recent reach interests include planning under uncertainty, robotics for the circular economy, soft robotics, and planning with diffusion. */}
          I am a PhD student at 
          the <a href="https://www.ucl.ac.uk/">UCL</a>, <a href="https://www.ucl.ac.uk/ai-centre/">Centre for Artificial Intelligence</a>, 
          where I work on developing data-efficient and safety-aware machine learning algorithms for robotics. I am part of the <a href="https://www.sml-group.cc">Sustainability and Machine Learning Group</a> as well as the
          the <a href="https://rpl-as-ucl.github.io/">Robot Perception and Learning Lab</a>.
        </p>
        <p>
        <a href="https://github.com/Sicelukwanda" target="_blank">
          Github
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/sicelukwanda/" target="_blank">
          LinkedIn
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:sicelukwanda.zwane+w@gmail.com" target="_blank">
          Email
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://scholar.google.com/citations?user=G4SfJqkAAAAJ&hl" target="_blank">
          Google Scholar
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="CV.pdf" target="_blank">
        CV
        </a>
        
        </p>
      </header>
      <h1>Projects & Publications</h1>
      <div className="Projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1>Roles & Experience</h1>
      <h4>More detailed CV available
      &nbsp;<a href="CV.pdf" target="_blank">
        here</a>
      </h4>
      <ExperienceTimeline experiences={experiencesData}/>
      <div class="attribution">
        <h6>Copyright © 2024 Sicelukwanda Zwane. All Rights Reserved. &nbsp;</h6>
      </div> 
    </div>
  );
}

export default App;
