import React, {useState} from "react";

type FilterType = 'All' | 'Dollar' | 'Ruble';

export const Currency = () => {
	let money = [
		{banknote: 'dollar', nominal: 100, number: ' a1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' z1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' w1234567890'},
		{banknote: 'dollar', nominal: 100, number: ' e1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' c1234567890'},
		{banknote: 'ruble', nominal: 100, number: ' r1234567890'},
		{banknote: 'dollar', nominal: 50, number: ' x1234567890'},
		{banknote: 'ruble', nominal: 50, number: ' v1234567890'}
	];
	let[buttonValue, setButtonValue] = useState<FilterType>("All");
	let filteredMoney = money;
	if (buttonValue === 'Ruble'){
		filteredMoney = money.filter(el=>el.banknote === 'ruble')
	}
	if (buttonValue === 'Dollar'){
		filteredMoney = money.filter(el=>el.banknote === 'dollar')
	}
	let clickButtonFunction =(keyValue:FilterType)=>{
		setButtonValue(keyValue);
	}
	return(
		<>
			<ul>
				{filteredMoney.map((objFromMoneyArr, index)=>{
					return (
						<li key={index}>
							<span>{objFromMoneyArr.banknote}</span>
							<span>{objFromMoneyArr.nominal}</span>
							<span>{objFromMoneyArr.number}</span>
						</li>

					)
				})}
			</ul>
			<div>
				<button onClick={()=>{clickButtonFunction("All")}}>All</button>
				<button onClick={()=>{clickButtonFunction("Ruble")}}>Ruble</button>
				<button onClick={()=>{clickButtonFunction("Dollar")}}>Dollar</button>
			</div>
		</>
	);
}