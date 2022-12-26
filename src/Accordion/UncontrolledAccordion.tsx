import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
	title: string;
	collapsed: boolean;
	onChange:()=>void;
}
export const UncontrolledAccordion = (props: AccordionType) => {
	return (
		<div>
			<AccordionTitle title={props.title} onChange={props.onChange}/>
			{!props.collapsed && <AccordionBody/>}
		</div>
	);
}