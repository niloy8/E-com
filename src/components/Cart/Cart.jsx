import React, { useEffect, useState } from 'react';
import './cast.css'
import Product from '../Product/Product';
import Order from '../Ordersummury/Order';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../assets/utilities/fakedb';
import { Link } from 'react-router-dom';
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
        console.log(product)
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            console.log(remaining);
            newCart = [...remaining, exist];

        }
        setCart(newCart);
        addToDb(product.id);
    }


    /**CLEAR CART */
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Order cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link className='btn-link' to={"/Order Review"}><button className='btn-review'>Rewview Order<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M11.3789 3.85556L12.4524 2.78202C12.907 2.32745 13.642 2.32745 14.0918 2.78202L23.4925 12.1779C23.9471 12.6325 23.9471 13.3675 23.4925 13.8172L14.0918 23.218C13.6372 23.6725 12.9022 23.6725 12.4524 23.218L11.3789 22.1444C10.9195 21.685 10.9292 20.9355 11.3982 20.4858L17.2253 14.9343H3.32733C2.68418 14.9343 2.16675 14.4169 2.16675 13.7737V12.2263C2.16675 11.5831 2.68418 11.0657 3.32733 11.0657H17.2253L11.3982 5.51422C10.9243 5.0645 10.9147 4.31495 11.3789 3.85556Z" fill="white" />
                    </svg></button></Link>
                </Order>
            </div>
        </div>

    );
};

export default Cart;