import React from "react";
import { loginAxios } from "../apis/auth/login";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useInputs } from "../hooks/useInputs";

function Login() {
  const initialState = {
    memberId: "",
    memberPw: "",
  };
  const [userInfo, handleInputsChange, resetForm] = useInputs(initialState);
  const navigate = useNavigate();

  const mutation = useMutation(loginAxios, {
    onSuccess: (token) => {
      sessionStorage.setItem("AccessToken", token);
      alert("로그인 성공");
      resetForm();
      navigate("/");
    },
    onError: ({ message }) => {
      console.log(message);
      alert("ERROR : 서버 에러 로그인 실패");
    },
  });

  const handleClickLoginBtn = async () => {
    if (!userInfo.userId || !userInfo.userPw) {
      alert("아이디와 패스워드를 모두 입력해주세요.");
      return;
    }
    mutation.mutate({
      memberId: userInfo.userId,
      memberPw: userInfo.userPw,
    });
  };

  return (
    <>
      <input
        type="text"
        name="userId"
        value={userInfo.userId}
        onChange={handleInputsChange}
      />
      <input
        type="password"
        name="userPw"
        value={userInfo.userPw}
        onChange={handleInputsChange}
      />
      <button onClick={handleClickLoginBtn} />
    </>
  );
}

export default Login;
