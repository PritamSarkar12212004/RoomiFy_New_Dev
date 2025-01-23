const formatToReadableTime = (isoString) => {
  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;
  // Ensure minutes are always two digits
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${hours}:${formattedMinutes} ${ampm}`;
};

export default formatToReadableTime;
