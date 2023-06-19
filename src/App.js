import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import HomePage from "./containers/homepage/HomePage";

function App() {
  const [contacts, setContacts] = useState([]); // State variable for contacts
  const [appointments, setAppointments] = useState([]); // State variable for appointments

  // Function to add a new contact
  const addContact = (name, phone, email) => {
    const newContact = { name, phone, email };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Function to add a new appointment
  const addAppointment = (name, contact, date, time, reason) => {
    const newAppointment = { name, contact, date, time, reason };
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
