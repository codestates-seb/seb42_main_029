import React from "react";
import styled from "styled-components";
import PayCompleteForm from "../components/pay/payComplete/PayCompleteForm";
import { useNavigate } from "react-router-dom";

export default function PayComplete() {
  const navigate = useNavigate();

  const shoppingBtnHandle = () => {
    navigate("/mypage");
  };

  const homeBtnHandle = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <PayCompleteForm />
      <BtnGrp>
        <button onClick={shoppingBtnHandle}>주문내역 확인하기</button>
        <button onClick={homeBtnHandle}>홈으로 가기</button>
      </BtnGrp>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnGrp = styled.div`
  button {
    width: 220px;
    height: 70px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: #fbd8d8;
    margin-left: 1rem;

    :hover {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      width: 110px;
      height: 50px;
      font-size: 0.8rem;
    }
  }
`;