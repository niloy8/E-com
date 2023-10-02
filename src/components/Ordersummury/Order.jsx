import React from 'react';
import './order.css';
const Order = () => {
    return (
        <div className='order'>
            <h3 style={{ textAlign: 'center', paddingTop: '10px' }}>Order Summary</h3>
            <div className="calculation">
                <h4>Selected item - </h4>
                <h4>Price - <small>$</small></h4>
                <h4>Shipping - <small>$</small></h4>
                <h4>Tax - <small>$</small></h4>
            </div>
            <h3>Grand Total - </h3>
        </div>
    );
};

export default Order;