import axios from "axios";

const url = "https://rws-cards-api.herokuapp.com/api/v1/"

const getCards = async () => {
    const data = await axios.get(url)
    return data.data
}

export default {getCards}