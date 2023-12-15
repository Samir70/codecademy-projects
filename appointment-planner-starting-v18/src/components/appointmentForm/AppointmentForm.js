import React from "react";
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
  handleSubmit
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Appointment title" required
        />

        <ContactPicker
          contact={contact} contacts={contacts}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="date" value={date}
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Appointment date" required
        />

        <input
          type="time" value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Appointment time" required
        />

        <input type="submit" value="Add appointment" />
      </form>
    </div>
  );
};
