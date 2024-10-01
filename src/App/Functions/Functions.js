

export const addEnding = (word, count) => {
  
    if (count % 10 >= 2 && count % 10 <= 4) {
        return (word += 'а');
    }
    if (count % 10 === 0 || (count % 10 >= 5 && count % 10 <= 9)) {
        return (word += 'ов');
    }
    return word;
}

export const parseDate = (dateSource) => {
    const date = new Date(dateSource).toLocaleDateString('ru-RU').replace('', '');
    const time = new Date(dateSource).toLocaleTimeString('ru-RU').slice(0, 5);
    return time + ' ' + date;
}



