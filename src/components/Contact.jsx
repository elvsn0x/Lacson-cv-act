import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      // Clear the form after successful submission
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="Contact" className="card">
      <h2>Contact Me</h2>
      <p>Visit my portfolio: <a href="https://www.example.com" title="Visit my portfolio website">Portfolio Website</a></p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;