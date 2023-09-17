export const splitStringIntoNumberAndText = string => {
    const match = string.match(/(\D+)(\d+)/);
  
    if (match) {
        const text = match[1].trim();
        const number = parseInt(match[2], 10);
        return { text, number };
    } else {
        return string;
    }
  };