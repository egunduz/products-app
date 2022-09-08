import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is a toggle button specified for product filter represented in product browser
 */
export const ItemType = ({ name, ...props }) => {
    const [active, setActive] = React.useState(props.active || false);

    const onToggle = () => {
        let newStatus = !active;
        setActive(newStatus);
        props && props.onToggle({ name, active: newStatus });
    };

    return (
        <div className={active ? 'chips chips-active' : 'chips'} onClick={onToggle}>{name}</div>
    );
}

/**
 * the TypeFilter rises an onChange event to inform parent form about tags filter selected/deselected by user 
 */
export default function TypeFilter({types, ...props}) {
    const [filter, setFilter] = React.useState(new Set());

    const handleToggle = (item) => {
        const newFilter = filter;
        if (item.active === true)
            newFilter.add(item.name);
        else if (filter.has(item.name))
            newFilter.delete(item.name);

        setFilter(newFilter);

        props.onChange && props.onChange(Array.from(newFilter.values()));
    };

    return (
        <div className='item-types'>
            {types && types.map(typ => { return <ItemType name={typ.name} onToggle={handleToggle} /> })}
        </div>

    );
}

TypeFilter.propTypes = {
    types: PropTypes.array,
    onChange: PropTypes.func,
}