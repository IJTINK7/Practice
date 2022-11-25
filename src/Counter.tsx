import React, {useState} from "react";

export const Counter = () => {
	let [count, setCount] = useState(0);
	const clickButton= () => {
		setCount(++count);
	}

	return(
		<div>
			<p>You clicked {count} times </p>
			<button onClick={clickButton}>Click me</button>
		</div>
	);
}