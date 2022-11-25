import React from "react";

type ToDoListType ={
	title: string;
	list: Array<TasksType>;
	removeTask: (taskId:number)=> void;
}

type TasksType ={
	id: number;
	checked: boolean;
	name: string;
}

const ToDoList = (props:ToDoListType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<input/>
			<button>+</button>
			<ul>
				{props.list.map((el) => {
					return (
						<li key={el.id}>
							<button onClick={() => {props.removeTask(el.id)}}>x</button>
							<input type="checkbox" checked={el.checked}/>
							<span>{el.name}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default ToDoList;