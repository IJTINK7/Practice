import React from "react";
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";
export type PropsType={
	pages: Array<PagesType>
}
export const Page = (props:PropsType) => {
	const params = useParams()
	return(
		<div>
			<Content/>
		</div>
	);
}