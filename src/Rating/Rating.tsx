import React from "react";

type RatingPropsType = {
	value: number;
}
export const Rating = (props: RatingPropsType) => {
	return (
		<div>
			<Star isActive={props.value > 0}/>
			<Star isActive={props.value > 1}/>
			<Star isActive={props.value > 2}/>
			<Star isActive={props.value > 3}/>
			<Star isActive={props.value > 4}/>
		</div>
	);
}
type StarPropsType = {
	isActive: boolean;
}
const Star = (props: StarPropsType) => {
	if (props.isActive) {
		return (
			<span><b>Star </b></span>
		);
	} else {
		return (
			<span>Star </span>
		);
	}
}