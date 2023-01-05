import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TodolistType = {
	title: string;
	tasks: Array<TasksType>;
	removeTask: (taskID: string) => void;
	addTask: (newTaskName: string) => void;
	changeFilter: (value: FilterValuesType) => void;
	changeStatus: (taskID: string, isDone:boolean) => void;
}
export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const NewTodolist = (props: TodolistType) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.ctrlKey && e.charCode === 13) {
			addTask();
		}
	}
	const addTask = () => {
		if (newTaskTitle !== "") {
			props.addTask(newTaskTitle);
			setNewTaskTitle('')
		}
	}
	const onAllClickFilter = () => props.changeFilter('all');
	const onActiveClickFilter = () => props.changeFilter('active');
	const onCompletedClickFilter = () => props.changeFilter('completed');

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input type="text" value={newTaskTitle}
					   onChange={onChangeHandler}
					   onKeyPress={onKeyPressHandler}
				/>
				<button onClick={addTask}>+</button>
			</div>
			<div>
				<ul>
					{props.tasks.map((el) => {
						const onRemoveHandler = () => props.removeTask(el.id);
						const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(el.id, e.currentTarget.checked);
						return <li key={el.id}>
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
				<button onClick={onAllClickFilter}>All</button>
				<button onClick={onActiveClickFilter}>Active</button>
				<button onClick={onCompletedClickFilter}>Completed</button>
			</div>
		</div>
	);
}