import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PizzasContext from '../context/PizzasProvider';
import Button from 'react-bootstrap/Button';
import image2 from "../assets/img/carrito.png"

import './Detalle.css';

const Detalle = () => {
    const [pizzaDetail, setPizzaDetail] = useState({});
    const { pizzas, addToCart } = useContext(PizzasContext);
    const { id } = useParams();

    const obtenerDatos = () => {

        const datosPizza = pizzas.find((pizza) => pizza.id === id);
        setPizzaDetail(datosPizza || {});
    };

    useEffect(() => {
        obtenerDatos();
    }, [pizzas]);

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="card mb-3 estilos">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={pizzaDetail.img}
                                className="img-fluid estilos rounded-start"
                                alt={pizzaDetail.name} />
                        </div>

                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">
                                    {pizzaDetail.name}
                                </h5>
                                <p className="card-text">{pizzaDetail.desc}</p>
                                <ul>
                                    {pizzaDetail.ingredients?.map((ingredient, i) => (
                                        <li key={i}> {ingredient}</li>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-around">
                                    <h4>Precio: ${pizzaDetail.price}</h4>
                                    <Button
                                    onClick={() => addToCart(pizzaDetail)}
                                    variant="success"
                                > <img src={image2} width="20px" /> Añadir</Button>
                                    
                                   
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};


export default Detalle;