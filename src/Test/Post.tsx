import React from 'react';

export const Post = () => {
	const sum = (a: number, b: number) => {
		console.log(a + b);
	}
	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => sum(2, 9)}></button>
		</div>

	);
}