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
import {NewTodolist, TasksType} from "./NewTodolist";
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
	const [tasks, setTasks] = useState<Array<TasksType>>([
		{id: v1(), title: "HTML", isDone: true},
		{id: v1(), title: "CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "React", isDone: false}
	]);
	const removeTask = (taskID: string) => {
		let filteredTasks = tasks.filter(el => el.id !== taskID);
		setTasks(filteredTasks);
	}
	const addTask = (newTaskName: string) => {
		let newTask = {id: v1(), title: newTaskName, isDone: false};
		setTasks([newTask, ...tasks]);
	}

	const changeStatus=(taskID: string, isDone:boolean)=>{
		let task = tasks.find(el=>el.id === taskID)
		if(task){
			task.isDone = isDone;
		}
		setTasks([...tasks])
	}

	const changeFilter = (value: FilterValuesType, todolistId: string) => {
		let todolist = todoLists.find(el=>el.id === todolistId)
		if(todolist){
			todolist.filter = value;
			setTodoLists([...todoLists]);
		}
	}
	let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
		{id:v1(), title: "What to learn", filter: "active"},
		{id:v1(), title: "What to buy", filter: "completed"},
	]);
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
					let checkedTasks = tasks;
					if (el.filter === "completed") {
						checkedTasks = tasks.filter(el => el.isDone)
					}
					if (el.filter === "active") {
						checkedTasks = tasks.filter(el => !el.isDone)
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
