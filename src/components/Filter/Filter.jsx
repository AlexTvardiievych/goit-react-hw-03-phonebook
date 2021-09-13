import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Utils/Title/Title';
import Input from '../Utils/Input/Input';
import { Container } from './Filter.styled';

function Filter({ placeholder, value, onChange }) {
  return (
    <Container>
      <Title size={18} text="Find Contacts by name" />
      <Input
        placeholder="type to find contacts..."
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
