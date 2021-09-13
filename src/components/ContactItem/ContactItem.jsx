import React from 'react';
import PropTypes from 'prop-types';
import { Name, Number } from './ContactItem.styled';

function ContactItem({ contact }) {
  return (
    <>
      <Name>{contact.name}</Name>
      <Number>{contact.number}</Number>
    </>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
