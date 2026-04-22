import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(error => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <section className="card">
      <h2>Saved Contacts</h2>
      {contacts.length === 0 ? (
        <p>Luz. It me.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> ({contact.email}): {contact.message}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ContactList;