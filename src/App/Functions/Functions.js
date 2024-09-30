

export const addEnding = (word, count) => {

    let result = word
    
    if (count % 10 >= 2 && count % 10 <= 4) {
        return (result += 'а');
    }
    if (count % 10 === 0 || (count % 10 >= 5 && count % 10 <= 9)) {
        return (result += 'ов');
    }
}

export const parseDate = (dateSource) => {
    const date = new Date(dateSource).toLocaleDateString('ru-RU').replace('', '');
    const time = new Date(dateSource).toLocaleTimeString('ru-RU').slice(0, 5);
    return time + ' ' + date;
}



