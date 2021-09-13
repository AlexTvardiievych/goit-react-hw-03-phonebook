import React from 'react';
import { Btn } from './Button.styled';

function Button({ text, onClick, title }) {
  return (
    <Btn title={title} onClick={onClick}>
      {text}
    </Btn>
  );
}

export default Button;
