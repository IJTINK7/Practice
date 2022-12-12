import React from "react";
import OnOffStyles from "./OnOff.module.css"
type OnOffActiveType ={
	isActive: boolean;
}
export const OnOff = (props: OnOffActiveType) =>{
	const bulbStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: "3px black solid",
	}
	return(
		<div className ={OnOffStyles.container}>
			<div className={OnOffStyles.On}>On</div>
			<div className={OnOffStyles.Off}>Off</div>
			<div style={bulbStyle}></div>
		</div>
	);
}