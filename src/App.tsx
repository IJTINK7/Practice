import React, {useState} from 'react';
import './App.css';
import Greeting from "./Greeting";
import Rating from "./Rating";
import ToDoList from "./ToDoList";

function App() {
	let [count, setCount] = useState(0);
	const clickButton= () => {
		setCount(++count);
	}
	let [money, setMoney] = useState([
		{banknote: 'dollar', nominal: 100, number: ' a1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' z1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' w1234567890'},
		{banknote: 'dollar', nominal: 100, number: ' e1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' c1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' r1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' x1234567890'},
		{banknote: 'ruble', nominal: 50, number: ' v1234567890'}
	]);
	let filteredMoney = money;

	let clickButtonFunction =(keyValue:string)=>{
		console.log(keyValue)
		if(keyValue === 'Ruble'){
			filteredMoney = money.filter(el=>el.banknote === 'ruble')
		}
		if(keyValue === 'Dollar'){
			filteredMoney = money.filter(el=>el.banknote === 'dollar')
		}
		setMoney(filteredMoney)
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

		</div>
	)
}
//Changing the path of repository again
export default App;
