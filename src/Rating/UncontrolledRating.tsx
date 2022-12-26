import React, {useState} from "react";

export const UncontrolledRating = () => {
	const [value, setValue] = useState(0)
	return (
		<div>
			<Star isActive={value > 0} setValue={setValue}/>
			<Star isActive={value > 1} setValue={setValue}/>
			<Star isActive={value > 2} setValue={setValue}/>
			<Star isActive={value > 3} setValue={setValue}/>
			<Star isActive={value > 4} setValue={setValue}/>
		</div>
	);
}
type StarPropsType = {
	isActive: boolean;
	setValue: (value: 1 | 2 | 3 | 4 | 5)=>void;
}
const Star = (props: StarPropsType) => {
	return <span onClick={()=>{props.setValue(5)}}>{props.isActive ? <b>Star </b> : "Star" }</span>
}