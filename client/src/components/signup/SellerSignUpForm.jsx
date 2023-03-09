import React from "react";
import styled from "styled-components";

export default function SellerSignUpForm() {
  const signUpHandle = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <TopRef>
        <h2>귀하는 아직 판매자가 아닙니다</h2>
        <p>
          판매를 원하신다면 지금 바로 판매자 신청을 해주세요. <br />
          신청 후 심사결과는 빠른 시일 내에 연락 드리겠습니다.
        </p>
      </TopRef>

      <Title>판매자 회원가입</Title>
      <form onSubmit={signUpHandle}>
        <label>상호명</label>
        <input type="text" name="name" required />
        <label>아이디</label>
        <input type="text" name="id" required />
        <label>비밀번호</label>
        <input type="password" name="password" required />
        <label>비밀번호 확인</label>
        <input type="password" name="passwordCheck" required />
        <label>이메일</label>
        <input type="email" name="email" required />
        <label>사업자 주소</label>
        <input type="text" name="address" required />
        <label>사업자 등록번호</label>
        <input type="text" name="enrollNumber" required />
        <label>사업자 전화번호</label>
        <input type="text" name="tel" required />
        <label>사업자 등록증</label>
        <input type="file" name="tel" required />
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
  width: 370px;
  height: 720px;
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

const TopRef = styled.div`
  margin-top: 1rem;
`;

const Title = styled.div`
  margin-top: 2.5rem;
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
