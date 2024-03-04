function timeFormatter(seconds: string): string {
  const numericSeconds = parseInt(seconds, 10);

  if (isNaN(numericSeconds) || numericSeconds < 0) {
    return "Invalid input";
  }

  const minutes = Math.floor(numericSeconds / 60);

  if (minutes === 0 || minutes === 1) {
    return "1 min";
  } else {
    return `${minutes} mins`;
  }
}

export default timeFormatter;

// // Example usage:
// console.log(formatSecondsToMinutes("300")); // Output: "5 mins"
// console.log(formatSecondsToMinutes("120")); // Output: "2 mins"
// console.log(formatSecondsToMinutes("60"));  // Output: "1 min"
// console.log(formatSecondsToMinutes("600")); // Output: "10 mins"
