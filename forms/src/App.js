import './App.css';
import {useState, useRef} from 'react';
// import {Styles} from "./components/Styles.jsx";

function App() {

  const fileRef = useRef();
  const [formData, setFormData] = useState({});

  const onChangeHandle = (e)=>{
    let {name, value, type, checked} = e.currentTarget;
    console.log(name,value, type, checked);

    if(name  === "files"){
      console.log(fileRef.current.files[0].name);
    }

    if(name === 'age' && value < 18){
      console.log("You are under age");
    }

    value = type  === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  console.log(formData);
  return (
    <div className="App">
      <h1>User Form</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type = "text" name = "fname" placeholder = "first name" value = {formData.fname} onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type = "text" name = "lname" placeholder = "Last name" value = {formData.lname} onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Age</label>
          <input type = "number" name = "age" placeholder = "Your age" value = {formData.age} onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Address</label>
          <input type = "text" name = "address" placeholder = "Your Address" value = {formData.address} onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Department</label>
          <select name = "department" value={formData.department} onChange = {onChangeHandle} >
              <option value = "IT">IT</option>
              <option value = "HR">HR</option>
              <option value = "MEDICAL">MEDICAL</option>
              <option value = "SALES">SALES</option>
              <option value = "TESTING">TESTING</option>
          </select>
        </div>
        <div>
          <label>Salary</label>
          <input type = "number" name = "salary" placeholder = "Your Salary" value = {formData.salary} onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Is Married</label>
          <input checked = {formData.IsMarried} name = "married" type = "checkbox" onChange = {onChangeHandle}/>
        </div>
        <div>
          <label>Upload Profile Photo</label>
          <input ref = {fileRef} name = "files" type = "file" onChange = {onChangeHandle}/>
        </div>
        {/* <div>
          <label>Is 12th Pass?</label>
          <label>Yes</label>
          <input  name = "yes" type = "radio" onChange = {onChangeHandle}/>
          <label>No</label>
          <input  name = "yes" type = "radio" onChange = {onChangeHandle}/>
        </div> */}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
