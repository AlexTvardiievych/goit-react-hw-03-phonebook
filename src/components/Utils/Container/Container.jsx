import React from 'react';
import { Wrapper } from './Container.styled';

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
