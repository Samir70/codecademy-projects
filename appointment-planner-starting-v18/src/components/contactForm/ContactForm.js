import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name" required
        />
        <input
          type="text" value={phone}
          pattern="^0\d{4}-\d{3}-\d{3}$"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (0NNNN-NNN-NNN)" required
        />
        <input
          type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" required
        />
        <input type="submit" value="Add contact" />
      </form>
    </div>
  );
};

