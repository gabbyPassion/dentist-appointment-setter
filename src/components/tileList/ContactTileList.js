import React from "react";
import { ContactTile } from "../tile/ContactTile";

export const ContactTileList = ({ contacts }) => (
        <div>
        {contacts.map((contact, index) => (
            // I'm spreading the contact object here, so that each property of the object is passed as an individual prop.
            <ContactTile {...contact} key={index} />
        ))}
        </div>
)

