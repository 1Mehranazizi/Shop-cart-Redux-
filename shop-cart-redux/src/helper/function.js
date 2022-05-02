const shortanWord = (word) => {
    const wordArray = word.split(" ");
    return wordArray.slice(0, 2);
}

const isInCart = (state, id) => {
    const result = !!state.selectedItem.find((item) => item.id === id);
    return result;
  };
  
  const quantityItem = (state, id) => {
    const indexItem = state.selectedItem.findIndex((item) => item.id === id);
    if (indexItem === -1) {
      return false;
    } else {
      return state.selectedItem[indexItem].quantity;
    }
  };

export {shortanWord , isInCart , quantityItem}