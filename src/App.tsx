import React from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";
import ToDoList from "./ToDoList";

function App() {
	return (
		<div className="App">
			<Greeting/>
			<ToDoList/>
			<Rating value={3}/>
		</div>
	);
}
export default App;
