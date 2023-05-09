import { instance } from "../api/axios"

const signUpUser = async (payload) => {
    try{
    await instance.post(`/user/signup`, payload)
    alert("회원등록 완료!");
    }
    catch(error){
        alert(error)
    }
}

export {signUpUser}