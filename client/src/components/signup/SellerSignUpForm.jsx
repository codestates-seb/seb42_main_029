import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SellerSignUpForm() {
  const navigate = useNavigate();

  // input onChange value
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // valid Check Error > return part >  <ValidP> tag apply
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [registrationNumberError, setRegistrationNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [bankNameError, setBankNameError] = useState(false);
  const [accountNumberError, setAccountNumberError] = useState(false);

  const onChangeId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value)) setIdError(false);
    else setIdError(true);
    setLoginId(e.target.value);
  };

  const onChangePassword = (e) => {
    //! 특문 + 영대소문 + 숫자 >= 8자리
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // /^(?=.[a-zA-Z])(?=.\d)(?=.*[\W_]).{8,}$/;
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

  // 상호명
  const onChangeName = (e) => {
    if (!e.target.value) setNameError(true);
    else {
      setNameError(false);
      setName(e.target.value);
    }
  };

  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const onChangeRegistrationNumber = (e) => {
    const registrationNumberRegex = /^[0-9]{10}$/;

    if (!e.target.value || registrationNumberRegex.test(e.target.value)) {
      setRegistrationNumberError(false);
      setRegistrationNumber(e.target.value);
    } else {
      setRegistrationNumberError(true);
    }
  };

  const onChangeAddress = (e) => {
    if (!e.target.value) {
      setAddressError(true);
    } else {
      setAddressError(false);
      setAddress(e.target.value);
    }
  };

  const onChangePhone = (e) => {
    const phoneRegex = /^[0-9]{8,12}$/;
    if (!e.target.value || phoneRegex.test(e.target.value)) {
      setPhoneError(false);
      setPhone(e.target.value);
    } else {
      setPhoneError(true);
    }
  };

  const onChangeBankName = (e) => {
    if (!e.target.value) setBankNameError(true);
    else {
      setBankNameError(false);
      setBankName(e.target.value);
    }
  };

  const onChangeAccountNumber = (e) => {
    const accountNumberRegex = /^[0-9]{10,15}$/;
    if (!e.target.value || accountNumberRegex.test(e.target.value)) {
      setAccountNumberError(false);
      setAccountNumber(e.target.value);
    } else {
      setAccountNumberError(true);
    }
  };

  const validation = () => {
    // 각 값이 있을 때 Error 상태 true 변경
    if (!loginId) setIdError(true);
    if (!password) setPasswordError(true);
    if (!passwordCheck) setPasswordCheckError(true);
    if (!name) setNameError(true);
    if (!email) setEmailError(true);

    if (!registrationNumber) setRegistrationNumberError(true);
    if (!address) setAddressError(true);
    if (!phone) setPhoneError(true);
    if (!bankName) setBankNameError(true);
    if (!accountNumber) setAccountNumberError(true);

    // 등록시 값이 같지 않다면 false
    if (password !== passwordCheck) return false;

    // 에러 1개라도 있으면 false
    if (
      idError ||
      passwordError ||
      passwordCheckError ||
      nameError ||
      emailError ||
      registrationNumberError ||
      addressError ||
      phoneError ||
      bankNameError ||
      accountNumberError === true
    )
      return false;

    if (loginId && password && passwordCheck && name && email && registrationNumber && address && phone && bankName && accountNumber)
      return true; // 값이 다 존재하면 true
    else return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const header = {
      headers: {
        withCredentials: true,
      },
    };

    if (validation() === true) {
      //! 판매자 회원가입 POST
      await axios
        .post(
          "http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/sellers",
          {
            loginId,
            password,
            email,
            name,
            registrationNumber,
            address,
            phone,
            bankName,
            accountNumber,
          },
          { header }
        )
        .then((res) => {
          navigate("/");
          alert("판매자_회원가입 신청성공..! 회원가입 승인 대기 중입니다");
        })
        .catch((error) => {
          console.log(error);
          alert("판매자_회원가입 실패..!");
        });
    } else {
      alert("회원가입 실패.. 입력하신 정보를 다시 확인해주세요!");
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
      <form onSubmit={onSubmit}>
        <label>아이디</label>
        <input type="text" name="loginId" onChange={onChangeId} required />
        {idError && <ValidP>영문자와 숫자를 조합한 최소 5글자 이상으로 작성하세요.</ValidP>}

        <label>비밀번호</label>
        <input type="password" name="password" onChange={onChangePassword} required />
        {passwordError && <ValidP>특수문자,영문자,숫자를 조합한 8글자 이상으로 작성하세요.</ValidP>}

        <label>비밀번호 확인</label>
        <input type="password" name="passwordCheck" onChange={onChangePasswordCheck} required />
        {passwordCheckError && <ValidP>비밀번호가 일치하지 않습니다.</ValidP>}

        <label>이메일</label>
        <input type="email" name="email" onChange={onChangeEmail} required />
        {emailError && <ValidP>유효한 이메일 형식을 입력하세요.</ValidP>}

        <label>상호명</label>
        <input type="text" name="name" onChange={onChangeName} required />
        {nameError && <ValidP>상호명을 입력하세요.</ValidP>}

        <label>사업자 등록번호</label>
        <input type="text" name="registrationNumber" onChange={onChangeRegistrationNumber} required />
        {registrationNumberError && <ValidP>사업자 등록번호는 10자리의 숫자를 입력하세요.</ValidP>}

        <label>사업자 주소</label>
        <input type="text" name="address" onChange={onChangeAddress} required />
        {addressError && <ValidP>주소를 입력하세요.</ValidP>}

        <label>전화번호</label>
        <input type="text" name="phone" onChange={onChangePhone} required />
        {phoneError && <ValidP>전화번호는 최소 8자리, 최대 12자리의 숫자입니다.</ValidP>}

        <label>은행명</label>
        <input type="text" name="bankName" onChange={onChangeBankName} required />
        {bankNameError && <ValidP>은행명을 입력하세요.</ValidP>}

        <label>계좌번호</label>
        <input type="text" name="accountNumber" onChange={onChangeAccountNumber} required />
        {accountNumberError && <ValidP>계좌번호는 최소 10자리, 최대 14자리의 숫자입니다.</ValidP>}

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
  margin-top: 2.5rem;

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
  margin: 1.5rem 0;
  cursor: pointer;
`;

const ValidP = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-bottom: 0.5rem;
`;
