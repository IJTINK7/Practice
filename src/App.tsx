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
			<Rating value={5}/>
			<Rating value={2}/>
			<div>developer login branch commit</div>
			<div>developer login branch commit 2</div>
			<div>developer popup branch commit 1</div>
			<div>developer popup branch commit 2</div>
			<div>new changes</div>
			<div>new changes again</div>
			<div>23423423</div>
			<div>11123</div>
			<Post />
		</div>
	)
}
//Changing the path of repository again
export default App;
