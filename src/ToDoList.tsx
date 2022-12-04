import React, {useState} from "react";
import {v1} from "uuid";

type ToDoListType = {
	title: string;
}
export const ToDoList = (props: ToDoListType) => {
	let [tasks, setTasks] = useState([
		{id: v1(), checked: true, name: "HTML"},
		{id: v1(), checked: true, name: "CSS"},
		{id: v1(), checked: true, name: "JS"},
		{id: v1(), checked: false, name: "React"},
		{id: v1(), checked: false, name: "TS"},
	]);
	const removeTaskFunction = (taskId: string) => {
		setTasks(tasks.filter(el => el.id !== taskId));
	}
	const addTaskFunction = (task: string) => {
		const newTask = {id: v1(), checked: false, name: task};
		const newArray = [newTask, ...tasks];
		setTasks(newArray);
	}

	let [filterButtonValue, setFilterButtonValue] = useState('All');
	let filteredTasks = tasks;
	const filterButtonClick = (keyValue: string) => {
		setFilterButtonValue(keyValue)
	}
	if (filterButtonValue === "Active") {
		filteredTasks = tasks.filter(el => !el.checked)
	}
	if (filterButtonValue === "Completed") {
		filteredTasks = tasks.filter(el => el.checked)
	}
	let [inputValue, setInputValue] = useState('');

	const onAllClickHandler = () => filterButtonClick("All");
	const onActiveClickHandler = () => filterButtonClick("Active");
	const onCompletedClickHandler = () => filterButtonClick("Completed");
	return (
		<div>
			<h3>{props.title}</h3>
			<input value={inputValue}
				   onChange={(event)=>{
					   setInputValue(event.currentTarget.value);
				   }}
				   onKeyPress={(event)=>{
					   if(event.charCode === 13){
						   addTaskFunction(inputValue);
						   setInputValue('')
					   }
				   }}
			/>
			<button onClick={()=>{
				addTaskFunction(inputValue);
				setInputValue('')
			}
			}>+</button>
			<ul>
				{filteredTasks.map((el) => {
					const onRemoveHandler = () => removeTaskFunction(el.id);
					return (
						<li key={el.id}>
								<button onClick={onRemoveHandler}>x</button>
								<input type="checkbox" checked={el.checked}/>
								<span>{el.name}</span>
						</li>
					)
				})}
			</ul>
			<div>
				<button onClick={onAllClickHandler}>All</button>
				<button onClick={onActiveClickHandler}>Active</button>
				<button onClick={onCompletedClickHandler}>Completed</button>
			</div>
		</div>
	);
}
