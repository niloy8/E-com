import React, { useEffect, useState } from 'react';
import './cast.css'
import Product from '../Product/Product';
import Order from '../Ordersummury/Order';
const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddtocart = (product) => {
        console.log(product);
    }
    return (
        <div className="shop-container">
            <div className='cart'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtocart={handleAddtocart}></Product>)
                }
            </div>
            <div className="orders">
                <Order></Order>
            </div>
        </div>

    );
};

export default Cart;