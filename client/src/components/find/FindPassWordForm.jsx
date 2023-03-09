import React from 'react'
import styled from 'styled-components';

export default function FindPassWordForm() {
  const FindIdHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Wrapper>
        <Title>비밀번호 찾기</Title>
        <form onSubmit={FindIdHandle}>
          <label>아이디</label>
          <input type="text" name="name" required />
          <label>이메일</label>
          <input type="email" name="email" required />

          <OkBtn>이메일로 임시 비밀번호 받기</OkBtn>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #feeade;
  width: 350px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 3rem;

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 1rem;

    label {
      font-size: 0.9rem;
      font-weight: bold;
      margin-top: 3px;
    }
  }

  input {
    width: 250px;
    height: 25px;
  }
`;

const Title = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const OkBtn = styled.button`
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
  margin-top: 3rem;
  cursor: pointer;
`;

