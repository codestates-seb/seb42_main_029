import React from "react";
import styled from "styled-components";
import PayCompleteForm from "../components/pay/payComplete/PayCompleteForm";
import { useNavigate } from "react-router-dom";

export default function PayComplete() {

  const navigate = useNavigate()

  const shoppingBtnHandle = () => {
    navigate('/mypage')
  }
  return (
    <Wrapper>
      <PayCompleteForm />
      <button onClick={shoppingBtnHandle}>주문내역 확인하기</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 220px;
    height: 70px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: #fbd8d8;
  }
  button:last-child {
    margin-left: 1rem;
    :hover {
      color: #ffffff;
    }
  }
`;
