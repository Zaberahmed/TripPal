export const calculateDuration = (departureTime: string, arrivalTime: string) => {
	const departureDate = new Date(departureTime);
	const arrivalDate = new Date(arrivalTime);
	const durationInMinutes = (arrivalDate.getTime() - departureDate.getTime()) / (60 * 1000);
	const hours = Math.floor(durationInMinutes / 60);
	const minutes = durationInMinutes % 60;
	return `${hours}h ${minutes}m`;
};
