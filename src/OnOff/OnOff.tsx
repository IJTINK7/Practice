import React, {useState} from "react";
type OnOffActiveType ={
	isActive: boolean;
}
export const OnOff = (props: OnOffActiveType) =>{
	const [on, setOn] = useState(false);

	const container ={
		display:"flex"
	}
	const onStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: on ? "green" : "white",
	};
	const offStyle = {
		width: "50px",
		height: "50px",
		border: "3px black solid",
		marginRight: "10px",
		marginBottom: "10px",
		backgroundColor: on ? "white" : "red",
	};

	const bulbStyle = {
		width: "50px",
		height: "50px",
		borderRadius: "50%",
		border: "3px black solid",
		backgroundColor: on ? "green" : "red",
	};


	return(
		<div style={container}>
			<div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
			<div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
			<div style={bulbStyle}></div>
		</div>
	);
}