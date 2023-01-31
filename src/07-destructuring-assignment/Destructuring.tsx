import React from "react";
import {ManType} from "./destructuring.test";
type PropsType={
	title: string;
	man: ManType;
}
export const ManComponent = (props:PropsType)=>{
	// const {title} = props; 1
	// const {name} = props.man;1
	// const {title, man:{name}} = props; 2
	const {title, man} = props;
	return(
		<div>
			<h1>{title}</h1>
			<hr/>
			<div>
				{/*{name} 2*/}
				{man.name}
			</div>
		</div>
	);
}