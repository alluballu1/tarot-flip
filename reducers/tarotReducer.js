import serviceFunctions from "../services/tarot"

export const fetchAll = () => {
    return async (dispatch) => {
        const data = await serviceFunctions.getCards()
        dispatch({
            type: "FETCH_ALL",
            data:data.cards
        })
    }
}

const tarotReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            console.log(action.data)
            return [...action.data]
        default:
            return state
    }
}

export default tarotReducer