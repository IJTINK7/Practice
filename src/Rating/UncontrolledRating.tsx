import React, {useState} from "react";

export const UncontrolledRating = () => {
	const [value, setValue] = useState(0)
	return (
		<div>
			<Star isActive={value > 0}/>
			<Star isActive={value > 1}/>
			<Star isActive={value > 2}/>
			<Star isActive={value > 3}/>
			<Star isActive={value > 4}/>
			<div>
				<button onClick={()=>{setValue(1)}}>1</button>
				<button onClick={()=>{setValue(2)}}>2</button>
				<button onClick={()=>{setValue(3)}}>3</button>
				<button onClick={()=>{setValue(4)}}>4</button>
				<button onClick={()=>{setValue(5)}}>5</button>
			</div>
		</div>
	);
}
type StarPropsType = {
	isActive: boolean;
}
const Star = (props: StarPropsType) => {
	return props.isActive ? <span><b>Star </b></span> : <span>Star </span>
}