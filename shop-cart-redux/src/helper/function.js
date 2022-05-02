const shortanWord = (word) => {
    const wordArray = word.split(" ");
    return wordArray.slice(0, 2);
}

export {shortanWord}