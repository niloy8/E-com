import React from 'react';
import './order.css';
const Order = ({ cart }) => {
    console.log(cart);
    let totalPrice = 0, totalShipping = 0;

    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const total = totalPrice + totalShipping + tax;
    return (
        <div className='order'>

            <h3 style={{ textAlign: 'center', paddingTop: '10px' }}>Order Summary</h3>
            <div className="calculation">
                <h4>Selected item - {cart.length}</h4>
                <h4>Price - <small>${totalPrice}</small></h4>
                <h4>Shipping - <small>${totalShipping}</small></h4>
                <h4>Tax - <small>${tax}</small></h4>
            </div>
            <h4>Grand Total -${total}</h4>
        </div>
    );
};

export default Order;