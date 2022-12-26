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


function App() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

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
			<OnOff/>
			<User/>
			<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />
			<UncontrolledRating/>
			<UncontrolledAccordion title={"Burger"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
		</div>
	)
}

export default App;
