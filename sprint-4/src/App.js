import {Routes, Route} from "react-router-dom";
import './App.css';
import {Home} from './components/Home.jsx';
import {Prerequsite} from './components/Prerequsite.jsx';
import {Info} from './components/Info.jsx';
import {Register} from './components/Register.jsx';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path = "/" element ={ <Home /> } />
         <Route path = "/Prerequsite" element ={ <Prerequsite /> } />
         <Route path = "/Info" element ={ <Info /> } />
         <Route path = "/Register" element ={ <Register /> } />
       </Routes>
    </div>
  );
}

export default App;
