import React from "react";
type OnOffActiveType ={
	on: boolean;
	onChange:(on: boolean)=>void
}
export const OnOff = (props:OnOffActiveType) =>{

	const container ={
		display:"flex"
	}
	const onStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: props.on ? "green" : "white",
	};
	const offStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: props.on ? "white" : "red",
	};

	const bulbStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: "3px black solid",
		backgroundColor: props.on ? "green" : "red",
	};


	return(
		<div style={container}>
			<div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
			<div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
			<div style={bulbStyle}></div>
		</div>
	);
}