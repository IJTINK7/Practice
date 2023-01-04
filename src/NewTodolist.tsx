import React, {useState} from "react";
import {FilterValuesType} from "./App";

type TodolistType = {
	title: string;
	tasks: Array<TasksType>;
	removeTask: (taskID: string) => void;
	addTask: (newTaskName:string)=>void;
	changeFilter: (value: FilterValuesType) => void;
}
export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const NewTodolist = (props: TodolistType) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input type="text" value={newTaskTitle}
					   onChange={(e)=>{setNewTaskTitle(e.currentTarget.value)}}
					   onKeyPress={(e)=>{
						   if(e.ctrlKey && e.charCode === 13){
							   props.addTask(newTaskTitle);
							   setNewTaskTitle('')
						   }
					   }}
				/>
				<button onClick={()=>{
					if(newTaskTitle !== ""){
						props.addTask(newTaskTitle);
						setNewTaskTitle('')
					}
				}}>+</button>
			</div>
			<div>
				<ul>
					{props.tasks.map((el) => {
						return <li><input type="checkbox" checked={el.isDone}/>
							<span>{el.title}</span>
							<button onClick={() => {
								props.removeTask(el.id)
							}}>x
							</button>
						</li>
					})}
				</ul>
			</div>
			<div>
				<button onClick={() => {
					props.changeFilter('all')
				}}>All
				</button>
				<button onClick={() => {
					props.changeFilter('active')
				}}>Active
				</button>
				<button onClick={() => {
					props.changeFilter('completed')
				}}>Completed
				</button>
			</div>
		</div>
	);
}