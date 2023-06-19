import React from "react";

export const AppointmentTile = ({ appointment }) => {
  // Check if appointmentDetails is defined
  if (!appointment) {
    return null;
  }

  const { name, contact, date, time, reason } = appointment;

  return (
    <div className="tile-container">
      <p className="tile-title tile">{name}</p>
      <p>Contact: {contact}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Reason: {reason}</p>
    </div>
  );
};
