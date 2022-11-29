import React from "react";
import OnOffStyles from "./OnOff.module.css"
export const OnOff = () =>{
	return(
		<div className ={OnOffStyles.container} >
			<div className={OnOffStyles.On}>On</div>
			<div className={OnOffStyles.Off}>Off</div>
			<div className={OnOffStyles.bulb}></div>
		</div>
	);
}