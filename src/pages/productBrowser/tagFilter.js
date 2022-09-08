import React from 'react';
import PropTypes from 'prop-types';
import FilterCheckBoxGroup from '../../components/filterCheckBox/FilterCheckBoxGroup';

const tags = [
    { name: "Beach", value: "Beach", quantity: 1 },
    { name: "People", value: "People", quantity: 18 },
    { name: "Outdoor", value: "Outdoor", quantity: 3 },
];

/**
 * TagFilter provides tag filter options to the user and rises an onChange event
 * Due to the limited time the tag options are defined manuely
 * @param {*} props 
 */
export default function TagFilter(props) {
    const onChange = (checkedValues) => {
        props.onChange && props.onChange(checkedValues);
    };

    return (
        <FilterCheckBoxGroup name={"tag"} options={tags} onChange={onChange} />
    );
}

TagFilter.propTypes = {
    items: PropTypes.array
}