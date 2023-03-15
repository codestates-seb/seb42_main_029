import React from "react";
import styled from "styled-components";

export default function SellerSignUpForm() {
  const sellerSignUpHandle = (e) => {
    e.preventDefault();


    const id = e.target.id.value;
    const password = e.target.password.value;
    const passwordCheck = e.target.passwordCheck.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const registrationNumber = e.target.registrationNumber.value
    const phone = e.target.phone.value;
    const bankName = e.target.bankName.value;
    const accountNumber = e.target.accountNumber.value;

        //! email 정규식
        const emailRegex =
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  
      // 이메일 정규식
      if (email.match(emailRegex) === null) {
        alert("정확한 이메일 형식을 입력하세요!");
      } else {
        alert("이메일 확인!");
      }
  
      //! 비밀번호 정규식,,, 최소 8자리의 문자와 숫자 조합 형식
      const passwordRegex = /^[A-Za-z0-9]{8,30}$/;
  
      if (password.length < 6) {
        alert("비밀번호는 6자리 이상이어야 합니다.");
        return false;
      }
  
      if (password.match(passwordRegex) === null) {
        alert("비밀번호는 최소 8자리의 문자와 숫자 조합 형식을 입력하세요!");
        return;
      } else {
        // 맞을 경우 출력
        console.log("비밀번호 형식이 일치합니다!");
      }
  
      if (password !== passwordCheck) {
        alert("비밀번호가 일치하지 않습니다!");
        return false;
      } else {
        alert("비밀번호가 일치합니다!");
        return true;
      }
  };

  return (
    <Wrapper>
      <TopRef>
        <h2>귀하는 아직 판매자가 아닙니다.</h2>
        <p>
          판매를 원하신다면, 판매자 신청을 해주세요. <br />
          신청 후 빠른 시일 내 승인하겠습니다.
        </p>
      </TopRef>

      <Title>판매자 회원가입</Title>
      <form onSubmit={sellerSignUpHandle}>
        <label>아이디</label>
        <input type="text" name="id" required />
        <label>비밀번호</label>
        <input type="password" name="password" required />
        <label>비밀번호 확인</label>
        <input type="password" name="passwordCheck" required />
        <label>이메일</label>
        <input type="email" name="email" required />
        <label>상호명</label>
        <input type="text" name="name" required />
        <label>사업자 주소</label>
        <input type="text" name="address" required />
        <label>사업자 등록번호</label>
        <input type="text" name="registrationNumber" required />
        <label>전화번호</label>
        <input type="text" name="phone" required />
        <label>은행명</label>
        <input type="text" name="bankName" required />
        <label>계좌번호</label>
        <input type="text" name="accountNumber" required />

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
  height: 800px;
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
    height: 30px;
    border: none;
    border-radius: 10px;
    margin-bottom: 5px;
  }
`;

const TopRef = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
  }
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
