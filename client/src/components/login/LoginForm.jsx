import React from "react";
import styled from "styled-components";
import googleLogo from "../../assets/svg/googleLogo.svg";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const LoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
    <Title>로그인</Title>
      <form onSubmit={LoginHandler}>
        <label>아이디</label>
        <input type="text" name="id" required />
        <label>비밀번호</label>
        <input type="password" name="password" required />
        <LoginBtn>로그인</LoginBtn>
        <GoogleLogin>
          <img src={googleLogo} alt="logo_google" />
          Log in with Google
        </GoogleLogin>

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
  margin-top: 6rem;

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
