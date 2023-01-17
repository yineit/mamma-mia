import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PizzasProvider } from './context/PizzasProvider';
import Detalle from './pages/Detalle';
import DetallePedido from './pages/DetallePedido';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="pizzas/">
            <Route path=":id" element={<Detalle />} />
          </Route>
          <Route path="pizzas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<DetallePedido />} />
          

        </Routes>
       
      </PizzasProvider>
    
    </BrowserRouter >
      
    
     
  );
}
export default App;