import Card from "./Card";
import profileImage from "../assets/profile.jpeg";  // ADD THIS

function About() {
  return (
    <Card title="About Me">
      <img src={profileImage} alt="Profile photo of Erin B. Lacson" width="250" />
      <p>Creative and detail-oriented designer with a passion for crafting intuitive user experiences and visually engaging interfaces. Skilled in UI/UX design, visual storytelling, and modern web development practices.</p>
      <p>My career goal is to design products that not only look beautiful but also function seamlessly, allowing me to collaborate effectively with developers, product managers, and clients.</p>
    </Card>
  );
}

export default About;