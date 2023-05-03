export const dataState: DataStateType ={
	pages:
		[
			{
				heading: "123",
				about: "11",
			},
			{
				heading: "231",
				about: "22",
			},
			{
				heading: "312",
				about: "33",
			},
		],
}
export type DataStateType = {
	pages: Array<PagesType>,
}
export type PagesType = {
	heading: string,
	about: string,
}