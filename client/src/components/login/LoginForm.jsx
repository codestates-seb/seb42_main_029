import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginForm from "./GoogleLoginForm";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  const navigate = useNavigate();

  //! 리액트 쿠키
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  // login 인풋 값 >> json-server-auth 는 username 말고 email 로 변경해야함
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // login 유효성 체크 아이디,비밀번호
  const onChangeId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value)) setIdError(false);
    else setIdError(true);
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || passwordRegex.test(e.target.value)) setPasswordError(false);
    else setPasswordError(true);
    setPassword(e.target.value);
  };

  const validation = () => {
    // 각 값이 있을 때 Error 상태 true 변경
    if (!username) setIdError(true);
    if (!password) setPasswordError(true);

    if (username && password) return true;
    else return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const header = {
      headers: {
        withCredentials: true,
      },
    };

    if (validation())
      //! 로그인 POST
      return await axios
        .post(
          "http://ec2-3-36-78-57.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
          {
            username,
            password,
          },
          { header }
        )
        .then((res) => {
          // console.log(res.data.accessToken);

          //? { path: "/" } 전역에 쿠키 사용
          setCookie("accessToken", res.headers.authorization, { path: "/" });
          alert("로그인 성공..!");
          // redux isLogin 상태
          // 나중에 get 받은걸 payload 에 넣는다
          dispatch({ type: "USER_ISLOGIN" });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert("로그인 실패..!");
        });
  };

  //! 나중 구글 oath2 할 때,, 쓸려면 쓰고 아님 지울 거
  // const LoginHandler = (e) => {
  //   e.preventDefault();

  //   const userObject = jwt_decode(e.credential);
  //   console.log(userObject);
  // };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form onSubmit={onSubmit}>
        <label>아이디</label>
        <input type="text" name="username" onChange={onChangeId} required />
        {idError && <ValidP>영문자와 숫자를 조합한 최소 5글자 이상으로 작성하세요.</ValidP>}
        <label>비밀번호</label>
        <input type="password" name="password" onChange={onChangePassword} required />
        {passwordError && <ValidP>문자와 숫자를 조합한 최소 8글자 이상으로 작성하세요.</ValidP>}
        <LoginBtn>로그인</LoginBtn>

        {/* <GoogleLoginForm />
        <button onClick={() => googleLogout()}>logout</button> */}

        <Link to="/signUp">
          <SignUpBtn>회원가입</SignUpBtn>
        </Link>

        <Find>
          <button>아이디 찾기</button>
          <button>비밀번호 찾기</button>
        </Find>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #feeade;
  width: 350px;
  height: 460px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 4rem;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;

    label {
      justify-content: flex-start;
      align-content: flex-start;
      font-size: 0.9rem;
      font-weight: bold;
      margin-top: 5px;
    }
  }

  input {
    width: 250px;
    height: 35px;
    border: none;
    border-radius: 10px;
    margin-bottom: 5px;
  }
`;

const Title = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const LoginBtn = styled.button`
  width: 250px;
  height: 40px;
  font-size: 13px;
  text-align: center;
  background-color: #faa36f;
  padding: 10px;
  margin: 5px 0;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  width: 250px;
  height: 40px;
  font-size: 13px;
  text-align: center;
  background-color: #faa36f;
  padding: 10px;
  margin: 5px 0;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const SocialBtn = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 250px;
  border: 1px solid #d7d9dd;
  padding: 10px;
  margin: 4px 0;
  border-radius: 5px;
  letter-spacing: normal;
  text-align: center;

  img {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const GoogleLogin = styled(SocialBtn)`
  background-color: #ffffff;
  outline: none;
`;

const Find = styled.div`
  button {
    width: 120px;
    height: 40px;
    font-size: 13px;
    text-align: center;
    background-color: #e2ccb3;
    padding: 10px;
    margin: 5px 0;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    :first-child {
      margin-right: 5px;
    }

    :last-child {
      margin-left: 5px;
    }
  }
`;

const ValidP = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-bottom: 0.5rem;
`;
