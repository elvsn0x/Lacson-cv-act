import { useState } from 'react'
import './index.css'

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";  // ← ADD THIS LINE

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = {
    programmingLanguages: ["HTML", "CSS", "JavaScript"],
    developmentSkills: ["Web Design", "Responsive Development", "Version Control (Git)", "Problem Solving"],
    softSkills: {
      communication: ["Written communication", "Verbal presentation"],
      teamwork: ["Collaboration", "Leadership"]
    }
  };

  const education = [
    {
      year: "2023-Present",
      program: "Bachelor of Science in Information Technology",
      school: "University of Science and Technology of Southern Philippines"
    },
    {
      year: "2020-2023",
      program: "Senior High School",
      school: "Liceo De Cagayan University"
    },
    {
      year: "2016-2020",
      program: "High School",
      school: "Pilgrim Christian College"
    },
    {
      year: "2009-2016",
      program: "Elementary",
      school: "Cagayan de Oro Christian School"
    } 
  ];

  console.log("Education array:", education);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header />
      
      <button 
        id="themeToggle" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      
      <div className="container">
        <main>
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
          <ContactList />  {/* ← ADD THIS LINE */}
        </main>
      </div>
      
      <footer>
        <p>&copy; 2026 Erin B. Lacson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;