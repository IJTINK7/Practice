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
import {v1} from "uuid";
import {TodolistAssociativeArray} from "./associativeArray/TodolistAssociativeArray";

export type FilterValuesType = "all" | "completed" | "active";
type TodolistsType = {
	id: string;
	title: string;
	filter: FilterValuesType;
}

function App() {
	// const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	// const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
	// const [switchOn, setSwitchOOn] = useState(false);
	// let [tasks, setTasks] = useState([
	//     {id: v1(), title: "HTML&CSS", isDone: true},
	//     {id: v1(), title: "JS", isDone: true},
	//     {id: v1(), title: "ReactJS", isDone: false},
	//     {id: v1(), title: "Rest API", isDone: false},
	//     {id: v1(), title: "GraphQL", isDone: false},
	// ]);

	let todolistID1=v1();
	let todolistID2=v1();

	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{id: todolistID1, title: 'What to learn', filter: 'active'},
		{id: todolistID2, title: 'What to buy', filter: 'completed'},
	])

	let [tasks, setTasks] = useState({
		[todolistID1]:[
			{id: v1(), title: "HTML&CSS", isDone: true},
			{id: v1(), title: "JS", isDone: true},
			{id: v1(), title: "ReactJS", isDone: false},
			{id: v1(), title: "Rest API", isDone: false},
			{id: v1(), title: "GraphQL", isDone: false},
		],
		[todolistID2]:[
			{id: v1(), title: "HTML&CSS2", isDone: true},
			{id: v1(), title: "JS2", isDone: true},
			{id: v1(), title: "ReactJS2", isDone: false},
			{id: v1(), title: "Rest API2", isDone: false},
			{id: v1(), title: "GraphQL2", isDone: false},
		]
	});

	function removeTask(id: string) {
		//
	}

	function addTask(title: string) {
		//
	}

	function changeStatus(taskId: string, isDone: boolean) {
		//
	}

	function changeFilter(value: FilterValuesType) {
		//
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
				let tasksForTodolist = tasks[el.id];

				if (el.filter === "active") {
					tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
				}
				if (el.filter === "completed") {
					tasksForTodolist = tasks[el.id].filter(t => t.isDone);
				}
				return <TodolistAssociativeArray
					key={el.id}
					id={el.id}
					title={el.title}
					tasks={tasksForTodolist}
					removeTask={removeTask}
					changeFilter={changeFilter}
					addTask={addTask}
					changeTaskStatus={changeStatus}
					filter={el.filter}
				/>
			})}

		</div>
	)
}

export default App;
