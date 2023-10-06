import React, { useEffect, useState } from 'react';
import './cast.css'
import Product from '../Product/Product';
import Order from '../Ordersummury/Order';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const storedP = [];
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    useEffect(() => {
        const storedItem = getShoppingCart();
        for (const key in storedItem) {
            const storedProducts = products.find(product => product.id === key);

            if (storedProducts) {
                storedProducts.quantity = storedItem[key];
                storedP.push(storedProducts);
            }
        }
        setCart(storedP);
    }, [products])
    const handleAddtocart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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