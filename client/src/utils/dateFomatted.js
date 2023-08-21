const dateFommated = (date) => {
  const setDate = new Date(date);

  // Dec 8, 2021 at 13:09

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${
    month[setDate.getMonth()]
  } ${setDate.getDate()}, ${setDate.getFullYear()} at ${setDate.getHours()}:${setDate.getMinutes()}`;
};

export default dateFommated;
