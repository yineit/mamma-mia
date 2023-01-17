import { useContext } from 'react';
import PizzasContext from '../context/PizzasProvider';
import { Link } from 'react-router-dom';
import { formatNumber } from '../helpers/formatNumber';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from "../assets/img/logo_mammamia.png"
import image2 from "../assets/img/carrito.png"

const Menu = () => {
    const { carrito } = useContext(PizzasContext);
    const total = carrito.reduce((a, { count, price }) => a + price * count, 0);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="logo-nombre mx-1 mb-0">
                        <Navbar.Brand><img src={image} width="200px" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/carrito" className="logo-nombre mx-1 mb-0">
                            <Navbar.Text>
                                <img src={image2} width="25px" />  Total: ${formatNumber(total)}
                            </Navbar.Text>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Menu;