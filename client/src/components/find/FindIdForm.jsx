import React from "react";
import styled from "styled-components";

export default function FindIdForm() {
  const FindIdHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Wrapper>
        <Title>아이디 찾기</Title>
        <form onSubmit={FindIdHandle}>
          <label>이름</label>
          <input type="text" name="name" required />
          <label>이메일</label>
          <input type="email" name="email" required />

          <OkBtn>아이디 찾기</OkBtn>
        </form>
        <ReceiveId>
          <p>귀하의 아이디는</p>
          <div />
          <p>입니다.</p>
        </ReceiveId>
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
  height: 400px;
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
  margin-top: 1.5rem;
  cursor: pointer;
`;

const ReceiveId = styled.div`
  margin-top: 1rem;

  div {
    width: 250px;
    height: 30px;
    background-color: #ffd9c3;
  }
`;
