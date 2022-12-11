import React from "react";
import {ManType} from "./destructuring.test";
type PropsType={
	title: string;
	man: ManType;
}
export const ManComponent = (props:PropsType)=>{
	const {title} = props;
	const {name} = props.man;
	return(
		<div>
			<h1>{props.title}</h1>
			<hr/>
			<div>{props.man.name}</div>
		</div>
	);
}