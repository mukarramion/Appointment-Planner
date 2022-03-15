import React from "react";

export const ContactPicker = ({name,contacts,onChange}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={''} key={-1} selected='selected'>No Contact Selected</option>
      {contacts.map((contact,index)=>(
        <option key={index} value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
