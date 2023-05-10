import React from "react";
import { loginAxios } from "../apis/auth/login";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useInputs } from "../hooks/useInputs";
import styled from "../styles/css/login.module.css";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/modules/loginSlice";

function Login() {
  const initialState = {
    memberId: "",
    memberPw: "",
  };

  const [userInfo, handleInputsChange, resetForm] = useInputs(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation(loginAxios, {
    onSuccess: (message) => {
      console.log(message);
      alert("로그인 성공");
      dispatch(isLogin(true));
      resetForm();
      navigate("/");
    },
    onError: () => {
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
      password: userInfo.userPw,
    });
  };

  return (
    <>
      <h5 className={styled.title}>LOGIN</h5>
      <div className={styled.contentsCon}>
        <div className={styled.content}>
          <span className={styled.contentTitle}>아이디</span>
          <input
            type="text"
            name="userId"
            value={userInfo.userId}
            placeholder="아이디를 입력해주세요"
            onChange={handleInputsChange}
            className={styled.contentValue}
          />
        </div>
        <div className={styled.content}>
          <span className={styled.contentTitle}>비밀번호</span>
          <input
            type="password"
            name="userPw"
            value={userInfo.userPw}
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputsChange}
            className={styled.contentValue}
          />
        </div>
        <Link to="/account/signup">회원가입 페이지로 이동</Link>
        <div className={styled.buttonCon}>
          <button className={styled.loginBtn} onClick={handleClickLoginBtn}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
