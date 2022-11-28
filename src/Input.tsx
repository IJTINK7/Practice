import React, {useState} from "react";
import {FullInput} from "./FullInput";

export const Input = () => {
	const [message, setMessage] = useState([
			{message: 'message1'},
			{message: 'message2'},
			{message: 'message3'},
		]
	)
	const addNewMessage  = (messageValue:string) => {
		let newMessage = {message: messageValue};
		setMessage([newMessage, ...message]);
	}
	return (
		<div className="App">
			<div>
				<FullInput addNewMessage={addNewMessage}/>
			</div>

			{message.map((el, index) => {
				return (
					<span key={index}>{el.message}</span>
				);
			})}
		</div>
	);
}