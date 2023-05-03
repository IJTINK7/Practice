import React from "react";
import {PagesType} from "../data/dataState";
type PropsType={
	page: PagesType
}
export const Content = (props: PropsType) => {
	return(
		<div>
			<div>{props.page.heading}</div>
			<div>{props.page.about}</div>

		</div>
	);
}
