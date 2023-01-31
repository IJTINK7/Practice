import React, {useState} from "react";

export const UncontrolledRating = () => {
	const [value, setValue] = useState(0)
	return (
		<div>
			<Star isActive={value > 0} setValue={setValue} value={1}/>
			<Star isActive={value > 1} setValue={setValue} value={2}/>
			<Star isActive={value > 2} setValue={setValue} value={3}/>
			<Star isActive={value > 3} setValue={setValue} value={4}/>
			<Star isActive={value > 4} setValue={setValue} value={5}/>
		</div>
	);
}
type StarPropsType = {
	isActive: boolean;
	value: 1 | 2 | 3 | 4 | 5
	setValue: (value: 1 | 2 | 3 | 4 | 5)=>void;
}
const Star = (props: StarPropsType) => {
	return <span onClick={()=>{props.setValue(props.value)}}>{props.isActive ? <b>Star </b> : "Star" }</span>
}