import React, {useState} from "react";

export const UncontrolledRating = () => {
	const [value, setValue] = useState(0)
	return (
		<div>
			<Star isActive={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>
			<Star isActive={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>
			<Star isActive={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>
			<Star isActive={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>
			<Star isActive={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>
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