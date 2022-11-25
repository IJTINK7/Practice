import React from 'react';
import './App.css';
import {Greeting} from "./Greeting";
import {Rating} from "./Rating";
import {ToDoList} from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";
import {Counter} from "./Counter";
import {Currency} from "./Currency";


function App() {
	return (
		<div className="App">
			<Greeting/>
			<ToDoList title={"What to learn?"}/>
			<hr/>
			<Rating value={3}/>
			<Rating value={5}/>
			<Rating value={2}/>
			<hr/>
			<Currency/>
			<hr/>
			<TestFilterComponent/>
			<hr/>
			<Counter/>
		</div>
	)
}
export default App;
