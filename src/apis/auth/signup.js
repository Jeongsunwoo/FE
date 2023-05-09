import { instance } from "../axios";

const signUpUserAxios = async (payload) => {
  try{
    console.log("payload => ",payload)
    console.log("주소 => ",process.env.REACT_APP_SERVER_URL)
    await instance.post(`/user/signup`, payload)
    alert("회원등록 완료!");
    }
    catch(error){
        alert(error)
    }
};

export { signUpUserAxios };
