import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
	title: string;
}
export const Accordion = (props: AccordionType) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div>
			<AccordionTitle title={props.title}/>
			<button onClick={()=>{
				console.log(collapsed); setCollapsed(!collapsed)}}>Toggle</button>
			<AccordionBody/>
		</div>
	);
}