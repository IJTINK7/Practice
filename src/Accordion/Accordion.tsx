import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
	title: string;
	collapsed: boolean
}
export const Accordion = (props: AccordionType) => {
	if (props.collapsed) {
		return (
			<div>
				<AccordionTitle title={props.title}/>
			</div>
		);
	} else {
		return (
			<div>
				<AccordionTitle title={props.title}/>
				<AccordionBody collapsed={props.collapsed}/>
			</div>
		);
	}
}