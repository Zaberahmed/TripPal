export const formatDate = (dateTime: string) => {
	const date = new Date(dateTime);
	return `${date.getDate()}th ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`;
};
