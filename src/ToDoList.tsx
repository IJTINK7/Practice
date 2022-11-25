import React, {useState} from "react";

type ToDoListType = {
	title: string;
}

export const ToDoList = (props: ToDoListType) => {
	let [tasks, setTasks] = useState<Array<{ id: number; checked: boolean; name: string; }>>([
		{id: 1, checked: true, name: "HTML"},
		{id: 2, checked: true, name: "CSS"},
		{id: 3, checked: true, name: "JS"},
		{id: 4, checked: false, name: "React"},
		{id: 5, checked: false, name: "TS"},
	]);
	const removeTaskFunction = (taskId: number) => {
		setTasks(tasks.filter(el => el.id !== taskId));
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
			<button>+</button>
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
