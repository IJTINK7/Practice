import React, {useState} from 'react';
import './App.css';
import {Greeting} from "./Greeting";
import {Rating, RatingValueType} from "./Rating/Rating";
import {ToDoList} from "./ToDoList";
import {TestFilterComponent} from "./TestFilterComponent";
import {Counter} from "./Counter";
import {Currency} from "./Currency";
import {NewComponent} from "./NewComponent";
import {Input} from "./Input";
import {OnOff} from "./OnOff/OnOff";
import {User} from "./callBack/callBack";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledRating} from "./Rating/UncontrolledRating";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {NewTodolist, TasksType} from "./NewTodolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
	const [switchOn, setSwitchOOn] = useState(false);
	const [tasks, setTasks] = useState<Array<TasksType>>([
		{id: v1(), title: "HTML", isDone: true},
		{id: v1(), title: "CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "React", isDone: false}
	]);
	const removeTask = (taskID: string) => {
		let filteredTasks = tasks.filter(el => el.id !== taskID);
		setTasks(filteredTasks);
	}
	const addTask = (newTaskName: string) => {
		let newTask = {id: v1(), title: newTaskName, isDone: false};
		setTasks([newTask, ...tasks]);
	}

	let [filter, setFilter] = useState<FilterValuesType>("all");
	let checkedTasks = tasks;
	if (filter === "completed") {
		checkedTasks = tasks.filter(el => el.isDone)
	}
	if (filter === "active") {
		checkedTasks = tasks.filter(el => !el.isDone)
	}
	const changeFilter = (value: FilterValuesType) => {
		setFilter(value);
	}

	return (
		<div className="App">
			<Greeting/>
			<ToDoList title={"What to learn?"}/>
			<hr/>
			<Rating value={ratingValue} onClick={setRatingValue}/>
			<hr/>
			<Currency/>
			<hr/>
			<TestFilterComponent/>
			<hr/>
			<Counter/>
			<NewComponent/>
			<Input/>
			<OnOff on={switchOn} onChange={(on) => {
				setSwitchOOn(on)
			}}/>
			<User/>
			<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={() => {
				setAccordionCollapsed(!accordionCollapsed)
			}}/>
			<UncontrolledRating/>
			<UncontrolledAccordion title={"Burger"} collapsed={accordionCollapsed} onChange={() => {
				setAccordionCollapsed(!accordionCollapsed)
			}}/>
			<UncontrolledOnOff/>
			<NewTodolist title={"What to learn"} tasks={checkedTasks} removeTask={removeTask} addTask={addTask}
						 changeFilter={changeFilter}/>
		</div>
	)
}

export default App;
