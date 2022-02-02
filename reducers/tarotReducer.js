import serviceFunctions from "../services/tarot";
import tarotDeckData from "../public/tarotData";
const defaultState = tarotDeckData;

export const fetchAll = () => {
  return async (dispatch) => {
    const data = await serviceFunctions.getCards();
    dispatch({
      type: "FETCH_ALL",
      data: data.cards,
    });
  };
};

export const selectDeck = (value) => {
  return async (dispatch) => {
    const data = defaultState[value];
    dispatch({
      type: "SELECT_DECK",
      data: data,
    });
  };
};

export const removeCard = (value) => {
  return async (dispatch) => {
      console.log(value)
    dispatch({
      type: "REMOVE_CARD",
      data: value,
    });
  };
};

const tarotReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return [...action.data];
    case "REMOVE_CARD":
        const temp = state
        const index = temp.map(element => element.name).indexOf(action.data.name)
        const slice = temp.splice(index, 1)
      return temp;
    case "SELECT_DECK":
      console.log(action.data);
      return [...action.data];
    default:
      return state;
  }
};

export default tarotReducer;
