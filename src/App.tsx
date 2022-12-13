import React from 'react';
import './App.css';
import {Greeting} from "./Greeting";
import {Rating} from "./Rating";
import {ToDoList} from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";
import {Counter} from "./Counter";
import {Currency} from "./Currency";
import {NewComponent} from "./NewComponent";
import {Input} from "./Input";
import {OnOff} from "./OnOff/OnOff";
import {User} from "./callBack/callBack";
import {Accordion} from "./Accordion/Accordion";



function App() {
	return (
		<div className="App">
			<Greeting/>
			<ToDoList title={"What to learn?"}/>
			<hr/>
			<Rating value={3}/>
			<Rating value={1}/>
			<Rating value={4}/>
			<hr/>
			<Currency/>
			<hr/>
			<TestFilterComponent/>
			<hr/>
			<Counter/>
			<NewComponent/>
			<Input/>
			<OnOff />
			<User/>
			<Accordion />
		</div>
	)
}

export default App;
