import React, { useState } from 'react';
import './orderreview.css'
import Order from '../Ordersummury/Order';
import { useLoaderData } from 'react-router-dom';
import Review from '../ItemReview/Review';
import { removeFromDb } from '../../assets/utilities/fakedb';
const Orderreview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleCart = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className="review-container">
            <div className='review-cart'>
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        handleCart={handleCart}></Review>)
                }
            </div>
            <div className="orders">
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Orderreview;