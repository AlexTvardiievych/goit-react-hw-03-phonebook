import React from 'react';
import { PageTitle } from './Title.styled';

function Title({ marginT, marginR, marginL, text, size, color }) {
  return (
    <PageTitle
      marginT={marginT}
      marginR={marginR}
      marginL={marginL}
      color={color}
      size={size}
    >
      {text}
    </PageTitle>
  );
}

export default Title;
