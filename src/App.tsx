import React, {useState} from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";
import ToDoList from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";

type FilterType = 'All' | 'Dollar' | 'Ruble';
function App() {

	let [count, setCount] = useState(0);
	const clickButton= () => {
		setCount(++count);
	}
	let money = [
		{banknote: 'dollar', nominal: 100, number: ' a1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' z1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' w1234567890'},
		{banknote: 'dollar', nominal: 100, number: ' e1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' c1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' r1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' x1234567890'},
		{banknote: 'ruble', nominal: 50, number: ' v1234567890'}
	];
	let[buttonValue, setButtonValue] = useState<FilterType>("All");
	let filteredMoney = money;
	if (buttonValue === 'Ruble'){
		filteredMoney = money.filter(el=>el.banknote === 'ruble')
	}
	if (buttonValue === 'Dollar'){
		filteredMoney = money.filter(el=>el.banknote === 'dollar')
	}
	let clickButtonFunction =(keyValue:FilterType)=>{
		setButtonValue(keyValue);
	}

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
			<Rating value={3}/>
			<Rating value={5}/>
			<Rating value={2}/>
			<div>
				<p>You clicked {count} times </p>
				<button onClick={clickButton}>Click me</button>
			</div>
			<ul>
				{filteredMoney.map((objFromMoneyArr, index)=>{
					return (
						<li key={index}>
							<span>{objFromMoneyArr.banknote}</span>
							<span>{objFromMoneyArr.nominal}</span>
							<span>{objFromMoneyArr.number}</span>
						</li>

					)
				})}
			</ul>
			<div>
				<button onClick={()=>{clickButtonFunction("Ruble")}}>Ruble</button>
				<button onClick={()=>{clickButtonFunction("Dollar")}}>Dollar</button>
				<button onClick={()=>{clickButtonFunction("All")}}>All</button>
			</div>
			<TestFilterComponent/>

		</div>
	)
}
export default App;
