import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <button 
        id="toggleSkills" 
        onClick={() => setVisible(!visible)}
      >
        Show/Hide Skills
      </button>

      {visible && (
        <div id="skills" className="card">
          <h2>Technical Skills</h2>
          
          <h3>Programming Languages</h3>
          <p>{skills.programmingLanguages.join(', ')}</p>

          <h3>Development Skills</h3>
          <p>{skills.developmentSkills.join(', ')}</p>

          <h3>Soft Skills</h3>
          <p><strong>Communication:</strong> {skills.softSkills.communication.join(' & ')}</p>
          <p><strong>Teamwork:</strong> {skills.softSkills.teamwork.join(' & ')}</p>
        </div>
      )}
    </section>
  );
}

export default Skills;