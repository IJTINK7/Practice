import React, {useState} from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";
import ToDoList from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";
import {Counter} from "./Counter";
import {Currency} from "./Currency";


function App() {


	let [tasks, setTasks] = useState([
		{id: 1, checked: true, name: "HTML"},
		{id: 2, checked: true, name: "CSS"},
		{id: 3, checked: true, name: "JS"},
		{id: 4, checked: false, name: "React"},
		{id: 5, checked: false, name: "TS"},
	]);

	const removeTaskFunction = (taskId:number)=>{
		setTasks(tasks.filter(el => el.id !== taskId));
	}

	let [filterButtonValue, setFilterButtonValue] = useState('All');
	let filteredTasks = tasks;

	const filterButtonClick =(keyValue:string)=>{
		setFilterButtonValue(keyValue)
	}
	if(filterButtonValue === "Active"){
		filteredTasks = tasks.filter(el=> !el.checked)
	}
	if(filterButtonValue === "Completed"){
		filteredTasks = tasks.filter(el=> el.checked)
	}

	return (
		<div className="App">
			<Greeting/>
			<ToDoList title={"What to learn?"} list={filteredTasks} removeTask={removeTaskFunction} filterButtonClick={filterButtonClick}/>
			<hr/>
			<Rating value={3}/>
			<Rating value={5}/>
			<Rating value={2}/>
			<hr/>
			<Currency/>
			<hr/>
			<TestFilterComponent/>
			<hr/>
			<Counter />

		</div>
	)
}
export default App;
