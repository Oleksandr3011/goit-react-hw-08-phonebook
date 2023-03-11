import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';
import { selectFilteredContacts } from 'redux/contacts/contactSelector';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const delateContact = id => dispatch(deleteContactsThunk(id));

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contact = contacts.map(({ name, number, id }) => (
    <li key={id} className={css.item}>
      <p className={css.itemText}>
        {name} : {number}
      </p>
      <button
        className={css.itemButton}
        onClick={() => delateContact(id)}
        type="button"
      >
        Delate
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
}

export default ContactList;
