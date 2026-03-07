import { useState } from 'react'
import './App.css' 

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
      
      <footer>
        <p>&copy; 2026 Erin B. Lacson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;