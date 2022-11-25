import React from "react";

type RatingPropsType = {
	value: number;
}
export const Rating = (props: RatingPropsType) => {
	if (props.value === 1) {
		return (
			<div>
				<Star isActive={true}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
			</div>
		);
	}
	if (props.value === 2) {
		return (
			<div>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
			</div>
		);
	}
	if (props.value === 3) {
		return (
			<div>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={false}/>
				<Star isActive={false}/>
			</div>
		);
	}
	if (props.value === 4) {
		return (
			<div>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={false}/>
			</div>
		);
	}
	if (props.value === 5) {
		return (
			<div>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
				<Star isActive={true}/>
			</div>
		);
	}
	return (
		<div>
			<Star isActive={false}/>
			<Star isActive={false}/>
			<Star isActive={false}/>
			<Star isActive={false}/>
			<Star isActive={false}/>
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