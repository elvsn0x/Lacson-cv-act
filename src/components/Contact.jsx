import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Sending data:", { name, email, message }); // Debug line
    
    // Send data to PHP API
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name: name,
        email: email,
        message: message 
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Response from PHP:", data); // Debug line
      alert(data.message);
      if (data.message === "Data saved successfully") {
        setName("");
        setEmail("");
        setMessage("");
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Error connecting to server: " + error);
    });
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <p>Visit my portfolio: <a href="https://www.example.com" title="Visit my portfolio website">Portfolio Website</a></p>
      
      <form onSubmit={handleSubmit}>
        <input 
          id="contactName"
          name="contactName"
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          id="contactEmail"
          name="contactEmail"
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea 
          id="contactMessage"
          name="contactMessage"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;