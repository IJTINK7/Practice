import React, {useState} from 'react';
import './App.css';
import {Greeting} from "./Greeting";
import {Rating, RatingValueType} from "./Rating/Rating";
import {ToDoList} from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";
import {Counter} from "./Counter";
import {Currency} from "./Currency";
import {NewComponent} from "./NewComponent";
import {Input} from "./Input";
import {OnOff} from "./OnOff/OnOff";
import {User} from "./callBack/callBack";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledRating} from "./Rating/UncontrolledRating";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {NewTodolist} from "./NewTodolist";


function App() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
	const [switchOn, setSwitchOOn] = useState(false);
	const [tasks, setTasks] = useState([
		{id: 1, title: "HTML", isDone: true},
		{id: 2, title: "CSS", isDone: true},
		{id: 3, title: "JS", isDone: true},
		{id: 4, title: "React", isDone: false}
	])

	const removeTask =(taskID: number)=>{
		let filteredTasks = tasks.filter(el=>el.id!== taskID);
		setTasks(filteredTasks)
	}

	return (
		<div className="App">
			<Greeting/>
			<ToDoList title={"What to learn?"}/>
			<hr/>
			<Rating value={ratingValue} onClick={setRatingValue}/>
			<hr/>
			<Currency/>
			<hr/>
			<TestFilterComponent/>
			<hr/>
			<Counter/>
			<NewComponent/>
			<Input/>
			<OnOff on={switchOn} onChange={(on)=>{setSwitchOOn(on)}}/>
			<User/>
			<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />
			<UncontrolledRating/>
			<UncontrolledAccordion title={"Burger"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
			<UncontrolledOnOff/>
			<NewTodolist title={"What to learn"} tasks={tasks} removeTask ={removeTask}/>
		</div>
	)
}

export default App;
