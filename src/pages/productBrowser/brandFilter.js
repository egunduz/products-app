import React, { useState, useEffect, } from 'react'
import PropTypes from 'prop-types';
import FilterCheckBoxGroup from '../../components/filterCheckBox/FilterCheckBoxGroup';
import productApi from '../../api/productApi';

/**
 * this component helps in filtering companies on broduct browser
 */
export default function BrandFilter(props) {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        productApi.getAllCompanies()
        .then(res => res.json())
        .then(data=>{
          const brandList = data.map(item => { 
            item.value = item.account;
            item.quantity = 1; // can not calculate for now
            return item;
          })
          setBrands(brandList);
        });
    }, [])

    const onChange = (checkedValues) => {
        props.onChange && props.onChange(checkedValues);
    };

    return (<FilterCheckBoxGroup name={"brand"} options={brands} onChange={onChange} />);
}

BrandFilter.propTypes = {
  onChange: PropTypes.func
}