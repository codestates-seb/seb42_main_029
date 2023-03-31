import React from "react";
import styled from "styled-components";
import errorP from "../assets/img/errorPage.png";

export default function ErrorPage() {
  return (
    <Wrapper>
      <img src={errorP} alt="errorImg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 17rem;
  font-family: 'Dovemayo_gothic';

  img {
    width: 370px;
    height: 300px;
  }
`;
