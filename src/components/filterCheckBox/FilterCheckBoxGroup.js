import React, { useState } from 'react'
import PropTypes from 'prop-types';
import "./FilterCheckBoxGroup.css";
import FilterCheckBox from './FilterCheckBox';
import { contains } from '../../utils';

/**
 * This is a composit component composed of a checbox list along with a searching box.
 * Searching box helps with filtering checbox list.
 * Inorder to make a chose, user should check one or more checbox
 */
function FilterCheckBoxGroup({name, options, onChange, ...props }) {
  const [searchKey, setSearchKey] = useState(undefined);
  const [selections, setSelections] = useState(new Set());

  const onSearching = (val) => {
    const value = val.target.value;
    console.log("onSearching:", value);
    if (value === undefined || value.length < 2)
      setSearchKey(undefined);
    else
      setSearchKey(value);
  };

  const onAllCheckedChanged = (val) => { console.log("onAllCheckedChanged:", val.target.value) };
  const onCheckedChanged = (val) => { console.log("onCheckedChanged:", val) };

  const filteredOptions = searchKey === undefined ? options : options.filter(x=> contains(x.name, searchKey));
  const optionCount = filteredOptions ? filteredOptions.reduce((total, next) => total + (next.quantity || 0), 0) : 0;

  return (
    <div className='FilterCheckBoxGroup'>
      <input type="search" className="filter-search" name="filterSearch" placeholder={`Search ${name}`} onChange={onSearching} autocomplete="off"/>
      <div id='filter-option-wrap'>
        {optionCount > 0 && <FilterCheckBox name={"All"} quantity={optionCount} onChange={onAllCheckedChanged} />}
        {optionCount > 0 && filteredOptions.map(brd=>{ return <FilterCheckBox {...brd} onChange={onCheckedChanged} /> })}
        {optionCount === 0 && <span>No options to be shown!</span>}
      </div>
    </div >
  )
}

FilterCheckBoxGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default FilterCheckBoxGroup
