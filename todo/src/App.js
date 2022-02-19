
import './App.css';
import {Todo} from "./components/Todo.jsx";


function App() {
  return (
    <div className="App">
      <div className = "center_div">
          <h1>TODO List</h1>
          <Todo />
      </div>
    </div>
  );
}

export default App;
