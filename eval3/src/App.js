import './App.css';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import { Products } from './components/Products';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path ="/"  element ={<Home />}/>
       <Route path ="/login"  element ={<Login />}/>
       <Route path ="/register"  element ={<Register />}/>
       <Route path ="/product"  element ={<Products />}/>
       <Route path ="/product/:id"  element ={<ProductDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
