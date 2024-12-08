import React from 'react';

const ExperienceTimeline = ({ experiences }) => (
  <div className="timeline-hypercontainer">
    <div className="timeline-container">
      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <p>{exp.duration}</p>
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;