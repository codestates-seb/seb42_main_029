import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function SignUpForm() {
  const navigate = useNavigate();

  //! 리액트 쿠키
  // const [cookies, setCookie, removeCookie] = useCookies()

  // input onChange value
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // valid Check Error > return part > ValidP tag apply
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);

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

    if (!passwordCheck || e.target.value === passwordCheck) setPasswordCheckError(false);
    else setPasswordCheckError(true);
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    if (password === e.target.value) setPasswordCheckError(false);
    else setPasswordCheckError(true);
    setPasswordCheck(e.target.value);
  };
  const onChangeName = (e) => {
    setNameError(false);
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };
  const onChangeAddress = (e) => {
    if (!e.target.value) {
      setAddressError(true);
    } else {
      setAddressError(false);
      setAddress(e.target.value);
    }
  };

  const validation = () => {
    // 각 값이 있을 때 Error 상태 true 변경
    if (!id) setIdError(true);
    if (!password) setPasswordError(true);
    if (!passwordCheck) setPasswordCheckError(true);
    if (!name) setNameError(true);
    if (!email) setEmailError(true);

    if (id && password && passwordCheck && name && email) return true;
    else return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validation())
      //! 회원가입 POST
      await axios
        .post("users/sign-up", { id, password, name, email, address })
        .then((res) => {
          // console.log(res.data.accessToken);
          // setCookie('accessToken', res.data.accessToken, { path: '/' })
          navigate("/login");
          alert("회원가입 성공..!");
        })
        .catch((error) => {
          console.log(error);
          alert("회원가입 실패..!");
        });
  };

  return (
    <Wrapper>
      <Title>일반 회원가입</Title>
      <form onSubmit={onSubmit}>
        <label>이름</label>
        <input type="text" name="name" onChange={onChangeName} required />
        {nameError && <ValidP>이름을 입력하세요.</ValidP>}

        <label>아이디</label>
        <input type="text" name="id" onChange={onChangeId} required />
        {idError && <ValidP>영문자와 숫자를 조합한 최소 5글자 이상으로 작성하세요.</ValidP>}

        <label>비밀번호</label>
        <input type="password" name="password" onChange={onChangePassword} required />
        {passwordError && <ValidP>문자와 숫자를 조합한 최소 8글자 이상으로 작성하세요.</ValidP>}

        <label>비밀번호 확인</label>
        <input type="password" name="passwordCheck" onChange={onChangePasswordCheck} required />
        {passwordCheckError && <ValidP>비밀번호가 일치하지 않습니다.</ValidP>}

        <label>이메일</label>
        <input type="email" name="email" onChange={onChangeEmail} required />
        {emailError && <ValidP>유효한 이메일 형식을 입력하세요.</ValidP>}

        <label>주소</label>
        <input type="text" name="address" placeholder="배송지를 위한 주소입니다." onChange={onChangeAddress} required />
        {addressError && <ValidP>주소를 입력하세요.</ValidP>}
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
  height: auto;
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
  margin: 1.6rem 0;
  cursor: pointer;
`;

const ValidP = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-bottom: 0.5rem;
`;
