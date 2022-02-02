import serviceFunctions from "../services/tarot"
import tarotDeckData from "../public/tarotData"
const defaultState = tarotDeckData

export const fetchAll = () => {
    return async (dispatch) => {
        const data = await serviceFunctions.getCards()
        dispatch({
            type: "FETCH_ALL",
            data:data.cards
        })
    }
}

export const selectDeck = (value) => {
    return async (dispatch) => {
        const data = defaultState[value]
        dispatch({
            type: "SELECT_DECK",
            data: data
        })
    }
 }

const tarotReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            console.log(defaultState)
            return [...action.data]
        case "SELECT_DECK":
            console.log(action.data)
            return [...action.data]
        default:
            return state
    }
}

export default tarotReducer