import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type RatingPropsType = {
	value: RatingValueType;
	onClick:(value: RatingValueType)=>void;
};

export const Rating = (props: RatingPropsType) => {
	return (
		<div>
			<Star isActive={props.value > 0} onClick={props.onClick} value={1}/>
			<Star isActive={props.value > 1} onClick={props.onClick} value={2}/>
			<Star isActive={props.value > 2} onClick={props.onClick} value={3}/>
			<Star isActive={props.value > 3} onClick={props.onClick} value={4}/>
			<Star isActive={props.value > 4} onClick={props.onClick} value={5}/>
		</div>
	);
}
type StarPropsType = {
	isActive: boolean;
	value: RatingValueType;
	onClick:(value: RatingValueType)=>void;
}
const Star = (props: StarPropsType) => {
		return (
			<span onClick={()=>{props.onClick(props.value)}}>
			{props.isActive ? <b>Star </b> : "Star " }</span>
		);
}