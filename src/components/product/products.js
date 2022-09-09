import React from 'react'
import PropTypes from 'prop-types';
import './products.css';

/**
 * this component represents Product card and the list of product cards.
 * It rises an onAdd event to dispatch the add action to the parent form.
 * Here we can directly use redux store dispatching basket add action however I prefered keeping this comp. simple
 */
export default function ProductSlection({ products, ...props }) {
    const onAddClicked = (product) => {
        props.onAdd && props.onAdd(product);
    };

    const renderProduct = (prod) => {
        return (<div className='product-card'>
            <div className='product'>
                <div className='product-image'><div className='image-area'></div></div>
                <div className='product-price'>&#8378; {prod.price}</div>
                <div className='product-name'>{prod.name}</div>
            </div>
            <div className='add-botton' onClick={()=>{ onAddClicked(prod)}}>Add</div>
        </div>)
    }

    const renderProductList = () => {
        if (products === undefined || products.length === 0) return <div className='no-product-listed'><h4>No product to be listed. Please check filter options.</h4></div>;

        return <div className='product-list'>{products.map(prod => { return renderProduct(prod) })}</div>
    }

    return (
        <div id="ProductSlection">
            {renderProductList()}
        </div>);
}

ProductSlection.propTypes = {
    products: PropTypes.array,
    onAdd: PropTypes.func
}