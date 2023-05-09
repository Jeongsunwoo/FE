import { instance } from "../axios";

const signUpUserAxios = async (payload) => {
  try{
    console.log("payload => ",payload)
    await instance.post(`/wine/user/signup`, payload)
    alert("회원등록 완료!");
    }
    catch(error){
        alert(error)
    }
};

export { signUpUserAxios };
