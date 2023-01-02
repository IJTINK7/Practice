import React from "react";

type TodolistType={
	title: string;
	tasks: Array<TasksType>;
}
type TasksType={
	id: number;
	title: string;
	isDone: boolean;
}

export const NewTodolist = (props: TodolistType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input type="text"/>
				<button>+</button>
			</div>
			<div>
				<li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
				<li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
				<li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
			</div>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	);
}