import React from "react";

const ToDoList = () => {
	return (
		<div>
			<h3>What to learn</h3>
			<input/>
			<button>+</button>
			<ul>
				<li><input type={"checkbox"} checked={true}/>HTML</li>
				<li><input type={"checkbox"} checked={true}/>CSS</li>
				<li><input type={"checkbox"} checked={false}/>JS</li>
			</ul>
		</div>
	);
}

export default ToDoList;