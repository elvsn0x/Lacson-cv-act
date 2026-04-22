import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to PHP API
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
    .then(res => res.json())
    .then(data => {
    if (data.message) {
    alert(data.message);
    } else {
    alert("Unexpected error occurred.");
    }
    setName("");
    setEmail("");
    setMessage("");
  })
  .catch(error => {
    alert("Error connecting to server: " + error);
  });
  };

  return (
    <section className="card">
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
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;