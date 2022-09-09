import React from 'react';
import PropTypes from 'prop-types';
import FilterCheckBoxGroup from '../../components/filterCheckBox/FilterCheckBoxGroup';
import { TagOptions } from '../../_constants';

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
        <FilterCheckBoxGroup name={"tag"} options={props.options} onChange={onChange} />
    );
}

TagFilter.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array
}

TagFilter.defaultProps = {
    options: TagOptions
}