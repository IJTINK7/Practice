import React from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";

function App() {
	return (
		<div className="App">
			<h1>Hello, samurai! Let's go!</h1>
			<Greeting/>
			<Rating value={3}/>
		</div>
	);
}
export default App;
