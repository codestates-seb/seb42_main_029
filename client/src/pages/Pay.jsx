import React from "react";
import styled from "styled-components";
import BtnGrp from "../components/pay/BtnGrp";
import BuyerInfo from "../components/pay/BuyerInfo";
import PayInfo from "../components/pay/PayInfo";
import ReceiverInfo from "../components/pay/ReceiverInfo";

export default function Pay() {
  return (
    <Wrapper>
      <Title>주문/결제</Title>
      <BuyerInfo />
      <ReceiverInfo />
      <PayInfo />
      <BtnGrp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

