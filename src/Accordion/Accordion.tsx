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
			<AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
			{!collapsed && <AccordionBody/>}
		</div>
	);
}