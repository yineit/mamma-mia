import { useContext } from 'react'
import { Container, Table } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { formatNumber } from '../helpers/formatNumber';
import PizzasContext from '../context/PizzasProvider';

const Carrito = () => {
    const { carrito, increment, decrement } = useContext(PizzasContext);
    const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <>
            <Navbar />
            <Container className='my-5'>
                <h2>Detalles del pedido:</h2>
                <hr />
                <Table className='mt-5' striped bordered hover>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>Pizza</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((item, p) => (
                            <tr key={p}>
                                <td className='text-capitalize text-start me-5'>
                                    <img src={item.img} alt="" width="70px" className='mx-3' />
                                    <b>Pizza {item.name}</b>
                                </td>
                                <td>
                                    <b>${formatNumber(item.price)}</b>
                                </td>
                                <td>
                                    <button
                                        onClick={() => decrement(p)}
                                        className='btn btn-warning'
                                    >
                                        -
                  </button>
                                    <b className="mx-2">
                                        {item.counter}
                                    </b>
                                    <button
                                        onClick={() => increment(p)}
                                        className='btn btn-success'
                                    >
                                        +
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h4 className='my-4'>Total a Pagar: ${formatNumber(total)}</h4>
                <button className='btn btn-success'>
                    Ir a Pagar
        </button>
            </Container>
        </>
    )
}

export default Carrito;