import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactSelector';
import { filterContactsAction } from 'redux/contacts/contacts-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const filt = useSelector(state => state.contacts.filter);
  console.log(filt);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContactsAction(e.target.value))}
          placeholder="Filter contacts"
        />
      </label>
    </div>
  );
};

export default Filter;
