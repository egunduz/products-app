import React from 'react'
import { Radio, Space, } from 'antd';
import PropTypes from 'prop-types';
import { SortingCode } from '../../_constants';

const options = [
    { name: "Price low to heigh", value: SortingCode.LowToHeigh },
    { name: "Price heigh to low", value: SortingCode.HeighToLow },
    { name: "New to old", value: SortingCode.NewToOld },
    { name: "Old to new", value: SortingCode.OldToNew },
];

/**
 * This is a radio group component.
 * It provides sorting options to the user and rise an onChange event to inform parent form
 * @param {*} props 
 */
export default function SortingOption(props) {
    const onChange = (e) => {
        props.onChange && props.onChange(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} defaultValue={SortingCode.LowToHeigh}>
            <Space direction="vertical">
                {options.map(opt => { return <Radio value={opt.value}>{opt.name}</Radio> })}
            </Space>
        </Radio.Group>
    );
}

SortingOption.propTypes = {
    onChange: PropTypes.func
}