import React from "react";
export const User = ()=>{
	const deleteUser=()=>{
		alert("User should be deleted")
	}
	const saveUser=()=>{
		alert("User should be saved")
	}
	return(

		<div>
			<button onClick={deleteUser}>Delete</button>
			<button onClick={saveUser}>Save</button>
		</div>
	);
}