import {Routes, Route} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/product" element = {<Products/>}/>
        <Route path = "/product/:id" element = {<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
