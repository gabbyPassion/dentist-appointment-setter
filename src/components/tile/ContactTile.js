import React from "react";

export const ContactTile = ({ name, phone, email }) => (
        <div>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>        
        </div>
);