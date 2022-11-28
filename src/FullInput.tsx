import React, {ChangeEvent, useState} from "react";

type AddNewMessageType ={
	addNewMessage: (messageValue:string)=> void;
}
export const FullInput = (props:AddNewMessageType) => {
	let [title, setTitle] = useState("");
	const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
		setTitle(event.currentTarget.value);
	}
	const onCLickButtonHandler =()=>{
		props.addNewMessage(title);
		setTitle("");
	}
	return (
		<div>
			<input value={title} onChange={onChangeInputHandler}/>
			<button onClick={onCLickButtonHandler}>+</button>
		</div>
	);
}