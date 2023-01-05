import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TodolistType = {
	title: string;
	tasks: Array<TasksType>;
	removeTask: (taskID: string) => void;
	addTask: (newTaskName: string) => void;
	changeFilter: (value: FilterValuesType) => void;
	changeStatus: (taskID: string, isDone:boolean) => void;
	filter: FilterValuesType;
}
export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const NewTodolist = (props: TodolistType) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [error, setError] = useState<string | null>(null);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.ctrlKey && e.charCode === 13) {
			addTask();
		}
	}
	const addTask = () => {
		if (newTaskTitle.trim() !== "") {
			props.addTask(newTaskTitle.trim());
			setNewTaskTitle('')
		}else{
			setError("Field is required");
		}
	}
	const onAllClickFilter = () => props.changeFilter('all');
	const onActiveClickFilter = () => props.changeFilter('active');
	const onCompletedClickFilter = () => props.changeFilter('completed');

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input type="text"
					   value={newTaskTitle}
					   className={error ? "error" : ""}
					   onChange={onChangeHandler}
					   onKeyPress={onKeyPressHandler}
				/>
				<button onClick={addTask}>+</button>
				{error && <div className="error-message">{error}</div>}
			</div>
			<div>
				<ul>
					{props.tasks.map((el) => {
						const onRemoveHandler = () => props.removeTask(el.id);
						const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(el.id, e.currentTarget.checked);
						return <li key={el.id} className={el.isDone ? "is-done" : ""}>
							<input type="checkbox"
								   checked={el.isDone}
								   onChange={onChangeCheckBoxHandler}/>
							<span>{el.title}</span>
							<button onClick={onRemoveHandler}>x</button>
						</li>;
					})}
				</ul>
			</div>
			<div>
				<button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllClickFilter}>All</button>
				<button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveClickFilter}>Active</button>
				<button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedClickFilter}>Completed</button>
			</div>
		</div>
	);
}