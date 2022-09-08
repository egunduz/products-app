import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import "./Basket.css";
import { Col, Row } from 'antd'
import { selectTotalPrice, selectItems, decrement, increment} from './basketSlice.js';

/**
 * 
 * This component reptesents the basket view on the main page
 * It gets items form the redux store, hoewever, props olsu may bu used inseted of redux
 */
function Basket(props) {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const renderItem = (item) => {
    return <div>
      <Row className="basket-item-wrap">
        <Col flex={'auto'} className='basket-item'>
          <div className='item-name'>{item.name}</div>
          <div className='item-price'>{item.price}</div>
        </Col>
        <Col flex={"100x"} >
          <div className='item-actions'>
            <div className='item-action' onClick={() => dispatch(decrement(item.id))}>-</div>
            <div className='item-quantity'>{item.quantity}</div>
            <div className='item-action' onClick={() => dispatch(increment(item.id))}>+</div>
          </div>
        </Col>
      </Row>
    </div>;
  }

  const renderItems = () => {
    if (items === undefined || items.length === 0)
      return <div className="empty-basket">You have no items in the basket</div>

    return items.map(item => {
      return renderItem(item);
    });
  }
  
  return (
    <div id='Basket'>
      <div className='basket-items'>
        {renderItems()}
      </div>
      <div className='basket-footer'>
        <div className="basket-totals">
          <span className='currency'>&#8378;</span><span>{(totalPrice || 0).toFixed(2)}</span>
        </div>
      </div>
    </div >
  )
}

Basket.propTypes = {
  items: PropTypes.array
}

export default Basket
