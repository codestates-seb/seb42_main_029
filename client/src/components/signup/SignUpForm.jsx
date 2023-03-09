import React from "react";
import styled from "styled-components";

export default function SignUpForm() {
  const signUpHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Title>일반 회원가입</Title>
      <form onSubmit={signUpHandle}>
        <label>이름</label>
        <input type="text" name="name" required />
        <label>아이디</label>
        <input type="text" name="id" required />
        <label>비밀번호</label>
        <input type="password" name="password" required />
        <label>비밀번호 확인</label>
        <input type="password" name="passwordCheck" required />
        <label>이메일</label>
        <input type="email" name="email" required />
        <label>주소</label>
        <input type="text" name="address" required />

        <SignUpBtn>확인</SignUpBtn>
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
  height: 550px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 4rem;

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 1rem;

    label {
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
  margin-top: 1.5rem;
  cursor: pointer;
`;
