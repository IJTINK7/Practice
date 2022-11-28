import React, {useState} from "react";

export const Input = () => {
	const [message, setMessage] = useState([
			{message: 'message1'},
			{message: 'message2'},
			{message: 'message3'},
		]
	)
	return (
		<div className="App">
			<div>
				<input />
				<button>+</button>
			</div>

			{message.map((el,index)=>{
				return(
					<span key={index}>{el.message}</span>
				);
			})}
		</div>
	);
}