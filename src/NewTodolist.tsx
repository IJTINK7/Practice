import React from "react";

export const NewTodolist = () => {
	return (
		<div>
			<h3>What to learn</h3>
			<div>
				<input type="text"/>
				<button>+</button>
			</div>

			<div>
				<li><input type="checkbox" checked={true}/><span>HTML</span></li>
				<li><input type="checkbox" checked={true}/><span>CSS</span></li>
				<li><input type="checkbox" checked={false}/><span>JS</span></li>
			</div>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	);
}