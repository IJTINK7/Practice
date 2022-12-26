import React from "react";

type AccordionTitleType = {
	title: string
	onClick: ()=> void
}
export const AccordionTitle = (props: AccordionTitleType) => {
	return (
		<h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
	);
}