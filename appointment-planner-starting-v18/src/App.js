import React from "react";
import { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = { name, phone, email };
    setContacts([...contacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const newApp = { name, contact, date, time };
    setAppointments([...appointments, newApp]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={
        <ContactsPage contacts={contacts} updateContacts={addContact} /> /* Add props to ContactsPage */
      } />
      <Route path={ROUTES.APPOINTMENTS} element={
        <AppointmentsPage
          apps={appointments}
          contacts={contacts}
          updateApps={addAppointment} /> /* Add props to AppointmentsPage */
      } />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
