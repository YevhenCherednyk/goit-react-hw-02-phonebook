import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li key={id}>
      {name} : {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
