const getRandomNumber = (start: number, end: number): number => {
  return Math.round(start + Math.random() * (end - start + 1));
};

export { getRandomNumber };
