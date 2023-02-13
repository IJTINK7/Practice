import React from "react";
import {PagesType} from "../data/dataState";
export type PropsType={
	page: PagesType
}
export const Content =(props:PropsType)=>{
	return(
		<div>
			<h3>{props.page.heading}</h3>
			<div>{props.page.about}</div>
		</div>
	);
}