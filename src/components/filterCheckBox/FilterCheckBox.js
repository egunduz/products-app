import React from 'react'
import PropTypes from 'prop-types';
import "./FilterCheckBox.css";

/**
 * checbox that is used in product browsering/filtering page
 */
function FilterCheckBox({ name, value, quantity, checked, onChange, ...props }) {
  const onCheckedChanged = (val) => { 
    onChange && onChange({name, value, checked: val.target.checked});
  };

  return (
    <div className='FilterCheckBox'>
      <input type="checkbox" className="filter-chb" name="filterCheck" value={value} onChange={onCheckedChanged} checked ={checked} />
      <label for="filterCheck">{name} <span>({quantity})</span></label>
    </div >
  )
}

FilterCheckBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  quantity: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default FilterCheckBox
