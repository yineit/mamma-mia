import { createContext, useState, useEffect } from 'react';
const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        getPizzas();

    }, []);

    const getPizzas = async () => {
        const res = await fetch('/pizzas.json');
        const pizzas = await res.json();
        setPizzas(pizzas);
    };

    const addToCart = ({ id, price, name, img }) => {
        const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };
        if (productoEncontradoIndex >= 0) {
            carrito[productoEncontradoIndex].count++;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, producto]);
        }

    };

    const increment = (i) => {
        carrito[i].count++;
        setCarrito([...carrito]);
    };

    const decrement = (i) => {
        const { count } = carrito[i];
        if (count === 1) {
            carrito.splice(i, 1);
        } else {
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    };

    return (
        <PizzasContext.Provider
            value={{ pizzas, carrito, setCarrito, addToCart, increment, decrement }}>
            {children}
        </PizzasContext.Provider>


    );

};
export { PizzasProvider };
export default PizzasContext;