import React from "react";
type OnOffActiveType ={
	isActive: boolean;
}
export const OnOff = (props: OnOffActiveType) =>{
	const container ={
		display:"flex"
	}
	const onStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: "green",
	};
	const offStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: "red",
	};

	const bulbStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: "3px black solid",
		backgroundColor: "yellow",
	};
	return(
		<div style={container}>
			<div style={onStyle}>On</div>
			<div style={offStyle}>Off</div>
			<div style={bulbStyle}></div>
		</div>
	);
}