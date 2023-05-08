import React from "react";
import { signUpUser } from "../api/auth/signup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useInput } from "../utils/useInput";

function Signup() {
  const navigation = useNavigate();

  const [userId, setUserId] = useInput("");
  const [userPassword, setUserPassword] = useInput("");
  const [userNickName, setUserNickName] = useInput("");

  const mutation = useMutation(signUpUser, {
    onSuccess: () => {
      alert("회원등록 완료!");
    },
  });

  const onSubmitUserHandler = (e) => {
    e.preventDefault();

    const newUser = {
      memberId: userId,
      password: userPassword,
      nickname: userNickName,
    };
    console.log("등록되는 회원 정보 => ", newUser);
    mutation.mutate(newUser);
  };

  return (
    <>
      <div className="loginBox">
        <h1>Sign Up</h1>

        <form onSubmit={onSubmitUserHandler}>
          <label htmlFor="userid">ID : </label>
          <input
            type="text"
            value={userId}
            onChange={setUserId}
            placeholder="아이디를 입력해주세요"
          />

          <label htmlFor="password">password : </label>
          <input
            type="password"
            value={userPassword}
            onChange={setUserPassword}
            autoComplete="off"
            placeholder="비밀번호를 입력해주세요"
          />

          <label htmlFor="nickname">Nickname : </label>
          <input
            type="text"
            value={userNickName}
            onChange={setUserNickName}
            placeholder="닉네임을 입력해주세요"
          />

          <button>회원가입</button>
        </form>
        <button onClick={() => navigation("/account/login")}>로그인</button>
      </div>
    </>
  );
}

// export default Signup;
