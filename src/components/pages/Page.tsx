import React from "react";
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
export type PropsType={
	pages: Array<PagesType>
}
export const Page = (props:PropsType) => {
	const params = useParams()
	return(
		<div>

		</div>
	);
}