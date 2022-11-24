import React, {useState} from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";
import ToDoList from "./ToDoList";

function App() {
	let [count, setCount] = useState(0);
	const clickButton= () =>{
		setCount(++count);
	}
	return (
		<div className="App">
			<Greeting/>
			<ToDoList/>
			<Rating value={3}/>
			<Rating value={5}/>
			<Rating value={2}/>
			<div>developer login branch commit</div>
			<div>developer login branch commit 2</div>
			<div>developer popup branch commit 1</div>
			<div>developer popup branch commit 2</div>
			<div>
				<p>You clicked {count} times </p>
				<button onClick={clickButton}>Click me</button>
			</div>

		</div>
	)
}
//Changing the path of repository again
export default App;
