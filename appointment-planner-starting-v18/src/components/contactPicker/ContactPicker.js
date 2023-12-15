import React from "react";

export const ContactPicker = ({ contact, contacts, onChange }) => {
  let options = contacts.map((c, i) => (
    <option key={i} value={c.name}>
      {c.name}
    </option>
  ));
  return (
    <div>
      <select value={contact} onChange={onChange} required>
        <option value="">No Contact Selected</option>
        {options}
      </select>
    </div>
  );
};
