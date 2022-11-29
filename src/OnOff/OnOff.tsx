import React from "react";
import OnOffStyles from "./OnOff.module.css"
type OnOffActiveType ={
	isActive: boolean;
}
export const OnOff = (props: OnOffActiveType) =>{
	return(
		<div className ={OnOffStyles.contain}>
			<div className={OnOffStyles.On}>On</div>
			<div className={OnOffStyles.Off}>{props.isActive}</div>
			<div className={OnOffStyles.bulb}></div>
		</div>
	);
}