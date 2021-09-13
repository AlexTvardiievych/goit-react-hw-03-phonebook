import React from 'react';
import { Field } from './Input.styled';

function Input({ value, type, name, onChange, placeholder }) {
  return (
    <Field
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
