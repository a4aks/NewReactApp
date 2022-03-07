import "./App.css";
import { useState, useRef } from "react";

function App() {
  // const [value, setValue] = useState("");
  // // const placeRef = useRef();
  // // const ageRef = useRef();
  // // const nameRef = useRef();
  const [timer, setTimer] = useState(0);
  // const [timerId, setTimerId] = useState();

  const timerId = useRef();

  const startTimer = () => {
    if (!timerId.current) {
      const id = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      timerId.current = id;
    }
  };

  const endAT10 = () => {
    if (!timerId.current) {
      const id = setInterval(() => {
        setTimer((prev) => {
          if(prev < 10) return prev+1
          else{
            clearInterval(id);
           timerId.current = null;
            return prev;
          }
        })
      }, 1000);
      timerId.current = id;
    }
  }

  const pauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTimer(0);
  };
  return (
    <div className="App">
      {" "}
      {/* <h1> Input </h1>{" "}
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            <button
              onClick={() => {
                if (placeRef.current.value) {
                  if(ageRef.current.value){
                    nameRef.current.value = value;
                    nameRef.current.focus();
                  }else{
                    ageRef.current.value = value;
                    ageRef.current.focus();
                  }
                } else {
                  placeRef.current.value = value;
                  placeRef.current.focus();
                }
                setValue("");
              }}
            >
              Go to xyz
            </button>
            <div>
              <input placeholder="name" ref = {nameRef}/>
            </div>
            <div>
              <input placeholder="age" ref={ageRef} />
            </div>
            <div>
              <input placeholder="place" ref={placeRef} />
            </div> */}{" "}
      <h1> Stop Watch: {timer} </h1>{" "}
      <button onClick={startTimer}> Start </button>{" "}
      {/* <button onClick={endAT10}>Start and End at 10</button> */}
      <button onClick={pauseTimer}> Pause </button>{" "}
      <button onClick={resetTimer}> Reset </button>{" "}
    </div>
  );
}

export default App;
