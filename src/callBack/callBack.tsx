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
	return(

		<div>
			<textarea onChange={nameChanged}>Name</textarea>
			<button onClick={deleteUser}>Delete</button>
			<button onClick={saveUser}>Save</button>
		</div>
	);
}