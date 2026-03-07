import { useState } from "react";

function Skills() {
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
        <div id="Skills" className="card">
          <h2>Technical Skills</h2>
          
          <h3>Programming Languages</h3>
          <p>HTML, CSS, JavaScript</p>

          <h3>Development Skills</h3>
          <p>Web Design, Responsive Development, Version Control (Git), Problem Solving</p>

          <h3>Soft Skills</h3>
          <p><strong>Communication:</strong> Written communication & Verbal presentation</p>
          <p><strong>Teamwork:</strong> Collaboration & Leadership</p>
        </div>
      )}
    </section>
  );
}

export default Skills;