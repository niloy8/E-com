import React, { useEffect, useState } from 'react';
import './cast.css'
import Product from '../Product/Product';
import Order from '../Ordersummury/Order';
const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddtocart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                <Order cart={cart}></Order>
            </div>
        </div>

    );
};

export default Cart;