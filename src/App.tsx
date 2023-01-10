import React, {useState} from 'react';
import './App.css';
// import {Greeting} from "./Greeting";
// import {Rating, RatingValueType} from "./Rating/Rating";
// import {ToDoList} from "./ToDoList";
// import {TestFilterComponent} from "./TestFilterComponent";
// import {Counter} from "./Counter";
// import {Currency} from "./Currency";
// import {NewComponent} from "./NewComponent";
// import {Input} from "./Input";
// import {OnOff} from "./OnOff/OnOff";
// import {User} from "./callBack/callBack";
// import {Accordion} from "./Accordion/Accordion";
// import {UncontrolledRating} from "./Rating/UncontrolledRating";
// import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
// import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {NewTodolist} from "./NewTodolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active";
type TodolistsType ={
	id: string;
	title: string;
	filter: FilterValuesType;
}
function App() {
	// const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	// const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
	// const [switchOn, setSwitchOOn] = useState(false);

	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{id: v1(), title: "What to learn", filter: "all"},
		{id: v1(), title: "What to buy", filter: "all"},
		{id: v1(), title: "What to watch", filter: "all"},
		{id: v1(), title: "What to sell", filter: "all"},
		{id: v1(), title: "What to read", filter: "all"},
	]);

	let [tasks, setTasks] = useState([
		{id: v1(), title: "HTML&CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "ReactJS", isDone: false},
		{id: v1(), title: "Rest API", isDone: false},
		{id: v1(), title: "GraphQL", isDone: false},
	]);
	let [filter, setFilter] = useState<FilterValuesType>("all");


	function removeTask(id: string) {
		let filteredTasks = tasks.filter(t => t.id !== id);
		setTasks(filteredTasks);
	}

	function addTask(title: string) {
		let task = {id: v1(), title: title, isDone: false};
		let newTasks = [task, ...tasks];
		setTasks(newTasks);
	}

	function changeStatus(taskId: string, isDone: boolean) {
		let task = tasks.find(t => t.id === taskId);
		if (task) {
			task.isDone = isDone;
		}
		setTasks([...tasks]);
	}


	let tasksForTodolist = tasks;

	if (filter === "active") {
		tasksForTodolist = tasks.filter(t => !t.isDone);
	}
	if (filter === "completed") {
		tasksForTodolist = tasks.filter(t => t.isDone);
	}

	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}
	return (
		<div className="App">
			{/*<Greeting/>*/}
			{/*<ToDoList title={"What to learn?"}/>*/}
			{/*<hr/>*/}
			{/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
			{/*<hr/>*/}
			{/*<Currency/>*/}
			{/*<hr/>*/}
			{/*<TestFilterComponent/>*/}
			{/*<hr/>*/}
			{/*<Counter/>*/}
			{/*<NewComponent/>*/}
			{/*<Input/>*/}
			{/*<OnOff on={switchOn} onChange={(on) => {*/}
			{/*	setSwitchOOn(on)*/}
			{/*}}/>*/}
			{/*<User/>*/}
			{/*<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={() => {*/}
			{/*	setAccordionCollapsed(!accordionCollapsed)*/}
			{/*}}/>*/}
			{/*<UncontrolledRating/>*/}
			{/*<UncontrolledAccordion title={"Burger"} collapsed={accordionCollapsed} onChange={() => {*/}
			{/*	setAccordionCollapsed(!accordionCollapsed)*/}
			{/*}}/>*/}
			{/*<UncontrolledOnOff/>*/}
			{todolists.map(el=>{
			return (
				<NewTodolist title={el.title}
							 tasks={tasksForTodolist}
							 removeTask={removeTask}
							 changeFilter={changeFilter}
							 addTask={addTask}
							 changeTaskStatus={changeStatus}
							 filter={filter}
				/>
			)})}
		</div>
	)
}

export default App;
