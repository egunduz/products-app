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
function FilterCheckBoxGroup({name, options, ...props }) {
  const [searchKey, setSearchKey] = useState(undefined);
  const [filter, setFilter] = useState(new Set());
  const [preventOnChange, setPreventOnChange] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const onSearching = (val) => {
    const value = val.target.value;
    console.log("onSearching:", value);
    if (value === undefined || value.length < 2)
      setSearchKey(undefined);
    else
      setSearchKey(value);
  };

  const onAllCheckedChanged = (val) => { 
    const checkAll = val.checked === true;
    setPreventOnChange(true);
    setAllChecked(true);
    const newFilter = filter;
    newFilter.clear();
    setFilter(newFilter);
    // raise onchange event
    props.onChange && props.onChange([]);
  };

  const onCheckedChanged = (item) => {
    if (preventOnChange) return;
    // if itme is in the set
    const newFilter = filter;
    if (item.checked === true)
        newFilter.add(item.name);
    else if (filter.has(item.name))
        newFilter.delete(item.name);

    setFilter(newFilter);
    // raise onchange event
    props.onChange && props.onChange(Array.from(newFilter.values()));
  };

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
