import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { AppointmentTileList } from "../../components/tileList/AppointmentTileList";
import { appointments } from "../../components/appointmentsArray/appointmentsArray";

export const AppointmentsPage = ({ contacts, addAppointment }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  
  // Update the state variable and its setter function
  const [appointmentList, setAppointmentsList] = useState(appointments);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      name,
      contact,
      date,
      time,
      reason
    };
    // Update the state variable instead of calling the callback function
    setAppointmentsList( [...appointmentList, newAppointment]);
    setName("");
    setContact("");
    setDate("");
    setTime("");
    setReason("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <p>
        Fill out the form, then click the Add Appointment button to complete booking.
        </p>
        <AppointmentForm
          contacts={contacts}
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          reason={reason}
          setReason={setReason}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* Use the updated appointmentList state variable */}
        <AppointmentTileList appointments={appointmentList} />
      </section>
    </div>
  );
};
