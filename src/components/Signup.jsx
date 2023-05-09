import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useInput } from "../utils/useInput";
import { signUpUserAxios } from "../apis/auth/signup";
import styled from "../styles/css/login.module.css";

function Signup() {
  const navigation = useNavigate();
  const [userId, setUserId] = useInput("");
  const [userPassword, setUserPassword] = useInput("");
  const [userNickName, setUserNickName] = useInput("");

  const addmutation = useMutation(signUpUserAxios, {
    onSuccess: () => {
    },
  });

  const onSubmitUserHandler = (e) => {
    e.preventDefault();

    const newUser = {
      memberId: userId,
      password: userPassword,
      nickname: userNickName,
    };
    if(userId.length == 0){
      alert("ID를 입력해주세요")
    }else if(userPassword.length == 0){
      alert("PW를 입력해주세요")
    }else if(userNickName.length == 0){
      alert("닉네임을 입력해주세요")
    }
    console.log("등록되는 회원 정보 => ", newUser);
    
    addmutation.mutate(newUser);
  };

  return (
    <>
      <h5 className={styled.title}>SIGNUP</h5>
      <div className={styled.contentsCon}>
        <div className={styled.content}>
          <label htmlFor="userid" className={styled.contentTitle}>
            아이디
          </label>
          <input
            type="text"
            value={userId}
            onChange={setUserId}
            placeholder="아이디를 입력해주세요"
            className={styled.contentValue}
          />
        </div>
        <div className={styled.content}>
          <label htmlFor="password" className={styled.contentTitle}>
            비밀번호
          </label>
          <input
            type="password"
            value={userPassword}
            onChange={setUserPassword}
            autoComplete="off"
            placeholder="비밀번호를 입력해주세요"
            className={styled.contentValue}
          />
        </div>
        <div className={styled.content}>
          <label htmlFor="nickname" className={styled.contentTitle}>
            닉네임
          </label>
          <input
            type="text"
            value={userNickName}
            onChange={setUserNickName}
            placeholder="닉네임을 입력해주세요"
            className={styled.contentValue}
          />
        </div>
        <div className={styled.buttonCon}>
          <button className={styled.loginBtn} onClick={onSubmitUserHandler}>
            회원가입
          </button>
          <button
            className={styled.loginBtn}
            onClick={() => navigation("/account/login")}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
