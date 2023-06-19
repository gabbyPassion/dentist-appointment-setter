import React, { useMemo } from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  setReason,
  reason,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Appointment Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Appointment Name"
          aria-label="Appointment Name"
        />
      </label>
      <br />
      <label>Contact
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>Date
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Date Picker"
        />
      </label>
      <br />
      <label>Time
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time Picker"
        />
      </label>
      <label htmlFor="setReason">Reason for Visit
      <input
        type="text"
        name="reason"
        id="reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
        placeholder="For example: Examination, or Teeth cleaning, etc."
        aria-label="Reason for Visit"
        className="reason-textarea"
      ></input>
      </label>
      <br />
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
  );
};


