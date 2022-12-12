import React from "react";
import OnOffStyles from "./OnOff.module.css"
type OnOffActiveType ={
	isActive: boolean;
}
export const OnOff = (props: OnOffActiveType) =>{
	const onOffStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
	};

	const bulbStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: "3px black solid",
	};
	return(
		<div className ={OnOffStyles.container}>
			<div style={onOffStyle}>On</div>
			<div style={onOffStyle}>Off</div>
			<div style={bulbStyle}></div>
		</div>
	);
}