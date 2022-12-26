import React from "react";

type AccordionTitleType = {
	title: string
	onClick: ()=> void
}
export const AccordionTitle = (props: AccordionTitleType) => {
	return (
		<div onClick={()=>{props.onClick()}}>{props.title}</div>
	);
}