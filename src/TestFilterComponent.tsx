import React, {useState} from "react";

export const TestFilterComponent =()=>{
	const person =[
		{firstName: "Roma", lastName: "Ivanov", age: 27},
		{firstName: "Valera", lastName: "Ivanov", age: 21},
		{firstName: "Sasha", lastName: "Petrov", age: 52},
		{firstName: "Rita", lastName: "Ivanov", age: 63},
		{firstName: "Alex", lastName: "Tarasov", age: 12},
		{firstName: "Nikita", lastName: "Petrov", age: 24},
		{firstName: "Misha", lastName: "Tarasov", age: 62},
	];

	let [keyName, setKeyName] = useState('All');
	let filteredPerson = person;
	if(keyName === "Ivanov"){
		filteredPerson = person.filter((el=>el.lastName === "Ivanov"));
	}
	if(keyName === "Petrov"){
		filteredPerson = person.filter((el=>el.lastName === "Petrov"));
	}
	if(keyName === "Tarasov"){
		filteredPerson = person.filter((el=>el.lastName === "Tarasov"));
	}

	const clickTheButton =(valueKey:string)=>{
		setKeyName(valueKey);
	}

	return(
		<div>
			<ul>
				{filteredPerson.map((el, index)=>{
					return(
						<li key={index}>
							<span>{el.firstName} </span>
							<span>{el.lastName} </span>
							<span>{el.age}</span>
						</li>
					);
				})}
			</ul>
			<div>
				<button onClick={()=>{clickTheButton("All")}}>All</button>
				<button onClick={()=>{clickTheButton("Ivanov")}}>Ivanov</button>
				<button onClick={()=>{clickTheButton("Petrov")}}>Petrov</button>
				<button onClick={()=>{clickTheButton("Tarasov")}}>Tarasov</button>
			</div>
		</div>
	);
}