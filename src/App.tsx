import React from 'react';
import './App.css';
import {Site} from "./components/Site";

function App() {
    return (
        <div className="App">
            <Site/>
        </div>
    );
}

export default App;


//Local Storage 1-2-3 videos

//import React, {useState} from 'react';
// import './App.css';
// import {Site} from "./components/Site";
//
//
// function App() {
//     const [value, setValue] = useState(0)
//      const incrementHandler = () => {
//         setValue(value + 1)
//      }
//      const setToLocalStorageHandler = () => {
//         localStorage.setItem("counterValue", JSON.stringify(value))
//         localStorage.setItem("counterValue + 1", JSON.stringify(value + 1))
//      }
//     const getFromLocalStorageHandler = () => {
//         let valueAsString = localStorage.getItem("counterValue")
//         if(valueAsString){
//             let newValue = JSON.parse(valueAsString)
//             setValue(newValue)
//         }
//     }
//     const clearLocalStorageHandler = () => {
//       localStorage.clear()
//         setValue(0)
//     }
//     const removeItemLocalStorageHandler = () => {
//       localStorage.removeItem("counterValue + 1")
//     }
//     return (
//         <div className="App">
//             {/*<Site/>*/}
//             <h1>LocalStorage</h1>
//             <h2>{value}</h2>
//             <button onClick={incrementHandler}>+</button>
//             <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
//             <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
//             <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
//             <button onClick={removeItemLocalStorageHandler}>removeItemLocalStorage</button>
//         </div>
//     );
// }
//
//
// export default App;


//Local Storage 4th video


//import React, {useEffect, useState} from 'react';
// import './App.css';
// import {Site} from "./components/Site";
//
//
// function App() {
//     const [value, setValue] = useState(0)
//     useEffect(()=>{
//         let valueAsString = localStorage.getItem("counterValue")
//         if(valueAsString){
//             let newValue = JSON.parse(valueAsString)
//             setValue(newValue)
//         }
//     }, [])
//     useEffect(()=>{
//         localStorage.setItem("counterValue", JSON.stringify(value))
//     }, [value])
//
//      const incrementHandler = () => {
//         setValue(value + 1)
//      }
//     return (
//         <div className="App">
//             {/*<Site/>*/}
//             <h1>LocalStorage</h1>
//             <h2>{value}</h2>
//             <button onClick={incrementHandler}>+</button>
//         </div>
//     );
// }
//
//
// export default App;