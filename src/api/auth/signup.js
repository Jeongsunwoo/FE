import { instance } from "../axios"

const signUpUser = async (payload) => {
    await instance.post(`http://localhost:4000/newUser`, payload)
}

export {signUpUser}