export {};
export type ManType = {
	name: string;
	age: number;
	lessons: Array<{ title: string }>
}
test("testing", () => {

	let man = {
		name: "Sasha",
		age: 25,
		lessons: [{title: "1"}, {title: "2"}]
	}
	const age = man.age;
	console.log(age)
	expect(age).toBe(25);
})