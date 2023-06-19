import React from "react";
import { AppointmentTile } from "../tile/AppointmentTile";

export const AppointmentTileList = ({ appointments }) => {
  return (
    <div>
      {appointments.map((appointment, index) => (
        <AppointmentTile key={index} appointment={appointment} />
      ))}
    </div>
  );
};



