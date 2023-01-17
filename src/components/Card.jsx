import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PizzasContext from '../context/PizzasProvider';
import { formatNumber } from '../helpers/formatNumber';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import image2 from "../assets/img/carrito.png"

const Pizzas = () => {
    const { pizzas, addToCart } = useContext(PizzasContext);
    const navigate = useNavigate();

    return (
        <>
            {pizzas.map((pizza) => (
                <div key={pizza.id} className="col">
                    <Card>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title>Pizza {pizza.name}</Card.Title>
                            <Card.Text>
                                <strong>Ingredientes:</strong>


                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item> {pizza.ingredients.map((ingredient, i) => (
                                <li key={i}> {ingredient}</li>
                            ))}</ListGroup.Item>

                        </ListGroup>
                        <Card.Body>
                            <Card.Text>

                                Precio: ${formatNumber(pizza.price)}




                            </Card.Text>
                            <div className="d-flex justify-content-around mb-2">
                                <Button
                                    to={`pizza/${pizza.id}`}
                                    onClick={() => navigate(`/pizzas/${pizza.id}`)}
                                    variant="warning"
                                >Ver más</Button>
                                <Button
                                    onClick={() => addToCart(pizza)}
                                    variant="success"
                                > <img src={image2} width="20px" /> Añadir</Button>
                            </div>


                        </Card.Body>
                    </Card>
                </div>

            ))}
        </>
    );
};


export default Pizzas;