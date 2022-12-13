import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
type AccordionType={
	title: string;
	collapsed: boolean
}
export const Accordion = (props:AccordionType) =>{
	return(
		<div>
			<AccordionTitle title={props.title}/>
			<AccordionBody collapsed={props.collapsed}/>
		</div>
	);
}