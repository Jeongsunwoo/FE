import axios from "axios";
import { instance } from "./axios";

const getMyPageUser = async () => {
    const response = await instance.get(`/rank`)
    return response.data.data
}

const removeUserReview = async (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/sample/${id}`)
}

export { getMyPageUser, removeUserReview }