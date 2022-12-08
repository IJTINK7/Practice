import React from "react";
export const User = ()=>{
	const deleteUser=()=>{
		alert("User has been deleted")
	}
	const saveUser=()=>{
		alert("User has been saved")
	}
	const nameChanged = () => {
		console.log("Name has been changed")
	}
	const changeFocus = () => {
		console.log("Focus has been lost")
	}
	return(

		<div>
			<textarea onChange={nameChanged} onBlur={changeFocus}>Name</textarea>
			<button onClick={deleteUser}>Delete</button>
			<button onClick={saveUser}>Save</button>
		</div>
	);
}