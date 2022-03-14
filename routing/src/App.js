import {Routes, Route} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {  <Home />}/>
        <Route path = "about" element = { <About />}/>
        <Route path = "users/*" element = { <Users />}>
            {/* <Route path = "new" element = { <User />} /> */}
        </Route>
        {/* <Route path = "users/:cake" element ={<User />}/> */}
        <Route path = "*" element ={<NotFound  />}/>
      </Routes>
    </div>
  );
}

export default App;
