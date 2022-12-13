import React from "react";
type AccordionTitleType={
	title:string
}
export const AccordionTitle =(props: AccordionTitleType) => {
	return(
		<div>{props.title}</div>
	);
}