import React from "react";
import {FilterValuesType} from "./App";

type TodolistType = {
	title: string;
	tasks: Array<TasksType>;
	removeTask: (taskID: string) => void;
	addTask: ()=>void;
	changeFilter: (value: FilterValuesType) => void;
}
export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
}

export const NewTodolist = (props: TodolistType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input type="text"/>
				<button onClick={props.addTask}>+</button>
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