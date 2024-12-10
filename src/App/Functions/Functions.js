import i18next from "../../i18n";

export const addEndingRU = (word, count) => {
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

export const addEndingEN = (word, count) => {
  if (Math.abs(count) !== 1) {
    if (word.endsWith("y") && !/[aeiou]y$/.test(word)) {
      return word.slice(0, -1) + "ies";
    }
    return word + "s";
  }
  return word;
};

export const addEnding = (word, count) => {
  console.log("Language:", i18next.language);
  switch (i18next.language) {
    case "ru":
      return addEndingRU(word, count);
    case "en":
      console.log("en");
      return addEndingEN(word, count);
    default:
      return word;
  }
};

export const parseDate = (dateSource) => {
  const date = new Date(dateSource).toLocaleDateString("ru-RU").replace("", "");
  const time = new Date(dateSource).toLocaleTimeString("ru-RU").slice(0, 5);
  return time + " " + date;
};

export const validate = () => {};
