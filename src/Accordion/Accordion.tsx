import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
// type AccordionType={
// 	title: string;
// 	collapsed: boolean
// }
export const Accordion = () =>{
	// const [collapsed, setCollapsed] = useState(false)
	return(
		<div>
			<AccordionTitle title={"Menu"}/>
			<AccordionBody />
		</div>
	);
}


// <div>{props.title}</div>
// <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>
//