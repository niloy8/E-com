import { getShoppingCart } from "../../assets/utilities/fakedb";

const Cartloder = async () => {
    const loadData = await fetch("products.json");
    const data = await loadData.json();


    const storedData = getShoppingCart();
    const setCart = [];
    console.log(storedData);

    for (const id in storedData) {
        const addedProduct = data.find(pd => pd.id === id);
        addedProduct.quantity = storedData[id];
        setCart.push(addedProduct);
    }
    return setCart;
}

export default Cartloder;