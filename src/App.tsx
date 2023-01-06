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
type TodolistType={
	id: string,
	title: string,
	filter: FilterValuesType
}

function App() {
	// const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	// const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
	// const [switchOn, setSwitchOOn] = useState(false);

	const removeTask = (taskID: string, todolistId:string) => {
		let tasks = tasksObj[todolistId];
		tasksObj[todolistId] = tasks.filter(el => el.id !== taskID);
		setTasksObj({...tasksObj});
	}
	const addTask = (newTaskName: string, todolistId:string) => {
		let newTask = {id: v1(), title: newTaskName, isDone: false};
		let tasks = tasksObj[todolistId];
		tasksObj[todolistId] = [newTask, ...tasks];
		setTasksObj({...tasksObj});
	}

	const changeStatus=(taskID: string, isDone:boolean, todolistId:string)=>{
		let tasks = tasksObj[todolistId];
		let task = tasks.find(el=>el.id === taskID)
		if(task){
			task.isDone = isDone;
			setTasksObj({...tasksObj});
		}
	}

	const changeFilter = (value: FilterValuesType, todolistId: string) => {
		let todolist = todoLists.find(el=>el.id === todolistId)
		if(todolist){
			todolist.filter = value;
			setTodoLists([...todoLists]);
		}
	}
	let todolistId1 = v1();
	let todolistId2 = v1();

	let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
		{id:todolistId1, title: "What to learn", filter: "active"},
		{id:todolistId2, title: "What to buy", filter: "completed"},
	]);
	let [tasksObj, setTasksObj] = useState({
		[todolistId1]: [
			{id: v1(), title: "HTML", isDone: true},
			{id: v1(), title: "CSS", isDone: true},
			{id: v1(), title: "JS", isDone: true},
			{id: v1(), title: "React", isDone: false}
		],
		[todolistId2]: [
			{id: v1(), title: "Book", isDone: false},
			{id: v1(), title: "Milk", isDone: true},
		]
	});
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
			{
				todoLists.map((el)=>{
					let checkedTasks = tasksObj[el.id];
					if (el.filter === "completed") {
						checkedTasks = checkedTasks.filter(el => el.isDone)
					}
					if (el.filter === "active") {
						checkedTasks = checkedTasks.filter(el => !el.isDone)
					}
					return <NewTodolist title={el.title}
										key={el.id}
										id={el.id}
										tasks={checkedTasks}
										removeTask={removeTask}
										addTask={addTask}
										changeFilter={changeFilter}
										changeStatus={changeStatus}
										filter={el.filter}/>
				})
			}

		</div>
	)
}

export default App;
