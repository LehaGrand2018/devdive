export const addEnding = (word, count) => {
  count = Math.abs(count);
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return word + "ов";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return word + "а";
  }
  if (lastDigit === 0 || (lastDigit >= 5 && lastDigit <= 9)) {
    return word + "ов";
  }
  return word;
};

export const parseDate = (dateSource) => {
  const date = new Date(dateSource).toLocaleDateString("ru-RU").replace("", "");
  const time = new Date(dateSource).toLocaleTimeString("ru-RU").slice(0, 5);
  return time + " " + date;
};

export const validate = () => {};
