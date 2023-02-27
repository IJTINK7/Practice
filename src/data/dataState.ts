export const dataState: DataStateType ={
	pages:
		[
			{
				heading: "1",
				about: "11",
			},
			{
				heading: "2",
				about: "22",
			},
			{
				heading: "3",
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