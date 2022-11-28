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
	const addTaskFunction = () => {
		let newTask = {id: v1(), checked: false, name: "New Task"};
		let newTasks = [newTask, ...tasks];
		setTasks(newTasks)
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
	return (
		<div>
			<h3>{props.title}</h3>
			<input/>
			<button onClick={()=>{addTaskFunction()}}>+</button>
			<ul>
				{filteredTasks.map((el) => {
					return (
						<li key={el.id}>
								<button onClick={() => {removeTaskFunction(el.id)}}>x</button>
								<input type="checkbox" checked={el.checked}/>
								<span>{el.name}</span>
						</li>
					)
				})}
			</ul>
			<div>
				<button onClick={() => {filterButtonClick("All")}}>All</button>
				<button onClick={() => {filterButtonClick("Active")}}>Active</button>
				<button onClick={() => {filterButtonClick("Completed")}}>Completed</button>
			</div>
		</div>
	);
}
