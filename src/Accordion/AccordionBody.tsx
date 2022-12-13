import React from "react";
type AccordionBodyType={
	collapsed:boolean
}
export const AccordionBody =(props:AccordionBodyType) => {
	return(
		<div>
			{props.collapsed}
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
	);
}