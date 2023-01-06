import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TodolistType = {
	title: string;
	id: string;
	tasks: Array<TasksType>;
	removeTask: (taskID: string, todolistId:string) => void;
	addTask: (newTaskName: string, todolistId:string) => void;
	changeFilter: (value: FilterValuesType, todolistId: string) => void;
	changeStatus: (taskID: string, isDone:boolean, todolistId:string) => void;
	filter: FilterValuesType;
	removeTodolist:(todoListId: string)=> void;
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
			props.addTask(newTaskTitle.trim(), props.id);
			setNewTaskTitle('')
		}else{
			setError("Field is required");
		}
	}
	const onAllClickFilter = () => props.changeFilter('all', props.id);
	const onActiveClickFilter = () => props.changeFilter('active', props.id);
	const onCompletedClickFilter = () => props.changeFilter('completed', props.id);
	const removeTodolist = () =>{
		props.removeTodolist(props.id)
	}

	return (
		<div>
				<h3>{props.title}
					<button onClick={removeTodolist}>x</button>
				</h3>
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
						const onRemoveHandler = () => props.removeTask(el.id, props.id );
						const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(el.id, e.currentTarget.checked, props.id);
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