import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { ContactTileList } from "../../components/tileList/ContactTileList";


export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");      
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2>
        <p>
          Fill out the form, click the Add Contact button and then click on Appointments to proceed.
        </p>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}          
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ContactTileList contacts={contacts} />
      </section>
    </>
  );
};
