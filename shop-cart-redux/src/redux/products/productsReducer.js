const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};